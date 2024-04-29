import React, { useState, useEffect } from "react";

const SearchTransactions = ({ transactions, onSearch }) => {
  const [searchItem, setSearchItem] = useState('');

  const handleChange = (event) => {
    const { value } = event.target;
    setSearchItem(value);

    const filteredTransactions = transactions.filter(transaction =>
      transaction.description.toLowerCase().includes(value.toLowerCase())
    );
    onSearch(filteredTransactions);
  };

  const handleReset = () => {
    setSearchItem('');
  };

  useEffect(() => {
    if (!searchItem) {
      handleReset();
    }
  }, [searchItem]);

  return (
    <div>
      <input
        type="text"
        name="search"
        value={searchItem}
        onChange={handleChange}
        className="search-input"
        placeholder="Search your Recent Transactions"
      />
    </div>
  );
};

export default SearchTransactions;