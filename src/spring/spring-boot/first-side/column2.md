# Best practices

<div style="border:solid 1px orange;border-radius: 5px;background:	rgb(255, 236, 179);padding:3px;display:flex;align-items: center;">
  <img alt="Warning :" src="../../assets/images/warning.png" style="height:2em;display:inline;margin-right:2px;"/> <span style="flex:1;">Don't use the **default** package. Prefer using the Java convention *com.example.project*</span>
</div>


## Code structure

```Java
com
  + example
  |  + project
  |  |  - MyApp.java
  |  |  |
  |  |  + player
  |  |  |  - Player.java
  |  |  |  - PlayerService.java
```

## Configuration

Properties files in folder *src/main/resources/* are loaded automatically
* **YAML** : `**/application*.yml` or `**/application*.yaml`
* **Properties** : `**/application*.properties`

## Auto-configuration

* Enabled by `@SpringBootApplication` or `@EnableAutoConfiguration`
* Spring Boot scans all libs on the classpath and auto-configures them (**if you didn't manually**)

Display Spring Boot Autoconfigure report
```sh
java -jar myapp.jar --debug
```

Disabling an auto-configuration class with Java conf
```Java
@EnableAutoConfiguration(exclude={DataSourceAutoConfiguration.class})
```
Disabling an auto-configuration class with properties
```
spring.autoconfigure.exclude= \
org.springframework.boot.autoconfigure.XXXX
```

