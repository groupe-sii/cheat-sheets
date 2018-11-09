# Properties

```Java
/**
 * File 'foo.properties' loaded by Spring
 */
@Configuration
@PropertySource("classpath:foo.properties")
public class MyAppConfig {

  /**
   * Property max in file foo.properties.
   */
  private Integer max;
  
}
``` 

Use a property : **@Value("${message}")** 

```Java
@Value("${message:Default message}")
private String message;
```


# Go deeper

* https://spring.io/guides
* https://spring.io/projects/spring-framework
* [Spring Core documentation](https://docs.spring.io/spring-framework/docs/5.0.8.RELEASE/spring-framework-reference/core.html)
* [Spring Boot cheat sheet](../spring-boot/index.html)
