# Arrow function

```js
((variable) => {
    console.log(variable);
})('test');
```

```js
((doubleMe) => doubleMe * 2)(2) // auto return 4;
((doubleMe) => {return doubleMe * 2})(2) // return 4; 
```
Arrow functions don't have its own **this**.

# For of

```js
let arr = [1, 2, 3];
for (const i of arr) {
    console.log(i);
}
// "1", "2", and "3"
```

# For in

```js
let arr = [3, 5, 7];
for (let i in arr) {
  console.log(i);     // show indexes : "0", "1", "2"
}
arr.toto = "coucou";
Object.prototype.objCustom = function () {};
for (let i in arr) {
  console.log(i);     // show : "0", "1", "2", "toto", "objCustom"
}
```

```js
var obj = {a:1, b:2, c:3};
 
for (var prop in obj) {
  console.log("obj." + prop + " = " + obj[prop]);
}
// "obj.a = 1"
// "obj.b = 2"
// "obj.c = 3"
```

# Promise
```js
function makeIt() {
    return new Promise((resolve, reject) => { makeAsyncTask(); resolve(); });
}
```