import logo from './logo.svg';
import './App.css';
import Intro1 from './components/Intro1';
import Hello from './JSX/Hello';
import Student1 from './Props/Student1';
import Student2 from './Props/Student2';
import Enroll from './State/Enroll';
import Counter from './State/Counter';
import UseStateHook1 from './useState/UseStateHook1';
import UseStateHook2 from './useState/UseStateHook2';
import UseStateHook3 from './useState/UseStateHook3';
import UseStateHook4 from './useState/UseStateHook4';

function App() {
  return (
    <div className="App">
      <h1>Hello World!</h1>
      <h2>VESITians</h2>

      {/* <Intro1></Intro1> */}

      {/* <Hello></Hello> */}

      {/* <Student1 Name="Durvesh" RollNo= "5">
        <h1>Student1</h1>
      </Student1>
      <Student1 Name="Ketan" RollNo= "13"></Student1>
      <Student1 Name="Sid" RollNo= "54"></Student1> */}

      {/* <Student2 name= "Ketan" RollNo= "5"></Student2>
      <Student2 name= "Durvesh" RollNo= "15">
        <h6>Student2</h6>
      </Student2>
      <Student2 name= "Sid" RollNo= "25"></Student2> */}

      {/* <Enroll></Enroll> */}

      {/* <Counter></Counter> */}

      {/* <UseStateHook1></UseStateHook1> */}

      {/* <UseStateHook2></UseStateHook2> */}

      {/* <UseStateHook3></UseStateHook3> */}

      <UseStateHook4></UseStateHook4>
    </div>
  );
}

export default App;
