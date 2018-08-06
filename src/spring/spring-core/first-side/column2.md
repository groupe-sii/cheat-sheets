# Injection de dépendances

## Définir un bean : **@Bean**
```Java
@Configuration
public class MyAppConfig {
  @Bean
  public DummyService dummyService(){
    return new DummyServiceImpl();
  }
}
```

## Définir un bean : **@Component**

Spécialisations *@Component* : **@Service**, **@Repository** et **@Controller**

```Java
@Component
public class DummyServiceImpl {
}
```

## Injection de dépendance : **@Autowired**

* Via une propriété de classe
* Via un setter
* Via le constructeur *(à préférer pour faciliter de test)*

```Java
@Component
public class FooServiceImpl {

  @Autowired
  private DummyService service;

}
```

# Les propriétés

```Java
@Configuration
@PropertySource("classpath:foo.properties")
public class MyAppConfig {
  // Fichier 'foo.properties' chargé par Spring
}
``` 

Utiliser une propriété : **@Value("${message}")** 

```Java
@Value("${message:Message par défaut}")
private String message;
```
