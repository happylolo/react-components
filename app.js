// TODO
var App = () => (
  <div>
    <h2>My GroceryList</h2>
    <GroceryList />
  </div>
);

var GroceryList = () => (
  <ul>
    <Cucumbers />
    <Kale />

  </ul>
);

var Cucumbers = () => (
  <li>Cucumbers</li>
);

var Kale = () => (
  <li>Kale</li>
);

ReactDOM.render(<GroceryList />, document.getElementById("app"))