import { useContext, useEffect, useState } from 'react';
import styles from '../Modal.module.css';
import ChatContext from '../../../context/chat-context';
import DarkButton from '../../../UI/buttons/DarkButton';

const EditChatModal = ({ setShowModal, modal }) => {
    const [name, setName] = useState("");
    const cxt = useContext(ChatContext);

    const editChats = [...cxt.chats];

    useEffect(() => {
        setName(editChats.find(chat => chat.id === modal.extra).name);
    }, [])

    const handleChange = (event) => {
        setName(event.target.value);
    }

    const editSubmitHandler = (event) => {
        event.preventDefault();

        editChats.find(chat => chat.id === modal.extra).name = name;
        cxt.setChats(editChats);

        setName("");
        setShowModal(false);
    }

    return (
        <form onSubmit={editSubmitHandler}>
            <input
                autoFocus
                className={styles.modalInput}
                onChange={handleChange}
                required
                type="text"
                value={name}
            />
            <DarkButton className={styles.modalButton} type="submit">Submit</DarkButton>
        </form>
    )
}

export default EditChatModal;