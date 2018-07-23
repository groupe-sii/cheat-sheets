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
    selector: ['appMy'],
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

# Component interaction

## [Input](https://angular.io/guide/component-interaction#component-interaction) and [Output](https://angular.io/guide/component-interaction#parent-listens-for-child-event)

```js
export class InventoryComponent {
  @Input() hero: Hero;
  @Input('newItem') itemToInsert: Item;

  @Output() itemSelectionned = 
    new EventEmitter<Item>();

    onClickHero(item: Item) {
        this.itemSelectionned.emit(item);
    }
}
```
