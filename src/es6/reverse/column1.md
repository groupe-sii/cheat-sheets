# Destructuring

```js
[a, b] = [1, 2];
a === 1;
b === 2;
 
[a, b, ...c] = [1, 2, 3, 4, 5];
a === 1;
b === 2;
c === [3, 4, 5];
 
{a, b} = {a:1, b:2};
a === 1;
b === 2;
```

Default values :

```js
var a, b;
[a = 7, b = 1] = [5];
 
a === 5;
b === 1;
```

Destructuring on the fly

```js
for (let {name: n, family: { mother: f } } of persons) {
    console.log("Name : " + n + ", Mother : " + f);
}
 
function showPersonne({name: n, family: { mother: f } }) {
    console.log("Name : " + n + ", Mother : " + f);
}
```

# Rest & Spread operator

```js
var arr = [1, 2, 3];
var arr1 = [4, 5];
var arr2 = [...arr, 4];
arr.push(...arr1);

function f(a, b, ...args) {}

function f(...[a, b, c]) {}
```

# Default parameters

```js
function multiplier(a, b = a + 1) {
    return a*b;
}
```