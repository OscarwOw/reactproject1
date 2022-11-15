import { useState } from 'react';

import Modal from './Modal';
import Backdrop from './Backdrop';

function Todo(props) {
    const [ modalIsOpen, setModalIsOpen ] = useState(false);

    function DeleteHandler() {
        setModalIsOpen(true);
    }


    return (
        <div className='card'>
            <h2>{props.text}</h2>
            <div className='Actions'>
                <button className='btn' onClick={DeleteHandler}>Delete</button>
            </div>
            {modalIsOpen && <Modal />}
            {modalIsOpen && <Backdrop />}

        </div>
    );
}

export default Todo;