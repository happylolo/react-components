var App = () => (
  <div>
    <h2>My GroceryList</h2>
    <GroceryList />
  </div>
);

var GroceryList = () => (
  <GroceryListItem items = {['Cucumbers', 'Kale', 'Butter']} />
);

var GroceryListItem = (props) => (
  // passing properties from Parent to Child, using props
  <ul>
    <li>{props.items[0]}</li>
    <li>{props.items[1]}</li>
    <li>{props.items[2]}</li>
  </ul>
);

ReactDOM.render(<App />, document.getElementById('app'));