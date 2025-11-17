import React from "react";
import styles from './Balance.module.css';

const Balance = ({ transactions }) => {
  // Расчёт баланса
  const calculateBalance = () => {
    return transactions.reduce((total, transaction) => {
      return transaction.type === "income"
        ? total + transaction.amount
        : total - transaction.amount;
    }, 0);
  };

  // Рассчёт доходов
  const calculateIncome = () => {
    return transactions
      .filter((transaction) => transaction.type === "income")
      .reduce((total, transaction) => total + transaction.amount, 0);
  };

  // Рассчёт расходов
  const calculateExpense = () => {
    return transactions
      .filter((transaction) => transaction.type === "expense")
      .reduce((total, transaction) => total + transaction.amount, 0);
  };

  const balance = calculateBalance();
  const income = calculateIncome();
  const expense = calculateExpense();

  return (
    <div className={styles.balanceContainer}>

      <div className={styles.balanceCard}>
        <h3>Текущий баланс</h3>
        <p className={balance >= 0 ? styles.balancePositive : styles.balanceNegative}>
          {balance} ₽
        </p>
      </div>

      <div className={styles.balanceStats}>
        <div className={`${styles.statItem} ${styles.income}`}>
          <span>Доходы: </span>
          <strong>{income} ₽</strong>
        </div>

        <div className={`${styles.statItem} ${styles.expense}`}>
          <span>Расходы: </span>
          <strong>{expense} ₽</strong>
        </div>
      </div>
    </div>
  );
};

export default Balance;
