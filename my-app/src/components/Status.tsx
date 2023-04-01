
type StatusProps = {
    status:string
}

export const Status = (props:StatusProps) =>{
    let mesage
    if(props.status === 'loading'){
        mesage = 'loading...'
    }else if(props.status === 'success') {
        mesage = 'success...'
    } else if(props.status === 'error') {
        mesage = 'error data'
    }

    return(
        <div>
                 <div> Status {mesage}   </div>
        </div>
    )
}