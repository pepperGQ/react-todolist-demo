import React, { Fragment, useRef} from 'react'

export default function MyInput(props) {
    const{isShow,confirm} = props
    const inputRef = useRef()
    function onConfirm(){
        const val = inputRef.current.value.trim()
        inputRef.current.value = ''
        confirm(val)
    }
  return (
    <Fragment>
        {isShow ?
        (<div>
            <input
            ref={inputRef}
            placeholder='请输入待办事件'
            />
            <button onClick={onConfirm}>确定</button>
        </div>
    ):''}
    </Fragment>
  )
    
}
