import  { Name }  from './Person.types'
type PersonListProps ={
    PersonLists :Name[]
}
export const PersonList = (props:PersonListProps) => {

    return(
        <div>
                {props.PersonLists.map((PersonLists,index) => {
                    return(
                        <div> 
                          <h2>Tên: {PersonLists.last} {PersonLists.first} </h2>          

                        </div>
                    )
                })}
        </div>
    )
}