import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import dani from './daniyal.PNG'
import noor  from './noor.PNG'
import faseeh from './faseeh.PNG'
import ronaldo from './ronaldo.jpeg'
import flowers from './flowers.jpeg'
import robot from './robot.jpeg'
let today = new Date().toLocaleDateString();

// const Funtionalities =()=>{
//   const [isLight,setLight]=React.useState(true)
//    const [temp,setTemp]=React.useState(70)
//    const body = document.querySelector('body')
//    const Mode=()=>{
//      setLight(!isLight);
//    }
//    const Increment=()=>{
//    setTemp(temp+1)
//    }
//    const Decreament=()=>{
//     setTemp(temp-1)
//     }
//   body.id=isLight ? "Light" : "Dark";
//   <div>
//     <button onClick={Mode} id={isLight ? "darkbtn" : "btn"}>{isLight ? "Dark Mode" : "Light Mode"}</button>
//   <h5> Temperature (as your location ): {temp} Degree Celcius</h5>
//   <button onClick={Increment} id={isLight ? "darkplus" : "plus"}>+</button>
//   <button onClick={Decreament} id={isLight ? "darkminus" : "minus"}>-</button>
//   </div>
//   return <div id="mainbody">
//      <center> 
//       <div>
//     <button onClick={Mode} id={isLight ? "darkbtn" : "btn"}>{isLight ? "Dark Mode" : "Light Mode"}</button>
//   <h5> Temperature (as your location ): {temp} Degree Celcius</h5>
//   <button onClick={Increment} id={isLight ? "darkplus" : "plus"}>+</button>
//   <button onClick={Decreament} id={isLight ? "darkminus" : "minus"}>-</button>
//   </div>
//   </center>
//   </div>
//  }

const Funtionalities =()=>{
  const [temp,setTemp]=React.useState(70)
  const [light , themeChange] = React.useState(true);
  const lightedness = light ? "Dark" : "Light";
  const Mode = ()=>{
    themeChange(!light)
    if(light){
      document.body.classList.remove('light-col')
      document.body.classList.add('dark-col')
    }
    if(!light){
      document.body.classList.remove('dark-col')
      document.body.classList.add('light-col')
    }
  }
   const Increment=()=>{
   setTemp(temp+1)
   }
   const Decreament=()=>{
    setTemp(temp-1)
    }
  return <div id="mainbody">
     <center> 
      <div>
    <button onClick={Mode} id={light ? "darkbtn" : "btn"} >{`${lightedness} Theme`}</button>
  <h3 id="tempo"> Temperature (as your location ): {temp} Degree Celcius</h3>
  <button onClick={Increment} id={light ? "darkplus" : "plus"} >+</button>
  <button onClick={Decreament} id={light ? "darkminus" : "minus"}>-</button>
  </div>
  </center>
  </div>
 }





function Hi(props) {
  return <div id="mainbody">
     <center> 
<div id="maindiv">
<img src={props.imgURL} id="dp" />
<div id="info">
<h3 id="uname">{props.uname}</h3>
<p id="date">{props.date}</p>
<p id="dot">.</p>
<p id="loc">{props.loc}</p>
</div>
<h3 id="caption">{props.caption}</h3>
<img src={props.post} id="pic" />
<input type="text" id="cmnt" placeholder="Write a comment..."></input>
</div>
</center>
  </div>;
}

ReactDOM.render(<div>
  <Funtionalities/>
  <Hi imgURL={dani} uname="Daniyal Nasir" date={today}  loc="Lahore" caption="👑Greatest Athlete of All Times..CRISTIANO RONALDO. 🐐🇵🇹" post={ronaldo}/>
  <Hi imgURL={noor} uname="Noor Chaudhry" date={today} loc="Karachi" caption=".... . . .flosthetic ♡" post={flowers}/>
  <Hi imgURL={faseeh} uname="Faseeh Sheikh" date={today} loc="Nawabshah"  caption="If you haven't watched it you are definitely missing out on one of the goated series." post={robot}/>
  </div>, document.querySelector('#root'));