# Class Type

## [Component](https://angular.io/guide/component-styles)
```js
@Component({
    selector: 'app-my',
    templateUrl: './my.component.html',
    styleUrls: ['./my.component.css']
})
class MyComponent() {}
```

## [Directive](https://angular.io/guide/dynamic-component-loader)
```js
@Directive({
    selector: 'app-my',
    templateUrl: './my.directive.html',
    styleUrls: ['./my.directive.css']
})
class MyDirective() {}
```

## [Pipe](https://angular.io/guide/pipes)

```js
@Pipe({name: 'myPipe'})
class MyPipe() {}
```

## [Provider](https://angular.io/guide/singleton-services)
```js
@Injectable()
class MyService() {}
```

Add *{providedIn: root}* option **for create singleton**
# Sources

**Angular module:** http://www.learn-angular.fr/les-modules-angular/

**Template syntax:** https://angular.io/guide/template-syntax