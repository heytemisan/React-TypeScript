import './App.css';
import { Greet } from './components/01Lesson-Greetings/Greet';
import { Person } from './components/02Lesson2-Person/Person';

function App() {

  const personName = {
    first: 'Bruce',
    last: 'Wayne',
  }

  return (
    <div className="App">
      <Greet name="Temisan" numberCount={10} isLoggedIn={false}/>
      <Person name={personName}/>
    </div> 
  );
}

export default App;
