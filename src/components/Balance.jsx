import React from 'react';

const Balance = ({ transactions }) => {
    // Расчёт баланса
    const calculateBalance = () => {
        return transactions.reduce((total, transaction) => {
            return transaction.type === 'income'
                ? total + transaction.amount
                : total - transaction.amount;
        }, 0);
    };

    // Рассчёт доходов
    const calculateIncome = () => {
        return transactions
            .filter(transaction => transaction.type === 'income')
            .reduce((total, transaction) => total + transaction.amount, 0);
    };

    // Рассчёт расходов
    const calculateExpense = () => {
        return transactions
            .filter(transaction => transaction.type === 'expense')
            .reduce((total, transaction) => total + transaction.amount, 0);
    };

    const balance = calculateBalance();
    const income = calculateIncome();
    const expense = calculateExpense();

    return (
        <div className="balance-container">
            <h2>Финансовый обзор</h2>

            <div className="balance-card">
                <h3>Текущий баланс</h3>
                <p className={balance >= 0 ? "balance-positiv" : "balance-negativ"}>
                    {balance} ₽
                </p>
            </div>

            <div className="balance-stats">
                <div className="stat-item income">
                    <span>Доходы</span>
                    <strong>{income} ₽</strong>
                </div>
                
                <div className="stat-item expense">
                    <span>Расходы</span>
                    <strong>{expense} ₽</strong>
                </div>
            </div>
        </div>
    );
};

export default Balance;
