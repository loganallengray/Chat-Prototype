import styles from './MessageStyles.module.css';

const UserMessage = ({ message }) => {
    return (
        <li key={message.id} className={`${styles.userMessage} mobile-message`}>
            <p className={styles.messageContent}>{message.content}</p>
        </li>
    )
}

export default UserMessage;