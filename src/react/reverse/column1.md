# Conditional Rendering
Use ternary operator
```js
render() {
  const isLoggedIn = this.state.isLoggedIn;
  return (
    <div>
      {isLoggedIn
        ? <LogoutButton />
        : <LoginButton />
      }
    </div>
  );
}
```
JSX understand null and doesnt display anything il necessary
```js
render() {
  const isLoggedIn = this.state.isLoggedIn;
  return (
    <div>
      {isLoggedIn
        ? <UserDetails />
        : null
      }
    </div>
  );
}
```
# Context
Create the context once
```js
const defaultValue = { ... }
export const { Provider, Consumer } = React.createContext(defaultValue);
```
## Provider
Wrap your application with the provider
```js
render() {
  return (
    <Provider value={/* some value */}>
      <App />
    </Provider>
  )
}
```