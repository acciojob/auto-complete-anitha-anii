
import React,{useState,useEffect} from "react";
import './../styles/App.css';

const App = () => {
    const[search,setSearch] =useState('');
    const[list,setList] =useState([]);

  useEffect(()=>{
    let fruits = ["apple", "banana", "cherry", "date", "elderberry", "fig"]

    let filteredFruits = fruits.filter(fruit => fruit.includes(search.toLowerCase()));
    setList(filteredFruits);
  },[search])

  return (
    <div>
        {/* Do not remove the main div */}
        <input type="text" value={search} onChange={(e)=>setSearch(e.target.value)}/>
        <ul>
          {list.map((item,index)=>(
          <li key={index}>{item}</li>
          ))}
        </ul>
    </div>
  )
}

export default App
