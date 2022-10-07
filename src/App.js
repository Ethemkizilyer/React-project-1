import data from "./helper/data"
import Card from "./components/Card"
import Icons from "./components/Icons"


function App() {
  
  return (
    <div className="App">
      <div className="header">
        <h1>Code Fraternity Cafe Menu</h1>
        <i><Icons /></i>
      </div>
      <div className="ourmenu">
        <h2>Our Menu</h2>
        <ul className="liste">
          <li><a href="">All</a></li>
          <li><a href="">Breakfast</a></li>
          <li><a href="">Lunch</a></li>
          <li><a href="">Dinner</a></li>
          <li><a href="">Coffee</a></li>
        </ul>
      </div>
      <div className="kapsa">
        {data.map((item, index) => (
          <Card key={index} item={item} />
        ))}
      </div>
    </div>
  );
}

export default App;
