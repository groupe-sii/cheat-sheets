# Beans scopes

| Scope | Description | 
| ----------|-------------|
| **singleton**   | (default)  A single bean instance |
| **prototype**   | A bean instance per usage |
| **request**     | A bean instance per **HTTP request** |
| **session**     | A bean instance per **HTTP session** |
| **application** | A bean instance per Servlet Context |
| **websocket**   | A bean instance per WebSocket |

# Customizing a bean

## Initialization method
```Java
@PostConstruct
```

## Destroy method
```Java
@PreDestroy
```

# SpEL

## Access a system properties
```Java
@Value("#{ systemProperties['user.home'] }")
private String defaultHome;
```

## Access a bean property 

```Java
@Value("#{myBean.myValue}")
private String myValue;
```

## Parse a string 

```Java
@Value("#{myBean.myValue.substring(0,1)}")
private String myValue;
```

## Operations

```Java
@Value("#{myBean.myValue.length() > 2}")
private String myValue;
```
