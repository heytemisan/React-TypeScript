import './App.css';
import { Box } from './components/Context/Box';
import { ThemeContextProvider } from './components/Context/ThemeContext';
import { UserContextProvider } from './components/Context/UserContext';
import { Greet } from './components/Props/01Lesson-Greetings/Greet';
import { Person } from './components/Props/02Lesson2-Person/Person';
import { PersonList } from './components/Props/03Lesson-Personlist/Personlist';
import { Status } from './components/Props/04Lesson-status/Status';
import { Grammy } from './components/Props/05-Lesson-childrenProps/Grammy';
import { Heading } from './components/Props/05-Lesson-childrenProps/Heading';
import { OptionalType } from './components/Props/05-Lesson-childrenProps/OptionalType';
import { Button } from './components/Props/06Lesson-Event/eventProps';
import { Input } from './components/Props/06Lesson-Event/Input';
import { StyledProps } from './components/Props/07-Lesson-styledProps/StyledProps';
import { Counter } from './components/State/Counter';
import { LoggedIn } from './components/State/Loggin';
import { User } from './components/State/user';
import { UserTypeAssertion } from './components/State/UserTypeAssertion';
import { Users } from './components/Context/User';
import { DomRef } from './components/Refs/DomRef';
import { MutableRef } from './components/Refs/Mutable';

function App() {

  const personName = {
    first: 'Bruce',
    last: 'Wayne',
  }

  const ListProps = [
    {
      firstName: 'Bruce',
      lastName: 'Weng',
      age: 30,
    },
    {
      firstName: 'Temisan',
      lastName: 'Momodu',
      age: 50,
    },
    {
      firstName: 'James',
      lastName: 'Bond',
      age: 53,
    }
  ]

  return (
    <div className="App">
      <Greet name="Temisan" numberCount={10} isLoggedIn={true} />
      <Person name={personName} />
      <PersonList names={ListProps} />
      <Status status='loading' />
      <Heading>Child props</Heading>
      <Grammy>
        <Heading>
          hello world
        </Heading>
      </Grammy>
      <OptionalType name="john" isLoggedIn={true} />
      <Input value='' handleChange={(e)=> console.log(e)
      }/>
      <Button handleClick={(e, id) => {
        console.log('hello', e, id);
      }}/>
      <StyledProps styles={{border:"1px solid black", fontFamily:"sans-serif", padding:'30px'}}/>
      <LoggedIn/>
      <User/>
      {/* <UserTypeAssertion/> */}
      <Counter/>
      <ThemeContextProvider>
        <Box/>
      </ThemeContextProvider>
      <UserContextProvider>
        <Users/>
      </UserContextProvider>
      <DomRef/>
      <MutableRef/>
    </div>
  );
}

export default App;
