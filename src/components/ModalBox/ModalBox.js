import './ModalBox.css'
import Modal from 'react-modal'
import { useState } from 'react'

const ModalBox=()=>{
    const[modalState,setModalState]=useState(false);
    
    const openModal=()=>{
        setModalState(true)
    }

    const closeModal=()=>{
        setModalState(false)
    }
        return(<div>
                <button onClick={openModal}>click</button>
                <Modal isOpen={modalState} onRequestClose={closeModal}>
                    <h2>ModalBox</h2>

                </Modal>

        </div>

        )
}

export default ModalBox;