import { useContext, useState } from 'react';
import styles from '../Modal.module.css';
import ChatContext from '../../../context/chat-context';
import DarkButton from '../../../UI/buttons/DarkButton';

const FeedbackModal = ({ setShowModal, modal }) => {
    const [message, setMessage] = useState("");
    const cxt = useContext(ChatContext);

    const handleChange = (event) => {
        setMessage(event.target.value);
    }

    const feedbackSubmitHandler = (event) => {
        event.preventDefault();

        const newFeedback = [...cxt.feedback];

        newFeedback.push({
            positive: modal.type === "positive",
            messageId: modal.extra,
            content: message
        })

        cxt.setFeedback(newFeedback);
        setMessage("");
        setShowModal(false);
    }

    return (
        <form onSubmit={feedbackSubmitHandler}>
            <input
                autoFocus
                className={styles.modalInput}
                onChange={handleChange}
                required
                type="text"
                value={message}
            />
            <DarkButton className={styles.modalButton} type="submit">Submit</DarkButton>
        </form>
    )
}

export default FeedbackModal;