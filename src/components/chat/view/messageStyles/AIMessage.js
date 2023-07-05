// import styles from './AIMessage.module.css';
import styles from './MessageStyles.module.css';

const AIMessage = ({ message }) => {
    return (
        <li key={message.id} className={styles.aiMessage}>
            <p className={styles.messageContent}>{message.content}</p>
        </li>
    )
}

export default AIMessage;