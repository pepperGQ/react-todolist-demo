import React, { Fragment } from 'react'
import './index.css'

export default function Modal(props) {
    const {title,children,isShow,onConfirm} = props
  return (
    <Fragment>
    {isShow?
    (
        
        <div className='modal'>
            <div className='modal-main'>
            <div className='modal-header'>{title}</div>
            <div className='modal-content'>{children}</div>
            <div className='modal-footer'>
                <button className='button-confirm ' onClick={onConfirm}>确定</button>
            </div>
            </div>   
        </div>
    )
    :''}
    </Fragment>
  )
}
