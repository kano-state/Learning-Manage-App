import './App.css';
import { BrowserRouter, Switch, Route, } from 'react-router-dom';
import Header from './components/header/Header';
import Sidebar from './components/sidebar/Sidebar';
import TaskCards from './components/task/TaskCards';
import Note from "./components/note/Note"
import Calendar from "./components/calendar/Calendar"


function App() {
  return (
    <div className='app'>
      <Header />  
      <div className='main'>
        <BrowserRouter>
          <Sidebar />
        <Switch>
          <div className='contents'>
          <Route exact path="/calendar">
          <Calendar />
          </Route>
          <Route exact path="/note">
          <Note />
          </Route>
          <Route exact path="/taskcards">
          <TaskCards />
          </Route>
          </div>
        </Switch>
        </BrowserRouter>
      </div>
    </div>
  );
}

export default App;
