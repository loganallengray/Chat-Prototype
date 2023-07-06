import styles from './Modal.module.css';
import React from "react";
import FeedbackModal from './types/FeedbackModal';
import EditChatModal from './types/EditChatModal';

const Modal = ({ setShowModal, modal }) => {
    const optionsCheck = () => {
        switch (modal.name) {
            case "feedback":
                return (
                    <FeedbackModal setShowModal={setShowModal} modal={modal} />
                )
            case "chat":
                if (modal.type === "edit") {
                    return (
                        <EditChatModal setShowModal={setShowModal} modal={modal} />
                    )
                } else {

                }
            default:
                return (
                    <></>
                )
        }
    }

    return (
        <>
            <div className={styles.backdrop} onClick={() => setShowModal(false)} />
            <div className={styles.modal}>
                <div className={styles.modalHeader}>
                    <h1>{modal.title}</h1>
                    <div className={styles.modalButton} onClick={() => setShowModal(false)}>X</div>
                </div>
                <p>{modal.message}</p>
                {optionsCheck()}
            </div>
        </>
    )
}

export default Modal;