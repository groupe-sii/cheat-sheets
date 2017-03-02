# Bootstrapping

Bootstraps the app, using the root component from the specified __NgModule__.

```
import { platformBrowserDynamic }
    from '@angular/platform-browser-dynamic';

platformBrowserDynamic()
    .bootstrapModule(AppModule);
```

# NgModule

Defines a module that contains components, directives, pipes, and providers.

```
import { NgModule } from '@angular/core';

@NgModule({
    declarations: ...,
    imports: ...,
    exports: ...,
    providers: ...,
    bootstrap: ...
})
class MyModule {}
```

__declarations__ : List of components, directives, and pipes that belong to this module.

__imports__ : List of modules to import into this module. Everything from the imported modules is available to __declarations__ of this module.

__exports__ : List of components, directives, and pipes visible to modules that import this module.

__declarations__ : List of dependency injection providers visible both to the contents of this module and to importers of this module.

__bootstrap__ : List of components to bootstrap when this module is bootstrapped.
