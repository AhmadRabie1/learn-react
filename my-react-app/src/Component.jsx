import { useEffect, useRef, useState } from "react"


function Component(){

    const ref = useRef(0);

    useEffect(() => {
        console.log("COMPONENT RENDERED")
    })

    function handleClick(){
        ref.current
    }

    return(
        <button onClick={handleClick}>
            Click Me!
        </button>
    );

}
export default Component