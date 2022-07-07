import {useEffect, useState } from 'react';
import './App.css';
import {Header} from './components/header/Header'
import {Create} from './components/Create-todo/Create'
import {Info} from './components/Info-todo/Info'


function App() {
  const todoArr = JSON.parse(localStorage.getItem('todo')) || []
  const [state, setState] = useState(todoArr)
  // const[info, setInfo] = useState('')

  useEffect(() => {localStorage.setItem('todo', JSON.stringify(state))},[state]);


  const addNewTodo = (str) => {
    setState([...state,{text: str , status: false,id: Date.now()}])
  }
  const deleteTodo = (id) => {
    const newArr = state.filter((item) => item.id !== id);
    setState(newArr)
  }
  const onCheck = (id) => {
    const newArr = state.map((item) => {
      if (item.id === id) {
        item.checked = !item.checked
      }
      return item
    })
    setState(newArr)
  }
  const isEdit = (newTxt,id) => {
    const addNew = state.map((item) => {
      if(item.id === id){
        item.text = newTxt
      }
      return item
    })
    setState(addNew)
  }

  return (
    <div className="App">
      <Header state={state}/>
      <div className='todo_body'>
          <Create addNew={addNewTodo}/>
        <div className='todo_wrapper'>
          {state.length ? <div> 
            {state.map((item) => <Info text = {item.text} checked={item.checked} id={item.id} onDelete={deleteTodo} onCheck={onCheck} isEdit={isEdit}/>)
            }
          </div> : <h3 className='text'>Please add Todo</h3>}
        </div>
      </div>
    </div>
  );
}

export default App;












// const removeSecond = () => {setEmployees(current =>current.filter(employee => {
//       return employee.id !== 2;
//     }),
//   );
// };