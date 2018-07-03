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
