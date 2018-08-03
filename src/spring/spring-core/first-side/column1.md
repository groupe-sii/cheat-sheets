Spring **5.x** - Date : **Août 2018**

# Qu'est-ce que Spring ?

* **Open source** (Licence Apache 2, sources sur [github](https://github.com/spring-projects/spring-framework))
* **Léger**
  * N'oblige pas d'utiliser un serveur applicatif
  * N'est pas invasif
* **Conteneur**
  * Les objets de l'application n'ont pas besoin de chercher à se connecter aux autres
  * Gère le cycle de vie des objets
* **Framework**
  *	Facilite l’intégration et la communication avec des librairies tiers

# Dépendance minimale

```xml
<dependency>
    <groupId>org.springframework</groupId>
    <artifactId>spring-context</artifactId>
</dependency>
```

# Configuration d'une appli

* Java
* Annotations
* XML (toujours possible mais verbeux)

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

Préférez l'utilisation d'une classe de configuration
```Java
@Configuration
public class MyAppConfig {
  // @Bean, ...
}
```
