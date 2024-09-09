// import Buttons from "./components/Buttons";
// import Alert from "./components/Alert";
// import { useState } from "react";

import MyButton from "./components/SmallButton";

function App() {
//   const [alertvisible,setalertvisiblity] = useState(false)
  return (
   //  <div>
   //    {alertvisible && <Alert onClose={()=>setalertvisiblity(false)}>My alert</Alert>}
   //    <Buttons color="secondary" onClick={()=>setalertvisiblity(true)}>my button</Buttons>
   //  </div>
     <>
      <h1>Welcome to my app</h1>
      <MyButton/>
     </>
  )
}

export default App;
