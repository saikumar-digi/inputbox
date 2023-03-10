import { useState } from 'react';
import "./App.css";

function App() {
const [box,setBox]=useState([''])

const handleChange = (value , index) =>{
  const newBox = box.map((boxItem,boxIndex) => {
    return  boxIndex === index ? value : boxItem
  })
  setBox(newBox)
}


  return (
   
    <div className='box' >
    Add   hobby:
  {
    box.map((item,index) => {
      return<div>
      <input  value={item}  
        onChange={(e) => handleChange(e.target.value,index)}
      />  

      {box.length > 0 &&<button 
    onClick={() => {
      setBox([ ...box,''])
    }}
    >+</button>}
      
      {box.length > 1 && <button 
      onClick={() => {
      const ans= box.filter((i,j) => {
        console.log(box.length+"LENGTH")
          return index !== j 
        })
        setBox(ans)
      }}>-</button>}
      
      </div>
     
    } )
  }
  <div>
   Hobbies :
  {
    box.map((s) => {
      const list =(
        <ul>
          <li> {s} </li>
        </ul>
      )
      return list;
    })
  }
   
  </div>
    </div>
  );
}

export default App;
