import React, { useState } from 'react';
import Balance from './components/Balance';
import Statistics from './components/Statistics';
import TransactionForm from './components/TransactionForm';
import TransactionList from './components/TransactionList';
import './App.css';

function App() {
        const [transactions, setTransactions] = useState([
                    { 
                                    id: 1, 
                                    type: 'income', 
                                    amount: 50000, 
                                    category: 'Зарплата', 
                                    date: '2024-01-15', 
                                    description: 'Аванс' 
                                },
                    { 
                                    id: 2, 
                                    type: 'expense', 
                                    amount: 1500, 
                                    category: 'Еда', 
                                    date: '2024-01-16', 
                                    description: 'Продукты' 
                                },
                    { 
                                    id: 3, 
                                    type: 'expense', 
                                    amount: 500, 
                                    category: 'Транспорт', 
                                    date: '2024-01-16', 
                                    description: 'Такси' 
                                }
                ]);

        const addTransaction = (newTransaction) => {
                    const transaction = {
                                    id: Date.now(),
                                    type: newTransaction.type,
                                    amount: newTransaction.amount,
                                    category: newTransaction.category,
                                    date: new Date().toISOString().split('T')[0],
                                    description: newTransaction.description
                                };
                    
                    setTransactions([...transactions, transaction]);
                };

        return (
                    <div className="App">
                        <h1>Учёт финансов</h1>
                        <Balance transactions={transactions} />
                        <Statistics transactions={transactions} />
                        <TransactionForm onAddTransaction={addTransaction} />
                        <TransactionList transactions={transactions} />
                    </div>
                );
}

export default App;
