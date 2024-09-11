// import Buttons from "./components/Buttons";
// import Alert from "./components/Alert";
// import {useState} from "react";
// export const ThemeContext = React.createContext();
// import FunctionContextComponent from "./components/FunctionContextComponent";
// import ClassContextComponent from "./components/ClassContextComponent";
// import MyButton from "./components/SmallButton";
// import { useState } from "react";
// import Buttons from "./components/Buttons";
import React,{useState,useReducer} from "react";
// import Xbutton from "./components/Xbutton";
function App() {
  //   const [alertvisible,setalertvisiblity] = useState(false)
  // const [count,setCount]=useState(4);
  // const [Theme,setTheme]=useState('blue');

  // function decrement(){
  //   setCount(PrevCount =>PrevCount - 1);
  //   setTheme(PrevTheme=>PrevTheme = "balck")
  // }
  // function increment(){
  //   setCount(PrevCount=> PrevCount + 1)
  //   setTheme(PrevTheme=>PrevTheme = "blue")
  // }
  // const [ResourceType,setResourceType]=useState('posts')
  // console.log("render")
  // const [windowWidth,setwindowWidth]=useState(window.innerWidth);
  // const [ResourceType,setResourceType]=useState('posts');
  // useEffect(()=>{
  //  fetch(`https://jsonplaceholder.typicode.com/${ResourceType}`)
  //  .then(response => response.json())
  //  .then(jsondata => setitems(jsondata))
  //   console.log("resource changed")
  //   return()=>{
  //      console.log(" return from resource change")
  //   }
  // },[ResourceType])
  // const [windowWidth,setwindowWidth]=useState(window.innerWidth);
  // const handleresize =()=>{
  //    setwindowWidth(window.innerWidth)
  // }
  // useEffect(()=>{
  //    window.addEventListener('resize',handleresize)
  //    return()=>{
  //       window.removeEventListener('resize',handleresize)
  //    }
  // },[])
  // const [number,setNumber]=useState(0);
  // const[dark,setDark]=useState(false);
  // const doubleNumber=useMemo(()=>{return slowFunction(number)},[number]);
  // const themeStyle=useMemo(()=>{
  //      return{
  //        backgroundColor:dark ? 'black' : 'white',
  //     color:dark ? 'white' : 'black'
  //      }
  // },[dark])
  // useEffect(()=>{
  //    console.log("Theme Changed")
  // },[themeStyle])
  // const [name, setName] = useState("");
  // const prevname:any = useRef();
  // useEffect(()=>{
  //    prevname.current = name
  // },[name])
  // function focus() {
  //   if(inputRef.current !== undefined){
  //     inputRef.current.focus();
  //     // inputRef.current.value="some value"
  //   }
  // }
  // const renterCount=useRef(1);

  // useEffect(()=>{
  //     renterCount.current=renterCount.current+1
  // })\
  // const [darkTheme,setDarkTheme]=useState(true)
  // function toggleTheme(){
  //    setDarkTheme(prevDarkTheme => !prevDarkTheme)
  // }
  // const userdetils={
  //   name:"Hedy Lamaarr",
  //   imageUrl:'https://i.imgur.com/yXOvdOSs.jpg',
  //   imagesize:90
  // }
  // const [userName,setUserName]=useState('shijil')
  // let content;
  // if(isloggedIn){
  //    content =<
  // }
  // const products=[
  //   {tittle:'Cabbage',id:1,isFruit:false},
  //   {tittle:'Garlic',id:2,isFruit:false},
  //   {tittle:'Apple',id:3,isFruit:true}
  // ]
  // const ListItems=products.map(product=>
  //    <li key={product.id} style={{color:product.isFruit ? 'blue' : 'red'}}>
  //          {product.tittle}
  //    </li>
  //   )
  // const [counter,setCounter]=useState(0);
  // function loadClickFunction(){
  //   console.log("you clicked the button");
  //   setCounter(counter + 1);
  // }
//   const [squares, setSquares] = useState(Array(9).fill(null));
//  type details={
//     value:number;
//     onSquareClick:()=>void
//  }
//   function handleClick(i:number):void {
//     const nextSquares = squares.slice();
//     nextSquares[i] = "X";
//     setSquares(nextSquares);
//   }
//    function Alertfunction(){
//        console.log("you clicked the second button")
//    }
//    function Alertfunctiontwo(){
//     console.log("you clicked the first button")
// }
      //  type values = "strong"|"weak"|"medium";
      //  const [Status,SetStatus]=useState<values>("medium")
  //  const [state,dispatch]=useReducer(stateReducer,initialState)
  //  const addFive=()=> dispatch({type:"setCount",value:state.count + 5})
  //  const reset =()=> dispatch({type:"reset"})
  function reducer(state:()=>void,action:object){
      return count 
  }
  const [state,dispatch]=useReducer(reducer,{count:0})
  const [count,setCount]=useState(0)
  function increment(){
     setCount(prevCount=> prevCount + 1)
  }
  function decrement(){
    setCount(prevCount=> prevCount - 1)
 }
  return (
    //  <div>
    //    {alertvisible && <Alert onClose={()=>setalertvisiblity(false)}>My alert</Alert>}
    //    <Buttons color="secondary" onClick={()=>setalertvisiblity(true)}>my button</Buttons>
    //  </div>
    //  <>
    //   <button className="bg-red-500 size-10 border-1 border-black text-lg m-10" onClick={decrement}>-</button>
    //    <span>{count}</span>
    //    <span>{Theme}</span>
    //    <button className="bg-red-500 size-10 border-1 border-black text-lg m-10" onClick={increment}>+</button>
    //  </>
    // <>
    //   <div>
    //      <button onClick={()=> setResourceType('posts')} className="inline-flex px-3 py-2 bg-blue-400 m-1 border-2 border-blue-950  rounded-md">Post</button>
    //      <button onClick={()=> setResourceType('users')} className="inline-flex px-3 py-2 bg-blue-400 m-1 border-2 border-blue-950  rounded-md">Users</button>
    //      <button onClick={()=> setResourceType('comments')} className="inline-flex px-3 py-2 bg-blue-400 m-1 border-2 border-blue-950  rounded-md ">Comments</button>
    //   </div>
    //   <h1>{ResourceType}</h1>

    // </>
    // <div>
    //   {windowWidth}
    // </div>
    // <>
    // <input type="number" value={number} onChange={e => setNumber(parseInt(e.target.value))} className="border-1 border-black m-1"/>
    //  <button onClick={()=>setDark(prevDark => !prevDark)} className="border-1 border-black font-light text bg-red-900 text-white m-1 block">Chnge Theme</button >
    //  <div style={themeStyle} className="m-1">{doubleNumber}</div>
    // </>
    //   <>

    //     <input
    //       // ref={inputRef}
    //       value={name}
    //       onChange={(e) => setName(e.target.value)}
    //       className="block border-2 border-black p-2 w-full m-4"
    //     />
    //     <div className="m-4 text-3xl">my name is {name} and it used to be {prevname.current}</div>
    //     <button
    //       onClick={focus}
    //       className="mx-10 bg-green-700 p-2 rounded-md shadow-lg border-2 border-black text-white"
    //     >
    //       Focus
    //     </button>
    //   </>
    // );

    // <>
    //  <ThemeContext.Provider value={darkTheme}>
    //   <button className="px-2 py-1 flex m-20 text-lg border-1" onClick={toggleTheme}>Toggle Theme</button>
    //     <FunctionContextComponent />
    //     <ClassContextComponent />
    //  </ThemeContext.Provider>

    // </>
    // <>
    //   <h1 className="m-20 font-bold f-">{userdetils.name}</h1>
    //   <img src={userdetils.imageUrl} alt={'photo of ' + userdetils.name} style={{width:userdetils.imagesize,height:userdetils.imagesize}} className="rounded-full m-20" />

    //   {/* <p>Hello there. <br /> How do you do?Mr.{userdetils.name}</p> */}
    // </>
    // <>
    //   {content}
    // </>
    // <ul>{ListItems}</ul>
    // <div>
    //  <h1 className="text-center mt-20 font-bold uppercase">Counter that update seperately</h1>
    //  <MyButton counter={counter} onClick={loadClickFunction}/>
    //  <MyButton counter={counter} onClick={loadClickFunction} />
    // </div>
    // <>
    // <div className="board-row">
    //     <Square value={squares[0]} onSquareClick={() => handleClick(0)} />
    //     <Square value={squares[1]} onSquareClick={() => handleClick(1)} />
    //     <Square value={squares[2]} onSquareClick={() => handleClick(2)} />
    //   </div>
    //   <div className="board-row">
    //     <Square value={squares[3]} onSquareClick={() => handleClick(3)} />
    //     <Square value={squares[4]} onSquareClick={() => handleClick(4)} />
    //     <Square value={squares[5]} onSquareClick={() => handleClick(5)} />
    //   </div>
    //   <div className="board-row">
    //     <Square value={squares[6]} onSquareClick={() => handleClick(6)} />
    //     <Square value={squares[7]} onSquareClick={() => handleClick(7)} />
    //     <Square value={squares[8]} onSquareClick={() => handleClick(8)} />
    //   </div>
    // </>
    // <>
    //  <h1>Welcome to my app</h1>
    //   <MyButton title="button" disabled={false}  onClick={Alertfunctiontwo} />
    //   <MyButton title="button" disabled={false}  onClick={Alertfunction}/>
    // </>
    // <>
    //   <select name="" id="" onChange={(e)=>SetStatus(e.target.value as values )}>
    //      <option value="medium" >medium</option>
    //      <option value="strong" >strong</option>
    //      <option value="weak" >weak</option>
    //   </select>
    //   <div className="mt-20">{Status}</div>
    // </>
    // <>
    //   <h1>Welcome to my counter</h1>
    //   <p>Count:{state.count}</p>
    //   <button onClick={addFive} className="border-2 bg-slate-600 text-white ml-5">Add 5</button>
    //   <button onClick={reset} className="border-2 bg-slate-600 text-white ml-5">Reset</button>
    // </>
    <>
      <button onClick={decrement} className="py-2 px-3 bg-cyan-300 border-1 border-black m-5 active:scale-90">-</button>
      <span>{count}</span>
      <button onClick={increment} className="py-2 px-3 bg-cyan-300 border-1 border-black m-5 active:scale-90">+</button>
    </>
  );
}
// type values = "strong"|"weak"|"medeum";
// function Square(
//   { value }: { value: null | string },
//   { onSquareClick}: { onSquareClick: () => void }
// ) {
//   // const [value,setValue]=useState(Array(9).fill(null));button{
//     background-color: lightblue;
//     border: 0;
// }

//   // function handleClick(){
//   //     //  setValue()
//   //     console.log(value)
//   //  }
//   return (
//     // <button className="border-1 p-3 border-black font-bold min-w-16 min-h-16" onClick={onSquareClick}>
//     //   {value}
//     // </button>
//   );
// }
// function slowFunction(num:number){
//   console.log("calling slow functoin");
//   for(let i=0;i<1000000000;i++){}
//   return num * 2
// }
// function itemselecte(): number {
//   return 5;
// }
// function MyButton({counte,onClick}){

//    return(
//      <button onClick={onClick} className="bg-slate-500 px-2 py-1 m-20 active:scale-90 active:bg-slate-600 text-white">You clicked {counter} times here</button>
//   )
// }
// interface MyButtonProps{
//   title:string;
//   disabled:boolean;
//   onClick:()=>void
// }
// function MyButton({title,disabled,onClick}:MyButtonProps){
//   return(
//       <button disabled={disabled} className="bg-transparent border-2 m-2" onClick={onClick}>{title}</button>
//   );
// }
export default App;
