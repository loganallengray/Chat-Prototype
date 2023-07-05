import styles from '../Modal.module.css';

const FeedbackModal = ({ modal }) => {
    const feedbackSubmitHandler = (event) => {
        event.preventDefault();



        console.log("test");
    }

    return (
        <form onSubmit={feedbackSubmitHandler}>
            <input
                autoFocus
                className={styles.modalInput}
                required
                type="text"
            />
            <button className={styles.modalButton} type="submit">Submit</button>
        </form>
    )
}

export default FeedbackModal;