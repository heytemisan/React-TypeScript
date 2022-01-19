import './App.css';
import { Greet } from './components/Lesson1/Greet';

function App() {
  return (
    <div className="App">
      <Greet name="Temisan" numberCount={10} isLoggedIn={false}/>
    </div> 
  );
}

export default App;
