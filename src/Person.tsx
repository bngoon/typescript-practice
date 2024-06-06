import { useState } from "react"



export const Person = (props) => {

    const [isShowInfo, setShowInfo] = useState<boolean>(true);
    
    const toggleInfo = () => {
        setShowInfo((prev)=> !prev);
    }

    return (
        <div>
            {isShowInfo && ( 
            <>
            <p>{props.name}</p>
            <p>{props.age}</p>
            <p>this person{props.isMarried ? " is married" : " is single"}</p>
            </>
            )}

            <button onClick={toggleInfo}>Toggle Info</button>
        </div>
    )
}