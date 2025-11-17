import React from "react";
import styles from './Statistics.module.css';

const Statistics = ({ transactions }) => {
  const income = transactions
    .filter((t) => t.type === "income")
    .reduce((sum, t) => sum + t.amount, 0);
  const expense = transactions
    .filter((t) => t.type === "expense")
    .reduce((sum, t) => sum + t.amount, 0);

  return (
    <div className={styles.statistics}>
      <h2>Статистика</h2>
      <div className={styles.statsGrid}>
        <div className={styles.statsCard}>
          <h3>Общий доход</h3>
          <p className={styles.income}>{income} ₽</p>
        </div>
        <div className={styles.statsCard}>
          <h3>Общие расходы</h3>
          <p className={styles.expense}>{expense} ₽</p>
        </div>
        <div className={styles.statsCard}>
          <h3>Всего операций</h3>
          <p>{transactions.length}</p>
        </div>
      </div>
    </div>
  );
};

export default Statistics;
