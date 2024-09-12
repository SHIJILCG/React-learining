import { useReducer } from "react";
type CounterType ={
     count:number
} 
type AcionType={
    type:string,
    payload:number
}

const initialState={count:0}
function reducer(state:CounterType,action:AcionType) {
    switch (action.type){
         case 'increment':
             return {count:state.count + action.payload}
          case 'decrement':
            return {count:state.count - action.payload}
          default :
            return state      
    }
}
export const Counter =() =>{
      const [state,dispatch]=useReducer(reducer,initialState)
      return (
         <>
         
          Count:{state.count}
          <button onClick={()=> dispatch({type:'increment',payload:10})}>increment</button>
          <button onClick={()=> dispatch({type:'decrement',payload:10})}>Decrement 10</button>
         </>
      )
}

