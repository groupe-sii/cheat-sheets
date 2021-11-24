Date : __March 2017__

# Let

Let (in contrast with var) is block scoped.
```js
let snack = 'Meow Mix';

function getFood(food) {
    if (food) {
        let snack = 'Friskies';
    }
    return snack;
}

getFood(true); // 'Meow Mix'
```

# Const

Immutable value.
```js
const MY_CONST = 23;
MY_CONST = 12; // Error
const MY_CONST = 2; // Error
var MY_CONST = 4; // Error
let MY_CONST = 12; // Error
```

# Template string

```js
var a = 26;
var b = 25;
console.log("The best drink ever is " + ( a + b ) + " and not " + ((a * b * 3) - 286) + ".");
// VS
console.log(`The best drink ever is ${ a + b } and not ${(a * b * 3) - 286}.`);
```

# Tagged function

```js
function modifier(strings,...values) {
    // strings = ['The best drink ever is', 'and not', '.'];
    // values = 51, 1664
    return "Modified words";
}
console.log(modifier`The best drink ever is ${ a + b } and not ${(a * b * 3) - 286}.`);
```
