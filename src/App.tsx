import './App.css';
import { Greet } from './components/01Lesson-Greetings/Greet';
import { Person } from './components/02Lesson2-Person/Person';
import { PersonList } from './components/03Lesson-Personlist/Personlist';
import { Status } from './components/04Lesson-status/Status';

function App() {

  const personName = {
    first: 'Bruce',
    last: 'Wayne',
  }

  const nameList = [
    {
      firstName:'Bruce',
      lastName:'Weng',
      age: 30,
    },
    {
      firstName:'Temisan',
      lastName:'Momodu',
      age:50,
    },
    {
      firstName:'James',
      lastName:'Bond',
      age:53,
    }
  ]

  return (
    <div className="App">
      <Greet name="Temisan" numberCount={10} isLoggedIn={false}/>
      <Person name={personName}/>
      <PersonList names={nameList}/>
      <Status status='loading'/>
    </div> 
  );
}

export default App;
