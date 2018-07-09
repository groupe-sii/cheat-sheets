# Observable

| Function | Effect | 
| ----------|-------------|
| **take**(fn(Int))   | Event only if int value result |
| **map**(fn(value))   | Affect value on each event |
| **filter**(fn(value))   | Ignore event when return false |
| **reduce**(fn(oldValue), value)   | Compact event |

## Simple observable with external observer

```js
const myObservable = Observable.of(1, 2, 3);
 
// Create observer object
const myObserver = {
  next: x => console.log('Observer got a next value: ' + x),
  error: err => console.error('Observer got an error: ' + err),
  complete: () => console.log('Observer got a complete notification'),
};
 
// Execute with the observer object
myObservable.subscribe(myObserver);
```

## Personalised observable function

```js
const sequence = new Observable((observer) => {
  // synchronously deliver 1, 2, and 3, then complete
  observer.next(1);
  observer.next(2);
  observer.complete();
 
  // unsubscribe function doesn't need to do anything in this
  // because values are delivered synchronously
  return {unsubscribe() {}};
});

sequence.subscribe({next: ...});
```

# Sources

**Complete docs RxJS** https://www.learnrxjs.io/

**Angular RXJS** https://angular.io/guide/observables
<!-- 
**For ES5 component syntax** https://blog.thoughtram.io/angular/2015/05/09/writing-angular-2-code-in-es5.html -->
