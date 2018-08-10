# Dependency injection

## Define a bean : **@Bean**
```Java
@Configuration
public class MyAppConfig {
  @Bean
  public DummyService dummyService(){
    return new DummyServiceImpl();
  }
}
```

## Define a bean : **@Component**

*@Component* specializations : **@Service**, **@Repository** et **@Controller**

```Java
@Component
public class DummyServiceImpl {
}
```

## Dependency injection : **@Autowired**

* Via a class field
* Via a setter
* Via the constructor *(prefer for easy test)*

```Java
@Component
public class FooServiceImpl {

  @Autowired
  private DummyService service;

}
```

# Properties

```Java
@Configuration
@PropertySource("classpath:foo.properties")
public class MyAppConfig {
  // File 'foo.properties' loaded by Spring
}
``` 

Use a property : **@Value("${message}")** 

```Java
@Value("${message:Default message}")
private String message;
```
