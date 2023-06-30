import styles from './MessageBar.module.css';

const MessageBar = () => {
    const sendMessage = (event) => {
        event.preventDefault();
    }

    return (
        <form onSubmit={sendMessage} id={styles.messageBar}>
            <input type="text" />
            <button>Send</button>
        </form>
    )
}

export default MessageBar;