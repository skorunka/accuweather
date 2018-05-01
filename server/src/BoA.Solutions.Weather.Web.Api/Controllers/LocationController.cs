namespace BoA.Solutions.Weather.Web.Api.Controllers
{
	using Microsoft.AspNetCore.Mvc;

	[Route("api/[controller]")]
	public class LocationController : Controller
	{
		[HttpGet("search")]
		public string Search(string text)
		{
			return text;
		}
	}
}
