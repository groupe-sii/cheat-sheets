# Template syntax


| Data direction | Syntax | 
| ----------|-------------|
| **DataSource => Target**   | {{*expression*}} |
| **DataSource => Target**   | [target]="*expression*" |
| **Target => DataSource**   | (target)="*statement*" |
| **Two-way**                | [(target)]="*expression*" |

## [ngIf](https://angular.io/api/common/NgIf)

```html

<span *ngIf="hero; else noHero">{{ hero.name }} exists !</span>
<ng-template #noHero>No hero found :'(</ng-template>
```

## [ngFor](https://angular.io/api/common/NgForOf)

```html

<span *ngFor="let hero of heroes; let i=index">{{ hero.name }} is at index {{ i }}</span>

```

## [ngSwitch](https://angular.io/api/common/NgSwitch)

```html
<div [ngSwitch]="hero.class">
  <span *ngSwitchCase="'knight'">You are strong</span>
  <span *ngSwitchCase="'mage'">You are intelligent</span>
  <span *ngSwitchDefault>You are special</span>
</div>
```

# Basic HTTP Request

HTTP request need to import **ONLY ONE TIME** `HttpClientModule`. 

```ts
import {Http} from "@angular/http";
import "rxjs/add/operator/map";

this.http.post(environment.apiAddress + "/api-method", myJsonData)
      .map(resp=>resp.json());
```

# Sources

**Angular module:** http://www.learn-angular.fr/les-modules-angular/

**Template syntax:** https://angular.io/guide/template-syntax
