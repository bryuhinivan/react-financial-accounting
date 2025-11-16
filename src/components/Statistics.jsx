import React from 'react';

const Statistics = ({ transactions }) => {
        const income = transactions.filter(t => t.type === 'income').reduce((sum, t) => sum + t.amount, 0);
        const expense = transactions.filter(t => t.type === 'expense').reduce((sum, t) => sum + t.amount, 0);
        
        return (
                    <div className="statistics">
                        <h2>Статистика</h2>
                        <div className="stats-grid">
                            <div className="stat-card">
                                <h3>Общий доход</h3>
                                <p className="income">{income} ₽</p>
                            </div>
                            <div className="stat-card">
                                <h3>Общие расходы</h3>
                                <p className="expense">{expense} ₽</p>
                            </div>
                            <div className="stat-card">
                                <h3>Всего операций</h3>
                                <p>{transactions.length}</p>
                            </div>
                        </div>
                    </div>
                );
};

export default Statistics;
