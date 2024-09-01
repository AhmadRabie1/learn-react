import { createContext, useState } from "react";
import ComponentB from "./ComponentB";

export const UserContext = createContext();

function ComponentA(){


    const[user, setUser] = useState("Ahmad");

    return(
        <div className="box">
            <h1>ComponentA</h1>
            <h2>{`Hello ${user}`}</h2>
            <ComponentB/>
        </div>
    );
}
export default ComponentA