import { useContext } from 'react';
import styles from '../Modal.module.css';
import ChatContext from '../../../context/chat-context';
import DarkButton from '../../../UI/buttons/DarkButton';

const DeleteChatModal = ({ setShowModal, modal }) => {
    const cxt = useContext(ChatContext);

    const deleteSubmitHandler = (event) => {
        event.preventDefault();

        const deleteChats = [...cxt.chats];

        const filteredChats = deleteChats.filter(chat => chat.id !== modal.extra);
        cxt.setCurrentChat(-1)
        cxt.setChats(filteredChats);

        setShowModal(false);
    }

    return (
        <div className={styles.errorContainer}>
            <DarkButton className={styles.modalButton} onClick={deleteSubmitHandler}>Continue</DarkButton>
        </div>
    )
}

export default DeleteChatModal;