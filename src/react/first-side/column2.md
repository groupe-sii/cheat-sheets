# Props

Input data that is passed into the component can be accessed via this.props in a React Component or in the parameters in a simple function.

```js
class HelloMessage extends React.Component {
  render() {
    return (
      <div>
        Hello {this.props.msg}
      </div>
    )
  }
}

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<HelloMessage msg={'SII'}/>);

```

```js
const HelloMessage = (props) => (
  <div>Hello {props.msg}</div>
)
```
# State
Every component can have an internal state.

## Initialize
You have to initialize your state in the constructor.
When we override the constructor, you have to pass the props to the parents.
```js
constructor(props) {
    super(props);
    this.state = {firstName: 'John', lastName: 'Doe', age: 20};
  }
```
## Modify
To modify the state you have to use the this.setState function. Only the specific change will affect.
```js
this.setState({firstName: 'Johnny'})
```
If you have to use precedent state, you should give to setState a function.
```js
this.setState((state) => ({ age: state.age + 1 })
```
