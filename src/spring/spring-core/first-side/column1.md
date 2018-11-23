Spring **5.x** - Date : **August 2018**

# What is Spring ?

* **Open source** (Apache 2 licence, sources on [github](https://github.com/spring-projects/spring-framework))
* **Light**
  * Doesn't force to use an application server
  * Not invasive
* **Container**
  * Application objects doesn't have to look for their dependencies
  * Handles objects life cycle
* **Framework**
  * Ease integration and communication with third-party libraries

# Minimal dependencies

```xml
<dependency>
    <groupId>org.springframework</groupId>
    <artifactId>spring-context</artifactId>
</dependency>
```

# Application configuration

* Java
* Annotations
* XML (still available but heavy)

```Java
@ComponentScan("fr.sii.cheatsheet.spring")
public class MyApp {

    public static void main(String[] args) {
        ApplicationContext app = new AnnotationConfigApplicationContext(MyApp.class);

        DummyService helloWorld = app.getBean(DummyService.class);
        helloWorld.getMessage();
    }
}
```

Prefer use of a configuration class
```Java
@Configuration
public class MyAppConfig {
  // @Bean, ...
}
```
