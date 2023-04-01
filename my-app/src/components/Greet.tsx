
// định nghĩa một interface GreetProps
//với các props kiểu dữ liệu cụ thể.
type GreetProps = {
    name:string
    age?:number // ?  ược sử dụng để đánh dấu thuộc tính đó là tùy chọn. 
    //Điều này có nghĩa là thuộc tính đó có thể không được truyền vào khi sử dụng component.
    isLonggeIn:boolean
}
export const Greet = (props:GreetProps) =>{
    //  sử dụng destructuring trị mặc định cho thuộc tính "age" nếu không được truyền vào props.
    const {age = 21} = props
    return(
        <div>
            {
             props.isLonggeIn  ?` Hello ${props.name} old ${age}`
                : `<span> welcom Guest</span>`
            }
        </div>
    )
}