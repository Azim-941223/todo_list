import {useEffect } from 'react';
import './App.css';
import {Header} from './components/header/Header'
import {Create} from './components/Create-todo/Create'
import {Info} from './components/Info-todo/Info'
import { useDispatch, useSelector } from 'react-redux';
import { todoAction } from './store/todoSlice';


function App() {
  const state = useSelector((state) => state.todo.data )
  const isPending = useSelector((state) => state.todo.isLoading)
  const dispatch = useDispatch()

  useEffect(() =>{
    setTimeout(() => {
      dispatch(todoAction.setLoading(false))
  },3000)}, [dispatch])


  if(isPending) {
    return <div className='load'><img src='https://c.tenor.com/zecVkmevzcIAAAAM/please-wait.gif' alt='preloader'/></div>
  }
  return (
    <div className="App">
      <Header state={state}/>
      <div className='todo_body'>
          <Create/>
        <div className='todo_wrapper'>
          {state.length ? <div> 
            {state.map((item) => <Info key={item.id} text = {item.text} checked={item.checked} id={item.id}/>)
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