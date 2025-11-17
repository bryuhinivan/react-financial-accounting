import React from "react";
import styles from './TransactionList.module.css';

const TransactionList = ({ transactions }) => {
  return (
    <div className={styles.transactionList}>
      <h2>История операций</h2>
      {transactions.length === 0 ? (
        <p>Нет операций</p>
      ) : (
        <div className={styles.transactions}>
          {transactions.map((transaction) => (
            <div
              key={transaction.id}
              className={`${styles.transactionItem} ${
                transaction.type === "income" ? styles.incomeBorder : styles.expenseBorder
              }`}
            >
              <div className={styles.transactionInfo}>
                <span className={styles.description}>{transaction.description}</span>
                <span className={styles.category}>{transaction.category}</span>
                <span className={styles.date}>{transaction.date}</span>
              </div>
              <div className={`${styles.transactionAmount} ${styles[transaction.type]}`}>
                {transaction.type === "income" ? "+" : "-"}
                {transaction.amount} ₽
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default TransactionList;