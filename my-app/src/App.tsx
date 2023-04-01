
import './App.css';
import { Button } from './components/Button';
import { Container } from './components/Container';
import { Greet } from './components/Greet';
import { Heading } from './components/Heading';
import { Input } from './components/Input';
import { Osar } from './components/Osar';

import { Person } from './components/Person';
import { PersonList } from './components/PersonList';
import { Status } from './components/Status';
import { Counter } from './components/state/Counter';
import { Loggedln } from './components/state/Loggedln';
import { User } from './components/state/User';
// khai báo một functional component tên là "App" sử dụng từ khóa "function". 
//Đây là một React component không có state nên không cần phải sử dụng class.
function App() {
  //tạo một đối tượng personName với các thuộc tính first và last.
  const PersonName ={
    first :'Thanh',
    last : 'pham'
  }   

  const PersonLists = [
      { id:1, first :'Thanh',last :'pham' },
      { id:2, first :'tam',last :'nguyen' },
      { id:3, first :'yen',last :'pham' }
  ]
  return (
    <div className="App">
      {/* Component "Greet" được truyền hai props là "name" và "isLonggeIn" 
      với giá trị lần lượt là "thanh" và "true". */}

        {/* <Greet name='thanh'  isLonggeIn ={true}/>  */}
       {/* Person và truyền vào một prop có tên là name với giá trị là đối tượng personName được khởi tạo ở trên. */}
        {/* <Person  PersonName ={PersonName}/>
        <PersonList PersonLists={PersonLists} /> */}

        {/* <Status status= 'loading'  />
        <Heading> Placeholder text</Heading>
        <Osar>
            <Heading>Oscar góe to</Heading>
        </Osar> */}
         {/* <Button handleClick={(event,id) => {
          console.log("Button Click",id)
        }} />
        <Input value='' handleChange={event => console.log(event)} />
        <Container styles={{color:'red',fontSize:'35px'}} /> */}

        <Loggedln />
        <User />
        <Counter />
    </div>
  );
}

export default App;
