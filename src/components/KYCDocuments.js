import React, { useState } from 'react';
import styled from 'styled-components';
import { useNavigate } from 'react-router-dom';

const KYCDocuments = () => {
  const [form, setForm] = useState({
    aadhar: null,
    pan: null,
    selfie: null,
  });

  const navigate = useNavigate();

  const handleFileChange = (e) => {
    setForm({
      ...form,
      [e.target.name]: e.target.files[0],
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (form.aadhar && form.pan && form.selfie) {
      alert('KYC Documents submitted');
      navigate('/loan-amount');
    } else {
      alert('Please upload all required documents.');
    }
  };

  return (
    <PageContainer>
      <FormContainer onSubmit={handleSubmit}>
        <h2>KYC Documents</h2>
        <FormField>
          <label>Upload Aadhaar (PDF or Image)</label>
          <input
            type="file"
            name="aadhar"
            onChange={handleFileChange}
            accept=".jpg,.jpeg,.png,.pdf"
            required
          />
        </FormField>
        <FormField>
          <label>Upload PAN (PDF or Image)</label>
          <input
            type="file"
            name="pan"
            onChange={handleFileChange}
            accept=".jpg,.jpeg,.png,.pdf"
            required
          />
        </FormField>
        <FormField>
          <label>Upload Selfie (Image)</label>
          <input
            type="file"
            name="selfie"
            onChange={handleFileChange}
            accept=".jpg,.jpeg,.png"
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

  input[type="file"] {
    margin-top: 5px;
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

export default KYCDocuments;
