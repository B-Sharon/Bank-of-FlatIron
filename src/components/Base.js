import React, { useState } from "react";
import TransactionTable from "./TransactionTable";
import TransactionForm from "./TransactionForm";
import SearchTransactions from "./SearchTransactions";

function TransactionHolder() {
    // Defining our transactions array
    const [transactions, setTransactions] = useState([
        { id: 1, date: "2022-04-14", description: "Birthday", category: "Entertainment", amount: "Ksh 10000" },
        { id: 2, date: "2023-01-10", description: "School Fees", category: "School", amount: "Ksh 50000" },
        { id: 3, date: "2021-08-13", description: "Movie", category: "Entertainment", amount: "Ksh 2000" },
        { id: 4, date: "2017-05-15", description: "Pilau", category: "Food", amount: "Ksh 450" },
        { id: 5, date: "2024-01-01", description: "Road Trip", category: "Travelling", amount: "Ksh 10000" },
        { id: 6, date: "2019-09-22", description: "Dentist", category: "Medical", amount: "Ksh 30000" },
    ]);

    // Defining the newTransaction state
    const [newTransaction, setNewTransaction] = useState({
        date: "",
        description: "",
        category: "",
        amount: ""
    });

    // Function to handle changes in the form fields
    const handleInputChange = (event) => {
        const { name, value } = event.target;
        setNewTransaction({
            ...newTransaction,
            [name]: value
        });
    };

    // Function to add a new transaction
    const addTransaction = (event) => {
        event.preventDefault();
        // Ensure all fields are filled
        if (newTransaction.date && newTransaction.description && newTransaction.category && newTransaction.amount) {
            const id = transactions.length + 1;
            const inputTransaction = { id, ...newTransaction };
            setTransactions([...transactions, inputTransaction]);
            // Clear the form
            setNewTransaction({
                date: "",
                description: "",
                category: "",
                amount: ""
            });
        } else {
            alert('Please fill out all fields');
        }
    };

    // Function to handle search and reset
    const handleSearch = (filteredTransactions) => {
        setTransactions(filteredTransactions);
    };

    

    return (
        <div>
            <SearchTransactions 
                transactions={transactions} 
                onSearch={handleSearch} 
                
            />
    
            {/* TransactionForm component */}
            <TransactionForm
                newTransaction={newTransaction}
                handleInputChange={handleInputChange}
                addTransaction={addTransaction}/>
                
            {/* TransactionTable component */}
            <TransactionTable transactions={transactions} />

        </div>
    );
}

export default TransactionHolder;