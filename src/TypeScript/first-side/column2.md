# Named types

Enum
```
enum Size {
    S,
    L,
    XL
};
```

Interface
```
interface IPerson {
    firstname: string;
    age?: number; //optional
    sayHello(): void;
    size?: Size = Size.L;
}
```

Class
```
class Person extends IPerson {
    firstname: string;
    age?: number;

    constructor() {}

    sayHello(): void {};
}
```

# Object type literals
