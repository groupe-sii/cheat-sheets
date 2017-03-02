# Built-in directives

```
import { CommonModule } from '@angular/common';
```

Removes or recreates a portion of the DOM tree based on the showSection expression.
```
<section *ngIf="showSection">
```

Turns the li element and its contents into a template, and uses that to instantiate a view for each item in list.
```
<li *ngFor="let item of list">
```

Conditionally swaps the contents of the div by selecting one of the embedded templates based on the current value of __conditionExpression__.
```
<div [ngSwitch]="conditionExpression">
  <template [ngSwitchCase]="case1Exp">...</template>
  <template ngSwitchCase="case2Str">...</template>
  <template ngSwitchDefault>...</template>
</div>
```

Binds the presence of CSS classes on the element to the truthiness of the associated map values. The right-hand expression should return {class-name: true/false} map.
```
<div [ngClass]="{active: isActive,
                disabled: isDisabled}">
```

# Forms

Provides two-way data-binding, parsing, and validation for form controls.

```
import { FormsModule } from '@angular/forms';

<input [(ngModel)]="userName">
```
