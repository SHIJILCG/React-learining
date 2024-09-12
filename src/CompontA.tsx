import { useState, createContext } from "react";
import CompontB from "./CompontB";

export const UserContext = createContext("");

export default function CompontA() {
  const [user, setUser] = useState("shijil");

  return (
    <div className="box border-3 p-[25px] m-1 border-black">
      <h1>CompontA</h1>
      <h2>{`Hello ${user}`}</h2>
      <UserContext.Provider value={user}>
        <CompontB />
      </UserContext.Provider>
    </div>
  );
}
