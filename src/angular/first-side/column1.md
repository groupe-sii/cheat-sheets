# Bootstrapping

Bootstraps the app, using the root component from the specified __NgModule__.

```js
import { platformBrowserDynamic }
    from '@angular/platform-browser-dynamic';

platformBrowserDynamic()
    .bootstrapModule(AppModule);
```

# NgModule

**Defines a module** that contains components, directives, pipes, and providers.

```js
import { NgModule } from '@angular/core';

@NgModule({
    declarations: [
        myRootComponent, 
        myComponent, 
        myDirective, 
        myPipe],
    imports: [myModule, npmModule],
    exports: [myComponent],
    providers: [myService],
    bootstrap: [myRootComponent] // Only root module
})
class MyModule {}
```
| Parameter | Function |
|--------------------|-------------------------------------------------------------------------------|
| **declarations** |  Components to this module |
| **imports** |  Modules to import into this module |
| **exports** |  Components visible to another module |
| **providers** |  Dependency injection providers |
| **bootstrap** | The root component of module |

The **pipes** and **directive** is declared as **components**