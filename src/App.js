
import './App.css';
import Tour from './Tour.js'
import data from './data';
import React from 'react'
function App() {
  
  const [showDiv, setShowDiv] = React.useState(true);
  const [showText, setShowText] = React.useState(false);
  const [info, setInfo] = React.useState(data);
  const [counter, setCoutner] = React.useState(0);

  function toggle(id){
    const arr = [...info];
    const anotherArr = arr.map((dt)=>{
      return dt.id === id?{...dt,on:!dt.on}:dt
    })
    setInfo(prev => anotherArr);
    setCoutner(prevoiusc => prevoiusc+1)
  }

  function toggleTxt(){
    setShowText(!showText);

  }

  const refreshPage = ()=>{
    window.location.reload();
 }

  const thing = info.map(Tours=>(
    <Tour
        txt={Tours.Text}
        name={Tours.name}
        img={Tours.img}
        price={Tours.price}
        on={Tours.on}
        /////////------------///////////
        toggle={()=>toggle(Tours.id)}
        showTxt={showText}
        showD={showDiv}
        toggleTxt={()=>toggleTxt()}
      />
  )) 
     
  

  return (
    <div className="App">
      {counter === info.length-1 ? 
      <button className='refresh' onClick={refreshPage}>No tours left,Click to refresh</button>:thing}
    </div>
  );
}

export default App;
