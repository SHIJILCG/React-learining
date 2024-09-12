// // import { Greet } from "./components/Greet";
// // import Person from "./components/person";
// // import PersonList from "./components/PersonList";
// // import Greet  from "./components/Greet";
// // import Heading from "./components/Heading";
// // import Oscar from "./components/Oscar";
// // import Button from "./components/Button";
// // import Input from "./components/Input";
// // import Container from "./components/Container";
// import { useReducer } from "react";
// import Status from "./components/Status";
// // import LoggedIn from "./components/State/LoggedIn";
// // import User from "./components/State/User";
// // import React,{useState,useReducer, FormEvent} from "react";
// // // import Status from "./components/Status";
// import { ThemeContextProvider } from "./components/context/ThemeContext";
// import { Box } from "./components/context/Box";
// // type stateType ={
//  const initialState ={count:0}    
// // }
// // type actionType ={
// //    type:"add-todo"
// // }
// // function reducer(todos:stateType,acion:actionType){
// //     switch(acion.type){
// //         case 'add-todo':
// //           return [...todos]
// //         default :
// //             return todos             
// //     }
// }
import CompontA from "./CompontA";
function App() {
// //  const personName ={
// //    first:'bruce',
// //    last:'wayne'
// //  }
// //  const naemList =[
// //     {
// //       first:'bruce',
// //       last:'wayne'
// //     },
// //     {
// //       first:'Clark',
// //       last:'Kent'
// //     },
// //     {
// //        first:'Princess',
// //        last:'Diana'
// //     }
// //  ]
// // type stateType={
// //    count:number
// // }
// // type acionType={
// //    type:string
// //    payload:number
// // }
// type stateType={
//     count:number
// }
// type updateAcion={
//    type:'increment' | 'decrement'
//    payload:number
// }
// type resetAction={
//    type:"reset";
// }
// type actionType= updateAcion | resetAction
// function reducer(state:stateType,acion:actionType ){
//      switch(acion.type){
//         case 'increment':
//            return {count: state.count + acion.payload}
//         case 'decrement':
//            return {count: state.count - acion.payload}
//         case 'reset':
//              return initialState   
//         default:
//            return state
//      }
// }
// const [todos,dispatch]=useReducer(reducer,[])
// const [name,setName]=useState('')
// const [count,setcount]=useState(0)
// function increment(){
//    dispatch({type:'increment'})

// }
// function decrement(){
//    dispatch({type:'decrement'})
// }
  // function handlesubmit(e:FormEvent){
  //   e.preventDefault()
  //     dispatch({type:'add-todo'});
  //     setName('')
  // }
  // const [state,dispatch]=useReducer(reducer,initialState)
  return (
    // <>
    //    {/* <Greet name="shijil" messagecount={1} isloggedIn={false}/>
    //    <Person Name={personName} />
    //    <PersonList list={naemList} /> */}
    //    <Status status="Loading"/>
    //    <Heading>Placeholder text</Heading>
    //    <Oscar>
    //      <Heading>Oscar goes to Leonardo Dicapario!</Heading>
    //    </Oscar>
    //    <Greet name="shijil" isloggedIn={false}></Greet>
    // </>
    // <>
    //   <Button handleClick={(event,id)=>{console.log("button clicked",event,id)}} buttonStyle="bg-black text-white p-2 m-4 rounded-md border-1 border-red" />
    //   <Input  value="" handleChange={(event)=>console.log(event.target.value)} inputstyle="border-2 border-black"/>
    // </>
    // <>
    //   <Container styles={{border:'1px solid black',padding:'1rem',display:'nbb'}}/>
    // </>
    // <>
    //    <button onClick={decrement} className="bg-green-600 p-1 m-2 border-2 border-black">-</button>
    //    <span>{state.count}</span>
    //    <button onClick={increment} className="bg-green-600 p-1 m-2 border-2 border-black">+</button>
    // </>
    // <>
    //     <form action="" onSubmit={e=>handlesubmit(e)}>
    //        <input type="text" value={name} onChange={event => setName(event.target.value)} className="border-2 border-black m-20 w-160 p-3"/>
    //     </form>
       
    // </>
    // <>
    //    Count:{state.count}
    //     <button onClick={()=>dispatch({ type : 'increment',payload:10})} className="border-2 border-black m-2 p-2 bg-orange-600 text-white active:bg-violet-300">increment 10</button>
    //     <button onClick={()=> dispatch({ type: 'decrement',payload: 10})} className="border-2 border-black m-2 p-2 bg-orange-600 text-white active:bg-violet-300">decrement 10</button> 
    //     <button onClick={()=> dispatch({ type: 'reset'})} className="border-2 border-black m-2 p-2 bg-orange-600 text-white active:bg-violet-300">reset</button> 
    // </>
    // <div>
    //      <ThemeContextProvider>
    //         <Box />
    //      </ThemeContextProvider>
    //    </div>
    <>
        <CompontA />
    </>
  );
}

export default App
