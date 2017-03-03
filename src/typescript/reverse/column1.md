# Tuples

A tuple is a finite ordered list of elements. A tuple in TypeScript is much like a typed list except that it is immutable (unchangeable) once created.

```
type keyValuePair = [number, string];
let list: keyValuePair = [123, 'abc']
```

# Union types

```
let myUnionVariable: number | string;
```

# Classes

```
class CodeLock {
    id: number; // implicitly public
    public manufacturer: string;
    static brand = 'SecurityInc';
    constructor(id: number,
                manufacturer: string,
                private code?: string = "anon") {
        // [...]
    }
}
console.log(CodeLock.brand); // no instance
new CodeLock(1, "x", "secret").id; // ok
new CodeLock(1, "x", "secret").manufacturer; // ok
new CodeLock(1, "x", "secret").code; // warning
```

# Generics

Function using type parameters
```
<T>(items:T[], callback:(item:T) => T):T[]
```

Interface with multiple types
```
interface Pair<T1, T2> {
  first:T1;
  second:T2;
}
```
Constrained type parameter
```
<T extends ConstrainedType>():T
```
