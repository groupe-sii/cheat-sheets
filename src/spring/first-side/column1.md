# Controllers 

At class level
`@Controller`
`@RequestMapping("/appointments")`
`public class AppointmentsController {`

At method level for HTTP GET
`@GetMapping(path = "/{day}")`
`public Map<String, Appointment> getForDay(@PathVariable @DateTimeFormat(iso=ISO.DATE) Date day, Model model) {`

Getting request parameter
`@RequestMapping(method = RequestMethod.GET)`
`public String setupForm(@RequestParam("petId", required=false) int petId, ModelMap model) {`

You can use consumes and/or produces to control data type
`@RequestMapping(path = "/pets", method = RequestMethod.POST, consumes="application/json", produces = MediaType.APPLICATION_JSON_UTF8_VALUE)`
`@ResponseBoddy`
`public Pet addPet(@RequestBody Pet pet, Model model) {`

NB: You can avoid using ResponseBody if you use @RestController instead of @Controller

Handling cookies
`@RequestMapping("/displayInfo")`
`public void displayHeaderInfo(@CookieValue("JSESSIONID") String cookie)`

Handling HTTP headers
`@RequestMapping("/displayHeaderInfo")`
`public void displayHeaderInfo(@RequestHeader("Accept-Encoding") String encoding, @RequestHeader("Keep-Alive") long keepAlive) {`

# Using ModelAttribute and SessionAttributes

Full example:
`@Controller @RequestMapping("/trades")`
`@SessionAttributes("visitor")`
`public class TradeController {`
    `@RequestMapping("/**")`
    `public String handleRequestById (@ModelAttribute("visitor") Visitor visitor,Model model, HttpServletRequest request) {`
        `model.addAttribute("msg", "trades request, serving page " + request.getRequestURI());`
        `visitor.addPageVisited(request.getRequestURI());`
        `return "traders-page";`
    `}`
    `@ModelAttribute("visitor")`
    `public Visitor getVisitor (HttpServletRequest request) {`
        `return new Visitor(request.getRemoteAddr());`
    `}`
`}`




