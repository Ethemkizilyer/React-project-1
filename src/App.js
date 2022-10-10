import Gdata from "./helper/data"
import Card from "./components/Card"
import Icons from "./components/Icons"
import {useEffect,useState} from "react"

const ethem = () => {
  const acik = document.querySelector('.acık')
  const kapalı = document.querySelector('.kapalı')
  const body = document.querySelector('body')
  acik.classList.toggle("active")
  kapalı.classList.toggle("active1")
  if(kapalı.classList.contains("active1")){
    body.style.background = "black";
    body.style.color="white"
  }else{
body.style.background="white"
body.style.color = "black";
  }
 
  

};

function App() {
const [data,setData] = useState([]);
const [collection,setCollection] = useState([]);

useEffect(() => {
setData(Gdata);
setCollection([...new Set(Gdata.map((item) => item.category))]);

},[])
console.log(collection);
console.log(data);
const categ_filter = (itemData) => {
 const filterData = Gdata.filter((item) => item.category == itemData );
 setData(filterData)
}

  return (
    <div className="App">
      <div className="header">
        <h1>Bakar Cafe Menu</h1>
        <i onClick={ethem}>
          <Icons />
        </i>
      </div>
      <div className="ourmenu">
        <h2>Our Menu</h2>
        <ul className="liste">
          <li>
            <a onClick={() => setData(Gdata)}>
              All
            </a>
          </li>
          {collection.map((item) => (
            <li>
              <a
               
                onClick={() => {
                  categ_filter(item);
                }}
              >
                {item}
              </a>
            </li>
          ))}
        </ul>
      </div>
      <div className="kapsa">
        {data.map((item, index) => (
          <div key={index}>{Card(item)} </div>
        ))}
      </div>
    </div>
  );
}

export default App;
