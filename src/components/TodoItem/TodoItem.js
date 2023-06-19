import React, { useEffect, useRef, useState } from 'react'
 import './index.css'
 import Modal from '../Modal/Modal'

export default function TodoItem(props) {
    const {data,onCheckChange,onDelete,onEdit} = props
    const [isShow,setShow] = useState(false)
    const [isEditShow,setEditShow] = useState(false)
    const [completed,setCompleted] = useState(data.completed)
    const [newConent,setNewContent] = useState(data.content)
    const editInput = useRef()
    function checkTodo(){
      setShow(true)
    }
    function checkConfirm(){
      setShow(false)
    }
    
    function editTodo(){
      setEditShow(true)
    }
    const editComplete = ()=>{
      setCompleted(!completed)
    }
    const editContent =()=>{
      const newVal = editInput.current.value.trim()
      setNewContent(newVal) 
    }
    function editConfirm(){
      let newTodoItem = {...data}
      if(newConent.length>0){
        newTodoItem.content = newConent
      }
      newTodoItem.completed = completed
      onEdit(newTodoItem)
      setEditShow(false)
    }
    useEffect(()=>{
      setNewContent(data.content)
    },[data.content])
    useEffect(()=>{
      setCompleted(data.completed)
    },[data.completed])
  return (
    <div>
        <input
        type='checkbox'
        checked={data.completed}
        onChange={()=>onCheckChange(data.id)}
        />
        <textarea
        style={{textDecoration: data.completed ? 'line-through': 'none'}}
        value={data.content}
        ></textarea>
        <button onClick={checkTodo}>查看</button>
        <button onClick={editTodo}>编辑</button>
        <button onClick={()=>onDelete(data.id)}>删除</button>
        <Modal title='查看事件' isShow={isShow} onConfirm={checkConfirm}>
          <p>id:{data.id}</p>
          <p>事件:{data.content}</p>
          <p>状态:{data.completed?'已完成':'未完成'}</p>
        </Modal>

        <Modal title='编辑事件' isShow={isEditShow} onConfirm={editConfirm}>
          <p>id:{data.id}</p>
          <p>事件:
          <input value={newConent} ref={editInput} onChange={editContent}/>
          </p>
          <p>状态:
            <input
            type="checkbox"
            checked={completed}
            onChange={editComplete}
            />
            </p>
        </Modal>
    </div>
  )
}
