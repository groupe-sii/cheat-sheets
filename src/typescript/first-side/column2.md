# Named types

Enum
```
enum Size {
    S = 'small',
    L = 'large',
    XL = 'xlarge'
};
```

Interface
```
interface IPerson {
    firstname: string;
    age?: number; //optional
    sayHello(): void;
    size?: Size;
}
```

Class
```
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
```
{ foo: 'hello'; bar: 5 } or { foo; 'hello'; }
```

Object with optional property
```
{ required: boolean; optional?: number; }
```

Hash map
```
{ [key: string]: Type; }
```

Indexable types
```
{ [id: number]: Type; }
```
