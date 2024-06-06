


export const Person = (props) => {
    return (
        <div>
            <p>{props.name}</p>
            <p>{props.age}</p>
            <p>this person{props.isMarried ? " is married" : " is single"}</p>
        </div>
    )
}