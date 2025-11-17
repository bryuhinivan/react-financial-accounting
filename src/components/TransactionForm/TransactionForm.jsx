import React, { useState } from "react";
import styles from './TransactionForm.module.css'

const TransactionForm = ({ onAddTransaction }) => {
  const [description, setDescription] = useState("");
  const [amount, setAmount] = useState("");
  const [category, setCategory] = useState("Еда");
  const [type, setType] = useState("expense");

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!description || !amount) return;

    const newTransaction = {
      description,
      amount: Number(amount),
      category,
      type,
    };

    onAddTransaction(newTransaction);

    setDescription("");
    setAmount("");
    setCategory("Еда");
    setType("expense");
  };

  return (
    <div className={styles.transactionForm}>
      <h2>Добавить операцию</h2>
      <form onSubmit={handleSubmit}>
        <div className={styles.formGroup}>
          <label>Тип операции:</label>
          <select value={type} onChange={(e) => setType(e.target.value)}>
            <option value="expense">Расход</option>
            <option value="income">Доход</option>
          </select>
        </div>

        <div className={styles.formGroup}>
          <label>Описание:</label>
          <input
            type="text"
            value={description}
            onChange={(e) => setDescription(e.target.value)}
            placeholder="Описание операции"
            required
          />
        </div>

        <div className={styles.formGroup}>
          <label>Сумма:</label>
          <input
            type="number"
            value={amount}
            onChange={(e) => setAmount(e.target.value)}
            placeholder="0"
            required
            min="1"
          />
        </div>

        <div className={styles.formGroup}>
          <label>Категория:</label>
          <select
            value={category}
            onChange={(e) => setCategory(e.target.value)}
          >
            <option value="Еда">Еда</option>
            <option value="Транспорт">Транспорт</option>
            <option value="Развлечения">Развлечения</option>
            <option value="Зарплата">Зарплата</option>
            <option value="Прочее">Прочее</option>
          </select>
        </div>

        <button type="submit" className={styles.button}>Добавить</button>
      </form>
    </div>
  );
};

export default TransactionForm;
