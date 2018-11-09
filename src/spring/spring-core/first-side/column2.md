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
public class DummyServiceImpl implements DummyService {
}
```

## Dependency injection : **@Autowired**

* Via a class field
* Via a setter
* Via the constructor *(prefer for easy test)*

```Java
@Component
public class FooServiceImpl implements FooService {

  @Autowired
  private DummyService service;
  
  @Autowired
  public FooServiceImpl(DummyService dummyservice) {
    this.service = dummyService;
  }
  
  @Autowired
  public DummyService setDummyService(DummyService dummyService) {
    this.service = dummyService;
  }

}
```
