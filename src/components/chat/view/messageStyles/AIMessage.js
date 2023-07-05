import styles from './MessageStyles.module.css';

const AIMessage = ({ message }) => {
    const feedbackHandler = (event) => {

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