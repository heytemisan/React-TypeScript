import './App.css';
import { Greet } from './components/Lesson1/Greet';
import { Person } from './components/Lesson2/Person';

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
