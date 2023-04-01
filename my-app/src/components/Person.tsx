import {PersonProps} from './Person.types'
export const Person = (props:PersonProps) =>{
    return(
        <div>
           {props.PersonName.last}    {props.PersonName.first}
        </div>
    )
}