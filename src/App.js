import './App.css';
import {Header} from './components/header/Header'
import {Create} from './components/Create-todo/Create'
import {Info} from './components/Info-todo/Info'


function App() {
  return (
    <div className="App">
      <Header/>
      <div className='todo_body'>
          <Create/>
        <div className='todo_wrapper'>
          <Info text='aziz' number='22' month='January'/>
          <Info text='azamat' number='15' month='July'/>
          <Info checked={true} text='aman' number='18' month='December'/>
        </div>
      </div>
    </div>
  );
}

export default App;
