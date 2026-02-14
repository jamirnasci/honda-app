import type { JSX } from 'react'
import './Modal.css'
import { IoMdClose } from 'react-icons/io'

interface IModalProps{
    Component: JSX.Element
    toogleModal: Function
    title: string
}

export function Modal(props: IModalProps){
    return (
        <div className="modal-background">
            <div className="modal-container">
                <div className="modal-header">
                    <h2 style={{color: '#cc0000'}}>{props.title}</h2>
                    <button className='close-btn' onClick={()=>{
                        props.toogleModal()
                    }}>
                        <IoMdClose size={25} />
                    </button>
                </div>
                    {props.Component}
            </div>
        </div>
    )
}