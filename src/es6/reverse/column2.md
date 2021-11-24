# Class

```js
class Bridge {
    constructor(width, height) {
        this.width = width;
        this.height = height;
    }
    get width() { return this.width; }
    set width(value) { 
        this.width = value; 
        console.log('width changed'); 
    }
}

class Viaduc extends Bridge {
    constructor(width, height, weight) {
        super(width, height);
        this.weight = weight;
    }
    
    static staticCalcArea (width, height) { 
        return width * height 
    }
    calcArea () { return this.width * this.height }
}

var monViaduc = new Viaduc(1, 2, 3);
monViaduc.width = 2; // width changed
```

# Set

```js
var mySet = new Set();
mySet.add(1);
mySet.add(1); //ignored => duplicate value isn't allowed 
mySet.add("du texte");
mySet.has(1); //true
mySet.size; //2
mySet.delete(1);
```

# Map

```js
var myMap = new Map();
myMap.set(1, 1);
myMap.set("du texte", 2);
myMap.set(o, "test");
myMap.has("du texte"); //true
myMap.delete("du texte");
```
