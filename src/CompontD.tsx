import { useContext } from "react";
import { UserContext } from "./CompontA";

export default function CompontD() {
   const user = useContext(UserContext);

  return (
    <div className="box border-3 p-[25px] m-1 border-black">
      <h1>CompontD</h1>
      <h2>{`bye ${user}`}</h2>
    </div>
  );
}
