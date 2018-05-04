namespace BoA.Solutions.Weather.Web.Api.Code.Middlewares
{
	using System;
	using System.Collections.Generic;
	using System.Net;
	using System.Net.WebSockets;
	using System.Threading.Tasks;
	using Microsoft.AspNetCore.Http;
	using Microsoft.Extensions.Logging;
	using Newtonsoft.Json;

	public class ApiErrorHandlingMiddleware
	{
		private readonly RequestDelegate next;

		#region ctors

		public ApiErrorHandlingMiddleware(RequestDelegate next)
		{
			this.next = next;
		}

		#endregion

		public async Task Invoke(HttpContext context, ILogger<ApiErrorHandlingMiddleware> logger)
		{
			try
			{
				await this.next(context);
			}
			catch (Exception ex)
			{
				await HandleExceptionAsync(context, logger, ex);
			}
		}

		private static Task HandleExceptionAsync(HttpContext context, ILogger logger, Exception exception)
		{
			var ticketId = Math.Abs(Guid.NewGuid().GetHashCode());

			logger?.LogError($"TicketId = {ticketId}\n{exception}");

			// ignore non-interactive exceptions
			if (exception is WebSocketException)
			{
				return Task.CompletedTask;
			}

			context.Response.ContentType = "application/json";
			context.Response.StatusCode = (int)HttpStatusCode.BadRequest;

			object result;
			switch (exception)
			{
				case AggregateException aggregateException:
					var exceptionMessages = new List<string>();

					foreach (var exInnerException in aggregateException.Flatten().InnerExceptions)
					{
						var exNestedInnerException = exInnerException;
						do
						{
							if (!string.IsNullOrEmpty(exNestedInnerException.Message))
							{
								exceptionMessages.Add(exNestedInnerException.Message);
							}

							exNestedInnerException = exNestedInnerException.InnerException;
						} while (exNestedInnerException != null);
					}

					result = new
					{
						ticketId,
						errorType = typeof(AggregateException).Name,
						errorText = exceptionMessages
					};
					break;
				default:
					result = new { ticketId, errorType = exception.GetType().Name, errorText = exception.Message };
					break;
			}

			return context.Response.WriteAsync(JsonConvert.SerializeObject(result));
		}
	}
}
