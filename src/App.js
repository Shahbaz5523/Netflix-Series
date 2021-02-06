import "./index.css";
import Cards from "./netflix/Card";
import seriesData from './netflix/netflixData';

function App() {
  return (
    <div className="App">
      <h2>List of top Netflix series in 2021</h2>
      <div className="cards">
        {
          seriesData.map((value,index)=>{
            return <Cards name={value.name} title={value.title} link={value.link} imgSrc={value.imgSrc}/>
          })
        }
      </div>
    </div>
  );
}

export default App;
