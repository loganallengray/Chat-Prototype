import styles from './ChatView.module.css';

const ChatPlaceholder = () => {
    return (
        <div id={styles.chatPlaceholder} className="mobile-placeholder">
            <h1>Wiserdime AI</h1>
            <div id={styles.placeholderInner} className="mobile-placeholderInner">
                <div className={`${styles.placeholderGroup} mobile-placeholderGroup`}>
                    <h2>Examples</h2>
                    <p>"How does the stock market work?"</p>
                    <p>"Can you explain the concept of diversification in investing?"</p>
                    <p>"What are some common investment strategies for long-term growth?"</p>
                </div>
                <div className={`${styles.placeholderGroup} mobile-placeholderGroup`}>
                    <h2>Capabilities</h2>
                    <p>Can learn from data and make predictions or decisions without explicit programming.</p>
                    <p>Can maintain context and remember previous parts of the conversation.</p>
                    <p>Can access vast amounts of information and provide relevant answers to user questions.</p>
                </div>
                <div className={`${styles.placeholderGroup} mobile-placeholderGroup`}>
                    <h2>Limitations</h2>
                    <p>Can struggle with understanding context beyond the immediate conversation.</p>
                    <p>Can inadvertently reflect biases present in the training data.</p>
                    <p>Can have difficulty with common sense reasoning, logical deductions, or understanding implicit information.</p>
                </div>
            </div>
        </div>
    )
}

export default ChatPlaceholder;