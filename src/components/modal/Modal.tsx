import React from 'react'
import { modalType } from '../../types/interfaces'



const Modal = ({isOpen, toggle, children}: modalType) => {
  return (
    <>
        {isOpen && (
        <div className='modal-overlay' onClick={toggle}>
            <div onClick={(e) => e.stopPropagation()} className='modal-box'>
                {children}
                </div>
        </div>
        )}
    </>
  )
}

export default Modal