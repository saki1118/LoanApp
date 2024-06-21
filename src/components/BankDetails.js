import React, { useState } from 'react';
import styled from 'styled-components';
import { useNavigate } from 'react-router-dom';

const BankDetails = () => {
  const [form, setForm] = useState({
    bankName: '',
    branchName: '',
    ifsc: '',
    accountNo: '',
    accountHolderName: '',
    cbilScore: '', // New field for CBIL score
  });

  const [errors, setErrors] = useState({});
  const navigate = useNavigate();

  const handleChange = (e) => {
    setForm({
      ...form,
      [e.target.name]: e.target.value,
    });
  };

  const validateAccountNo = (accountNo) => {
    const accountRegex = /^[0-9]{9,18}$/; // Account number should be between 9 and 18 digits
    return accountRegex.test(accountNo);
  };

  const validateIFSC = (ifsc) => {
    const ifscRegex = /^[A-Z]{4}0[A-Z0-9]{6}$/; // IFSC should follow the pattern
    return ifscRegex.test(ifsc);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const newErrors = {};

    if (!validateAccountNo(form.accountNo)) {
      newErrors.accountNo = 'Invalid account number. It must be between 9 and 18 digits.';
    }

    if (!validateIFSC(form.ifsc)) {
      newErrors.ifsc = 'Invalid IFSC code. It must follow the pattern: ABCD0123456.';
    }

    if (Object.keys(newErrors).length > 0) {
      setErrors(newErrors);
    } else {
      alert('Bank Details submitted');
      navigate('/kyc-documents');
    }
  };

  return (
    <PageContainer>
      <FormContainer onSubmit={handleSubmit}>
        <h2>Bank Details</h2>
        <FormField>
          <label>Bank Name</label>
          <input
            type="text"
            name="bankName"
            value={form.bankName}
            onChange={handleChange}
            required
          />
        </FormField>
        <FormField>
          <label>Branch Name</label>
          <input
            type="text"
            name="branchName"
            value={form.branchName}
            onChange={handleChange}
            required
          />
        </FormField>
        <FormField>
          <label>IFSC</label>
          <input
            type="text"
            name="ifsc"
            value={form.ifsc}
            onChange={handleChange}
            required
          />
          {errors.ifsc && <ErrorText>{errors.ifsc}</ErrorText>}
        </FormField>
        <FormField>
          <label>Account No</label>
          <input
            type="text"
            name="accountNo"
            value={form.accountNo}
            onChange={handleChange}
            required
          />
          {errors.accountNo && <ErrorText>{errors.accountNo}</ErrorText>}
        </FormField>
        <FormField>
          <label>Account Holder Name</label>
          <input
            type="text"
            name="accountHolderName"
            value={form.accountHolderName}
            onChange={handleChange}
            required
          />
        </FormField>
        <FormField>
          <label>CBIL Score</label>
          <input
            type="number"
            name="cbilScore"
            value={form.cbilScore}
            onChange={handleChange}
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
    background-color: #ddead1;
  }
`;

const ErrorText = styled.div`
  color: red;
  font-size: 14px;
  margin-top: 5px;
`;

export default BankDetails;
