function TransactionForm({ newTransaction, handleInputChange, addTransaction }) {
    return (
        <form onSubmit={addTransaction}>
            <input
                type="date"
                name="date"
                value={newTransaction.date}
                onChange={handleInputChange}
                placeholder="Date"
                required
            />
            <input
                type="text"
                name="description"
                value={newTransaction.description}
                onChange={handleInputChange}
                placeholder="Description"
                required
            />
            <input
                type="text"
                name="category"
                value={newTransaction.category}
                onChange={handleInputChange}
                placeholder="Category"
                required
            />
            <input
                type="number"
                name="amount"
                value={newTransaction.amount}
                onChange={handleInputChange}
                placeholder="Amount"
                required
            />
            <button type="submit">Add Transaction</button>
        </form>
    );
}

export default TransactionForm