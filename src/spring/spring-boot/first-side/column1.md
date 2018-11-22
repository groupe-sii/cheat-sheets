Spring Boot **2.1.x** - Date : **November 2018**

# What is Spring Boot ?

* Built on top of a lot of Spring Projects (https://spring.io)
* Opinionated configuration
* Wide ecosystem
* Start a project faster with no configuration

# Features

* Bootstrap class `SpringApplication`
* Default logger (@see *spring-jcl*)
* FailureAnalyzers : friendly failure report
* Application Events on Listeners
* Choose the right `ApplicationContext`
* Accessing application arguments
* Control application exit code

# Quickstart

```xml
<parent>
    <groupId>org.springframework.boot</groupId>
    <artifactId>spring-boot-starter-parent</artifactId>
    <version>2.1.0.RELEASE</version>
</parent>

<dependencies>
    <dependency>
        <groupId>org.springframework.boot</groupId>
        <artifactId>spring-boot-starter</artifactId>
    </dependency>
</dependencies>
```

```Java
@SpringBootApplication
public class MyApp {

	public static void main(String[] args) {
		SpringApplication.run(MyApp.class, args);
	}

}
```
