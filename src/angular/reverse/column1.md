# Template syntax


| Data direction | Syntax | 
| ----------|-------------|
| **DataSource => Target**   | {{*expression*}} |
| **DataSource => Target**   | [target]="*expression*" |
| **DataSource => Target**   | bind-target="*expression*" |
| **Target => DataSource**   | (target)="*statement*" |
| **Target => DataSource**   | on-target="*statement*" |
| **Two-way**                | [(target)]="*expression*" |
| **Two-way**                | bindon-target="*expression*" |



## [ngIf](https://angular.io/api/common/NgIf)

```html

<span *ngIf="hero">{{ hero.name }} exists !</span>

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

# Sources

**For ES5 component syntax** https://blog.thoughtram.io/angular/2015/05/09/writing-angular-2-code-in-es5.html

**Complete docs RxJS** https://www.learnrxjs.io/

<!-- 
**Angular RXJS** https://angular.io/guide/observables -->
