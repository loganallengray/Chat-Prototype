import { useContext } from 'react';
import styles from './MessageStyles.module.css';
import ChatContext from '../../../../context/chat-context';

const AIMessage = ({ message }) => {
    const cxt = useContext(ChatContext);

    const feedbackHandler = (event) => {
        const [type, id] = event.target.id.split("--");

        if (type === "positive") {
            cxt.setModal({
                name: "feedback",
                type: "positive",
                title: "Positive Feedback",
                message: "Please tell us what you liked about this message so we can work to improve the responses you receive!",
                extra: Number(id)
            })
        } else {
            cxt.setModal({
                name: "feedback",
                type: "negative",
                title: "Negative Feedback",
                message: "Please tell us what you didn't like about this message so we can work to improve the responses you receive.",
                extra: Number(id)
            })
        }

        cxt.setShowModal(true);
    }

    return (
        <li key={message.id} className={styles.aiMessage}>
            <p className={styles.messageContent}>{message.content}</p>
            <div className={styles.feedbackWrapper}>
                <div
                    id={`positive--${message.id}`}
                    className={styles.feedback}
                    onClick={feedbackHandler}
                >+</div>
                <div
                    id={`negative--${message.id}`}
                    className={styles.feedback}
                    onClick={feedbackHandler}
                >-</div>
            </div>
        </li>
    )
}

export default AIMessage;