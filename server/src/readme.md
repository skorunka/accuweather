# Developer`s notes

* If we would be using ASP.NET Core 2.1 we could use the [new HttpClientFactory](https://blogs.msdn.microsoft.com/webdev/2018/02/28/asp-net-core-2-1-preview1-introducing-httpclient-factory/).
  Unfortunately VS 15.6.7, the version I'm using, does not support ASP.NET Core 2.1 out of the box yet.

* Disposing or not reusing HttpClient is [bad practice](https://aspnetmonsters.com/2016/08/2016-08-27-httpclientwrong/), that's why I cache it(by endpoint) in `CachedHttpClientFactory` and
  register `CachedHttpClientFactory` as Singleton.

* I did follow [Task-based Asynchronous Pattern (TAP)](https://docs.microsoft.com/en-us/dotnet/standard/asynchronous-programming-patterns/task-based-asynchronous-pattern-tap).

* Wrap "JsonConvert" for better testability? I wouldn't do that.

* This app is actually like a proxy so there is not that much to unit tests.

## Possible Improvements

* Add paging to "GET: /api/city/search" for better UX
* Add API versioning for better maintenance
* Add Swagger for better APi documentation
* Add Serilog for better logging
* Add Azure Application Insights for better tracing and DevOps support
* Add more Weather providers
* Add docker for mocking/faking Weather Providers endpoint and add some integration tests or BDD using SpecFlow?
