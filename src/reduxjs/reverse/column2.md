# API - compose()
**Why**: to combine several store enhancers<br/>
**Arguments**: the functions to combine <br/>
**Return**: one single enhancer function
```js
const store = createStore(
  reducer,
  compose(applyMiddleware(thunk), DevTools.instrument()) //example with redux-thunk as middleware and developer tools from redux-devtools
)
```

# Store API - getState()
**Why**: to have access to the current data<br/>
**Arguments**: none <br/>
**Return**: your state data
```js
const myState = store.getState();
```

# Store API - dispatch()
**Why**: to inform your reducer that you need to mutate the state<br/>
**Arguments**: action object <br/>
**Return**: object with the dispatched action

<div class='alert-message'>
    <span class='icon'>!</span>Every action must have a type property.
</div>

```js
store.dispatch({type: 'UPPERCASE', payload: ''})
```

# Store API - subscribe()
**Why**: to know when there is a new data<br/>
**Arguments**: a listener function <br/>
**Return**: a function that **unsubscribes** the listener
```js
function handler(){
    /*here we get the new data with store.getState()*/
}
const unsubscribe = store.subscribe(handler);
unsubscribe()
```