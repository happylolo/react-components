var App = () => (
  <div>
    <h2>My GroceryList</h2>
    <GroceryList />
  </div>
);

var GroceryList = () => (
  <GroceryListItem items = {['Cucumbers', 'Kyle', 'Butter']} />
);

// A class component can be defined as an ES6 class
// that extends the base Component class included in the React library
class GroceryListItem extends React.Component {
  // A `constructor` method is expected on all ES6 classes
  // When React instantiates the component,
  // it will pass `props` to the constructor
  constructor(props) {
    super(props);
  }

  // Every class component must have a `render` method
  // Stateless functional components are pretty much just this method
  render() {
    // `props` is no longer passed as an argument,
    // but instead accessed with `this.props`
    return (
      <ul>
        <li>{this.props.items[0]}</li>
        <li>{this.props.items[1]}</li>
        <li>{this.props.items[2]}</li>
      </ul>
    );
  };
};

ReactDOM.render(<App />, document.getElementById('app'));