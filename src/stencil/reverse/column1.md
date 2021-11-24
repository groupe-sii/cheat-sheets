# Decorators

## @Watch()

Watch a property, useful for validating props or handling side effects.

```
@Prop() activated: boolean;

@Watch('activated')
watchHandler(newValue: boolean, oldValue: boolean) {
  console.log('New value is: ', newValue);
}
```

## @Method()

Used to expose methods on the public API. It should be async or returning a promise.

```
@Method()
showPrompt() {
  /* show a prompt */
}

todoListElement.showPrompt();
```

## @Element()

Get access to the host element within the class instance. This returns an instance of an HTMLElement, so standard DOM methods/events can be used here.

```
@Element() todoListEl: HTMLElement;

addClass(){
  this.todoListEl.classList.add('active');
}
```

## @Event()

Dispatch Custom DOM events for the outside world.

```
@Event() todoCompleted: EventEmitter;

todoCompletedHandler(todo: Todo) {
  this.todoCompleted.emit(todo);
}

todoListElement.addEventListener('todoCompleted', () => {});
```