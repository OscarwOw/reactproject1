import { useState } from 'react';

import Modal from './Modal';
import Backdrop from './Backdrop';

function Todo(props) {
    const [ modalIsOpen, setModalIsOpen ] = useState(false);

    function DeleteHandler() {
        setModalIsOpen(true);
    }
    function closeDeleteHandler() {
        setModalIsOpen(false);
    }


    return (
        <div className='card'>
            <h2>{props.text}</h2>
            <div className='Actions'>
                <button className='btn' onClick={DeleteHandler}>Delete</button>
            </div>
            {modalIsOpen && <Modal onCancel={closeDeleteHandler} onConfirm={closeDeleteHandler} />}
            {modalIsOpen && <Backdrop onClick={closeDeleteHandler} />}

        </div>
    );
}

export default Todo; 