## @Listen()

Listen to events dispatched from @Events.

```
@Listen('todoCompleted')
@Listen('window:scroll')
@Listen('keydown')
handler(event: CustomEvent) {
  
}

@Event() todoCompleted: EventEmitter;

<todo-list onTodoCompleted={ev => this.someMethod(ev)} />
```

# Styling

- style your component with Shadow DOM in mind

- use CSS variables for giving the opportunity for the outside world to customize your component design

# CLI

## Build

```
stencil build
```