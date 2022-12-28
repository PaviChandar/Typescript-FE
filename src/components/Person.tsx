import { PersonProps } from "./Person.types";

const Person = (props: PersonProps) => {
    return (
        <div>
            <h2>Person name sample</h2> 
            <h3>{props.name.first} {props.name.last}</h3>
        </div>
    )
}

export default Person