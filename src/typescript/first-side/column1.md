TypeScript is a super-set of JavaScript that enforce the code quality. This cheat sheet summarizes all the syntax and features of the language.

# Usage
```npm
npm install typescript

tsc hello-world.ts
```

# Primitives types

Any type (explicitly untyped)
```ts
let whatever: any = "anything";
```

Void type (null or undefined, use for function returns only)
```ts
function nothing(): void {}
```

String
```ts
let myString: string = "hello";
```

Number
```ts
let myNumber: number = 1;
```

Boolean
```ts
let mybool: boolean = true;
```

# Arrays

Array of strings
```
string[] or Array<string>
```
Array of functions that return boolean
```
{(): boolean;}[] or Array<()=>boolean>
```
