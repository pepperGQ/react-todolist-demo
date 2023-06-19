
import './App.css';
import MyHeader from './components/MyHeader/MyHeader';
import { useEffect, useState } from 'react';
import MyInput from './components/MyInput/MyInput';
import TodoItem from './components/TodoItem/TodoItem';


function App() {
  const [isShowInput,setShowInput] = useState()
  const [todoList,setTodoList] = useState([])

  useEffect(()=>{
    setTodoList(JSON.parse(localStorage.getItem('todoData') || '[]') )
  },[])

 useEffect(()=>{
  localStorage.setItem('todoData',JSON.stringify(todoList))
 },[todoList])

  function addTodoItem(value){
    if(!value || value.length<0){
      return
    }
    const todoItem = {
      id:new Date().getTime(),
      content: value,
      completed: false
    }
    setTodoList([...todoList,todoItem])
  }

  const changeCompleted = function(id){
    const list = todoList.map(item=>{
      if(item.id === id){
        item.completed = !item.completed
      }
      return item
    })
    setTodoList(list)
  }

  function delTodoItem(id){
    setTodoList(todoList.filter(item => item.id !== id))
  }

  function editTodoItem(newVal){
    setTodoList(todoList.map(item=>{
      if(item.id === newVal.id){
        return {...newVal}
      }
        return item
      
    }))
  }

  return (
    <div className="App">
      <MyHeader onClickAdd={()=>{setShowInput(!isShowInput)}}/>
      <MyInput isShow={isShowInput} confirm={addTodoItem}/>
      {
        todoList.map((item)=>{
          return (
            <TodoItem
             key={item.id}
             data={item}
             onCheckChange={changeCompleted}
             onDelete={delTodoItem}
             onEdit={editTodoItem}
            />
          )
        })
      }
    </div>
  );
}

export default App;
