__Updated__ 23 April 2020

# Installation
`npm install redux`

If you work into a React App, react-redux provides an easy integration. <a target='_blank' href='https://react-redux.js.org'>Take a look.</a>
`npm install react-redux`

# Creating a new store
<div class='alert-message'>
    <span class='icon'>!</span>The store is always a global var
</div>

```js
import { createStore } from 'redux'; 
const store = createStore();
```

# Creating reducers and state
The reducer will validate the action's type and then will return the new state
<div class='alert-message'>
    <span class='icon'>!</span>You should have an initial state when we define the reducer
</div>

```js
function yourReducer(state = 'Sii-Canada' , action){
    switch(action.type){
        case 'UPPERCASE':
            return state.toUpperCase(); //SII-CANADA
        case 'LOWERCASE':
            return state.toLowerCase(); //sii-canada
        default:
            return state
    }
}
const store = createStore(yourReducer);
```

# Creating actions and getting updated data

An action is a generic object that by convention has the following props: <br/>
__type:__ the function type, commonly is a string. <br/>
__payload:__ data that we can use to update the state, here you can pass anything.

```js
store.dispatch({type: 'UPPERCASE', payload:...}) //our action
store.subscribe(() => console.log(store.getState())) //our new data -> SII-CANADA
```
