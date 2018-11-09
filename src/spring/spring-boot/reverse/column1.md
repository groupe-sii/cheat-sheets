# Build a production JAR

Maven
```xml
<build>
  <plugins>
    <plugin>
      <groupId>org.springframework.boot</groupId>
      <artifactId>spring-boot-maven-plugin</artifactId>
    </plugin>
  </plugins>
</build>
```

Gradle
```javascript
plugins {
	id 'org.springframework.boot' version '2.1.0.RELEASE'
}
```

## Actuator

Production ready features threw HTTP or JMX
```xml
<dependency>
  <groupId>org.springframework.boot</groupId>
  <artifactId>spring-boot-starter-actuator</artifactId>
</dependency>
```

# Running the code

Standalone
```sh
java -jar target/myapplication-0.0.1-SNAPSHOT.jar
```

Standalone with remote debug
```sh
java -Xdebug \
-Xrunjdwp:server=y,transport=dt_socket\
,address=8000,suspend=n -jar target/myapplication-0.0.1-SNAPSHOT.jar
```

Maven
```sh
mvn spring-boot:run
```

Gradle
```sh
gradle bootRun
```
