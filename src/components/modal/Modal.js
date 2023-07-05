import styles from './Modal.module.css';
import React from "react";

const Modal = ({ setShowModal, modal }) => {
    return (
        <>
            <div className={styles.backdrop} onClick={() => setShowModal(false)} />
            <div className={styles.modal}>
                <h1>{modal.title}</h1>
                <p>{modal.message}</p>
            </div>
        </>
    )
}

export default Modal;