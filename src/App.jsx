
import './App.css'
import { useState } from 'react';
// function App() {

// function myfunction(){

// }
//   return (
//     <>

//       <h1>this is a heading</h1>
//       <button onClick={myfunction} >click me</button>
//     <p id='do'></p>       

//     </>
//   )
// }

// export default App




// function App() {


//     return (
//       <>

//         <h1>this is a heading</h1>
//         <button onClick={()=>{alert("junaid")}} >click me</button>
//       <p id='do'></p>       

//       </>
//     )
//   }

//   export default App;


// export default function myfunction(){

// let submit=(name)=>alert("junaid"+name);

// let temp=()=>{
//   submit("ali")
// }

// return(
//   <button onClick={temp}>click on me</button>
// )
// }


// export default function myrepo(){
// let submit=(name)=>alert(name+"  king");
// let temp=()=>{submit("junaid")}
//   return(

//     <>

//     <button onClick={temp}>click on me</button>

//     </>
//   )
// }




// function myapp(){
// function myfuck(){
//   p("lo");
// }

// return(

//   <>
//   <button onClick={myfuck}>click on me</button>
//   <p></p>
//   </>
// )

// }

// export default myapp;


// export default function myfn(){
// let submit=(name)=>alert(  name+" khan");
//   return(
//     <>

//     <button onClick={()=>submit("junaid")}>click</button>
//     </>
//   )
// }


// export default function myfn(){
//   let submit=(name)=>()=>alert(  name+" khan");
//     return(
//       <>

//       <button onClick={submit("junaid")}>click</button>
//       </>
//     )
//   }


// export default function myfn(){
//   let [counter,setCounter]=useState(0);
// let increament=()=>{
//   setCounter(counter+1);
// }

// let decrement=()=>{
//   setCounter(counter-1);
// }
//   return(
//   <>

//   <h1>counter={counter}</h1>
//   <button onClick={increament}>increament</button>
//   <button onClick={decrement}>decrement</button>
//       </>
//     )
//   }





// export default function myfn(){
//  let [counter,setCounter]=useState(0);

//  let add=()=>{
//   setCounter(counter+1);
//  }

//  let del=()=>{
//   if(counter>0){
//   setCounter(counter-1);
//   }
// }
//   return(
//   <>
// <h1>{counter}</h1>
// <button onClick={add}>increament</button>
// <button onClick={del}>decrement</button>
//       </>
//     )
//   }



// export default function myfn(){

//  let [counter,setCounter]=useState(0);

//  let plus=()=>{
// setCounter(counter+1)
//  }
// let minus=()=>{
//   if(counter>0){
//   setCounter(counter-1)
//   }
// }
//    return(
//    <>
//  <h1>{counter}</h1>
//  <button onClick={plus}>plus</button>
//  <button onClick={minus}>minus</button>
//        </>
//      )
//    }


export default function myfn() {

  let [counter, setCounter] = useState(0);




  return (
    <>
      <h1>{counter}</h1>

      <button onClick={() => {
        setCounter(counter + 1)
      }}>
        plus
      </button>
      <button onClick={() => {
        if(counter>0)
        setCounter(counter - 1)
      }}>minus</button>
    </>
  )
}