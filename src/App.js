import React from 'react';
import './App.css'; // Import your CSS file
import TransactionHolder from './components/Base';

function App() {
  const onReset = () => {}; // Define onReset function

  return (
    <div className="App">
      <header className="header">
        <h1>The Royal Bank of Flatiron</h1>
      </header>

      <TransactionHolder onReset={onReset} />

      <footer className="footer">
        &copy; 2024 My Bank
      </footer>
    </div>
  );
}

export default App;