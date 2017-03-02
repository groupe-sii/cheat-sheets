<!--# Routing and navigation

BIG

# Dependency injection configuration

MINI

# Directive and component change detection and lifecycle hooks

MOYEN

# Class field decorators for directives and components

Moyen

# Component configuration

little

-->

# Directive configuration

```
@Directive({ property1: value1, ... })
```

Specifies a CSS selector that identifies this directive within a template. Supported selectors include element, [attribute], .class, and :not().
Does not support parent-child relationship selectors.
```
selector: '.cool-button:not(a)'
```

List of dependency injection providers for this directive and its children.
```
providers: [MyService, { provide: ... }]
```

# Class decorators

```
import { Directive, ... } from '@angular/core';
```

Declares that a class is a component and provides metadata about the component.
```
@Component({...})
class MyComponent() {}
```

Declares that a class is a directive and provides metadata about the directive.
```
@Directive({...})
class MyDirective() {}
```

Declares that a class is a pipe and provides metadata about the pipe.
```
@Pipe({...})
class MyPipe() {}
```

Declares that a class has dependencies that should be injected into the constructor when the dependency injector is creating an instance of this class.
```
@Injectable()
class MyService() {}
```
