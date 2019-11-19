// TODO
var GroceryList = () => (
  <ul>
    <li>Milk</li>
    <li>Salad</li>
    <li>Watermelon</li>
  </ul>
);

var App = () => (
  <div>
    <h2>My GroceryList</h2>
    <GroceryList />
  </div>
);

ReactDOM.render(<GroceryList />, document.getElementById("app"))