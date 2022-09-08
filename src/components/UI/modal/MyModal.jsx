import React, {useEffect, useRef, useState} from 'react';

import './MyModal.scss'

const MyModal = ({ active, setActive, id, children }) => {


    useEffect(() => {
        setActive(active);
    }, [active])

    return (
        <div id={id} className={`modal row center align-center ${active ? 'active' : ''}`}>
            {children}
        </div>
    );
};

export const ModalContent = ({ onClose, children }) => {
    const contentRef = useRef(null);

    const closeModal = () => {
        contentRef.current.parentNode.classList.remove('active');
        if (onClose) onClose();
    }

    return (
        <div className='modal__content' ref={contentRef}>
            <button onClick={closeModal}>
                <i className="icon fas fa-times" />
            </button>
            {children}
        </div>
    )
}

export default MyModal;







