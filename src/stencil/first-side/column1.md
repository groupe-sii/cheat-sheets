# Component Lifecycle

<img src="../assets/images/stencil-lifecycle.png" width="400" height="473">

# Decorators
## @Component

```ts
import { Component } from '@stencil/core';

@Component({
  tag: 'todo-list',
  styleUrl: 'todo-list.css'
  /* styleUrls: [...] */,
  /* styles: '' */,
  shadow: true | false
})
export class TodoList {
  ...
}
```