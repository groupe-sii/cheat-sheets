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

# Integration

```
<script src="https://unpkg.com/test-components/latest/dist/test-components.js"></script>
<test-component></test-component>
```

# CLI

## Serve

```bash
stencil build --dev --watch --serve
```

## Build

```bash
stencil build
```

## Build pre-rendered

```bash
stencil build --prerender
```

## Test (Jest + Puppeteer inside)

```bash
stencil test --spec or --e2e
```