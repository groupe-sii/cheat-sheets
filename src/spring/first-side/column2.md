# Handling exceptions

`@ControllerAdvice`
`public class ErrorController {`
`...`
`@ExceptionHandler(AccessDeniedException.class)`
`@ResponseBody`
`@ResponseStatus(HttpStatus.FORBIDDEN)`
`public ErrorResponse accessDenied(AccessDeniedException e) {`

# Asynchronous request processing

It is possible to use the Servlet 3.0 asynchronous request processing feature in Spring:
`@RequestMapping(method=RequestMethod.POST)`
`public Callable<String> processUpload(final MultipartFile file) {`
`return new Callable<String>() {`
`public String call() throws Exception {`
`// ...`
`return "someView";`
`}`
`};`
`}`

Or using DefferedResult
`@RequestMapping("/quotes")`
`@ResponseBody`
`public DeferredResult<String> quotes() {`
`DeferredResult<String> deferredResult = new DeferredResult<String>();`
`// Save the deferredResult somewhere..`
`return deferredResult;`
`}`
`// In some other thread...`
`deferredResult.setResult(data);`
