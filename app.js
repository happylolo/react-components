var App = () => (
  <div>
    <h2>My GroceryList</h2>
    <GroceryList items={['Cucumber', 'Kyle', 'Butter']} />
  </div>
);

var GroceryList = (props) => (
  <ul>
    {props.items.map(item => <GroceryListItem item={item} />
    )}
  </ul>
);

  // A class component can be defined as an ES6 class
  // that extends the base Component class included in the React library
class GroceryListItem extends React.Component {
  // A `constructor` method is expected on all ES6 classes
  // When React instantiates the component,
  // it will pass `props` to the constructor
  constructor(props) {
    super(props);

    // state is only available on class components. We can initialize a class component's state in its constructor. To update the state, invoke this.setState. Whenever this.setState is called, the component re-renders.
    // `state` is just an object literal
    this.state = {
      hovering: false,
    };
  }

  // When a grocery item is clicked, we will toggle the `done` boolean, and our component's `render` method will run again
  onHover(hovering) {
    this.setState({
      hovering: !this.state.hovering
    });
  }

  // Every class component must have a `render` method
  // Stateless functional components are pretty much just this method
  render() {
    // Making the style conditional on our `state` lets us update it based on user interactions.
    var style = {
      fontWeight: this.state.hovering ? 'bold' : 'normal'
    };

    // `props` is no longer passed as an argument,
    // but instead accessed with `this.props`
    return (
      <li style={style}
        onMouseEnter={() => this.onHover(true)}
        onMouseLeave={() => this.onHover(false)}>
        {this.props.item}
      </li>
    );
  };
};

ReactDOM.render(<App />, document.getElementById('app'));