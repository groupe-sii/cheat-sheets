# Named types

Enum
```ts
enum Size {
    S = 'small',
    L = 'large',
    XL = 'xlarge'
};
```

Interface
```ts
interface IPerson {
    firstname: string;
    age?: number; //optional
    sayHello(): void;
    size?: Size;
}
```

Class
```ts
class Person implement IPerson {
    firstname: string;
    age: number;
    size: Size = Size.L;

    constructor() {}

    sayHello(): void {};
}
```

# Object type literals

Object with implicit properties
```ts
{ foo: 'hello'; bar: 5 } or { foo; 'hello'; }
```

Object with optional property
```ts
{ required: boolean; optional?: number; }
```

Hash map
```ts
{ [key: string]: Type; }
```

Indexable types
```ts
{ [id: number]: Type; }
```
