import React from 'react'
import './index.css'

export default function MyHeader(props) {
  const {onClickAdd} = props
  return (
    <div className='box-main'>
      <span className='header-title'>待办事件</span>
      <span className='header-add' onClick={onClickAdd}>+</span>
    </div>
  )
}
