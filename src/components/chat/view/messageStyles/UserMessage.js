import styles from './UserMessage.module.css';

const UserMessage = ({ message }) => {
    return (
        <li key={message.id} className={styles.userMessage}>{message.content}</li>
    )
}

export default UserMessage;