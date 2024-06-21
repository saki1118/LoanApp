import React, { useState } from 'react';
import styled from 'styled-components';
import { useNavigate } from 'react-router-dom';

const CurrentLoansAssets = () => {
  const [form, setForm] = useState({
    existingEmi: '',
    residentialAssets: '',
    commercialAssets: '',
    luxuryAssets: '',
    bankAssets: '',
  });

  const navigate = useNavigate();

  const handleChange = (e) => {
    setForm({
      ...form,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    alert('Current Loans & Assets submitted');
    navigate('/bank-details');
  };

  return (
    <PageContainer>
      <FormContainer onSubmit={handleSubmit}>
        <h2>Current Loans & Assets</h2>
        <FormField>
          <label>Existing EMI</label>
          <input
            type="number"
            name="existingEmi"
            value={form.existingEmi}
            onChange={handleChange}
            required
          />
        </FormField>
        <FormField>
          <label>Residential Assets Value (in lakh)</label>
          <input
            type="number"
            name="residentialAssets"
            value={form.residentialAssets}
            onChange={handleChange}
            min="1"
            max="100"
            step="1"
            required
          />
        </FormField>
        <FormField>
          <label>Commercial Assets Value (in lakh)</label>
          <input
            type="number"
            name="commercialAssets"
            value={form.commercialAssets}
            onChange={handleChange}
            min="1"
            max="100"
            step="1"
            required
          />
        </FormField>
        <FormField>
          <label>Luxury Assets Value (in lakh)</label>
          <input
            type="number"
            name="luxuryAssets"
            value={form.luxuryAssets}
            onChange={handleChange}
            min="1"
            max="100"
            step="1"
            required
          />
        </FormField>
        <FormField>
          <label>Bank Asset Value (in lakh)</label>
          <input
            type="number"
            name="bankAssets"
            value={form.bankAssets}
            onChange={handleChange}
            min="1"
            max="100"
            step="1"
            required
          />
        </FormField>
        <ButtonContainer>
          <SubmitButton type="submit">Next</SubmitButton>
        </ButtonContainer>
      </FormContainer>
    </PageContainer>
  );
};

const PageContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  min-height: 100vh;
  background: #ddead1; /* Same background color as previous pages */
  padding: 20px; /* Padding to avoid content sticking to the edges */
`;

const FormContainer = styled.form`
  max-width: 600px;
  width: 100%;
  padding: 40px;
  background: #ffffff;
  border-radius: 10px;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
  text-align: center;

  h2 {
    margin-bottom: 20px;
    color: #333;
    font-size: 24px;
  }
`;

const FormField = styled.div`
  margin-bottom: 20px;
  text-align: left;

  label {
    display: block;
    margin-bottom: 8px;
    font-weight: bold;
    color: #333;
  }

  input {
    width: 100%;
    padding: 10px;
    border: 1px solid #ccc;
    border-radius: 5px;
    font-size: 16px;
  }
`;

const ButtonContainer = styled.div`
  display: flex;
  justify-content: center;
  margin-top: 20px;
`;

const SubmitButton = styled.button`
  background-color: #75975e;
  color: white;
  padding: 10px 20px;
  border: none;
  border-radius: 5px;
  cursor: pointer;
  font-size: 16px;
  transition: background 0.3s;

  &:hover {
    background-color: #0056b3;
  }
`;

export default CurrentLoansAssets;
