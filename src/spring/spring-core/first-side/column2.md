# Injection de dépendances

* Définir un bean : **@Component** ou **@Bean**
  - Spécialisations *@Component* : **@Service**, **@Repository** et **@Controller**
* Récupérer un bean défini par **injection de dépendance** : **@Autowired**
  - Via une propriété de classe
  - Via un setter
  - Via le constructeur *(à préférer pour faciliter de test)*

```Java
```Java
@Configuration
public class MyAppConfig {
  @Bean
  public DummyService dummyService(){
    return new DummyServiceImpl();
  }
}
// OU
@Component
public class DummyService {
}

@Component
public class FooService {

  @Autowired
  private DummyService service;

	public String myFooCall() {
		return service.myDummyServiceCall();
	}
}
```

# Les propriétés

* Déclarer le fichier : **@PropertySource("classpath:foo.properties")** 
* Utiliser une propriété : **@Value("${message}")** 

```Java
@Configuration
@PropertySource("classpath:foo.properties")
public class MyAppConfig {
}

@Component
public class MyServiceImpl implements MyService {
  @Value("${message:Message par défaut}")
  private String message;
}
```
