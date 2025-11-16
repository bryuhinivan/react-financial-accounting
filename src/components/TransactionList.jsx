import React from 'react';

const TransactionList = ({ transactions }) => {
        return (
                    <div className="transaction-list">
                        <h2>История операций</h2>
                        {transactions.length === 0 ? (
                                            <p>Нет операций</p>
                                        ) : (
                                                            <div className="transactions">
                                                                {transactions.map(transaction => (
                                                                                            <div key={transaction.id} className={`transaction-item ${transaction.type}`}>
                                                                                                <div className="transaction-info">
                                                                                                    <span className="description">{transaction.description}</span>
                                                                                                    <span className="category">{transaction.category}</span>
                                                                                                    <span className="date">{transaction.date}</span>
                                                                                                </div>
                                                                                                <div className={`transaction-amount ${transaction.type}`}>
                                                                                                    {transaction.type === 'income' ? '+' : '-'}{transaction.amount} ₽
                                                                                                </div>
                                                                                            </div>
                                                                                        ))}
                                                            </div>
                                                        )}
                    </div>
                );
};

export default TransactionList;
