import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

const LoanAmount = () => {
  const [amount, setAmount] = useState(50000);
  const [period, setPeriod] = useState(12);
  const [interestRate, setInterestRate] = useState(12); // Default annual interest rate of 12%
  const [emi, setEmi] = useState(0);
  const [showModal, setShowModal] = useState(false);
  const navigate = useNavigate();

  // Calculate EMI whenever amount, period, or interest rate changes
  useEffect(() => {
    const calculateEmi = () => {
      const principal = parseFloat(amount);
      const months = parseFloat(period);
      const annualInterestRate = parseFloat(interestRate);

      if (principal && months && annualInterestRate) {
        const monthlyInterestRate = annualInterestRate / 12 / 100;
        const emiValue =
          (principal * monthlyInterestRate * Math.pow(1 + monthlyInterestRate, months)) /
          (Math.pow(1 + monthlyInterestRate, months) - 1);

        setEmi(emiValue.toFixed(2));
      }
    };

    calculateEmi();
  }, [amount, period, interestRate]);

  const handleAmountChange = (e) => {
    setAmount(parseInt(e.target.value, 10));
  };

  const handlePeriodChange = (e) => {
    setPeriod(parseInt(e.target.value, 10));
  };

  const handleInterestRateChange = (e) => {
    setInterestRate(parseFloat(e.target.value));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setShowModal(true);
  };

  const handleModalClose = () => {
    setShowModal(false);
    navigate('/loan-agreement');
  };

  return (
    <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', minHeight: '100vh', background: '#ddead1' }}>
      <form style={{ maxWidth: '400px', width: '100%', padding: '20px', background: 'white', borderRadius: '8px', boxShadow: '0 0 10px rgba(0, 0, 0, 0.1)', display: 'flex', flexDirection: 'column', alignItems: 'center' }} onSubmit={handleSubmit}>
        <h2>Loan Amount</h2>
        <input
          type="range"
          min="10000"
          max="500000"
          step="1000"
          value={amount}
          onChange={handleAmountChange}
        />
        <span style={{ fontSize: '16px' }}>Amount: ₹{amount}</span>
        <div style={{ display: 'flex', alignItems: 'center', marginBottom: '15px' }}>
          <label style={{ marginRight: '10px', fontWeight: 'bold' }}>Period:</label>
          <input
            type="number"
            min="6"
            max="60"
            value={period}
            onChange={handlePeriodChange}
          />
          <span style={{ fontSize: '16px', marginLeft: '5px' }}>months</span>
        </div>
        <div style={{ display: 'flex', alignItems: 'center', marginBottom: '15px' }}>
          <label style={{ marginRight: '10px', fontWeight: 'bold' }}>Interest Rate (% per annum):</label>
          <input
            type="number"
            min="1"
            max="36"
            step="0.01"
            value={interestRate}
            onChange={handleInterestRateChange}
          />
        </div>
        <div style={{ marginTop: '10px', fontSize: '18px' }}>EMI: ₹{emi}</div>
        <button style={{ backgroundColor: '#75975e', color: 'white', padding: '10px 20px', border: 'none', borderRadius: '4px', cursor: 'pointer', fontSize: '16px', marginTop: '10px', transition: 'background 0.3s' }} type="submit">Next</button>
      </form>
      {showModal && (
        <div style={{ position: 'fixed', top: '0', left: '0', right: '0', bottom: '0', background: 'rgba(0, 0, 0, 0.5)', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
          <div style={{ background: 'white', padding: '20px', borderRadius: '8px', boxShadow: '0 0 10px rgba(0, 0, 0, 0.1)', textAlign: 'center' }}>
            <h2>Loan Details</h2>
            <p>Amount: ₹{amount}</p>
            <p>Period: {period} months</p>
            <p>Interest Rate: {interestRate}% per annum</p>
            <p>EMI: ₹{emi}</p>
            <button style={{ padding: '10px 20px', backgroundColor: '#75975e', color: 'white', border: 'none', borderRadius: '4px', cursor: 'pointer', fontSize: '16px' }} onClick={handleModalClose}>Close</button>
          </div>
        </div>
      )}
    </div>
  );
};

export default LoanAmount;
