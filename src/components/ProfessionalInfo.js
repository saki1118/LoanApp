import React, { useState } from 'react';
import styled from 'styled-components';
import { useNavigate } from 'react-router-dom';

const ProfessionalInfo = () => {
  const [form, setForm] = useState({
    companyType: '',
    companyName: '',
    contactNo: '',
    designation: '',
    currentExpYear: '',
    currentExpMonth: '',
    totalExpYear: '',
    totalExpMonth: '',
    grossSalary: '',
    netSalary: '',
    selfEmployed: '', // New field for self-employed status
  });

  const [errors, setErrors] = useState({});
  const navigate = useNavigate();

  const handleChange = (e) => {
    setForm({
      ...form,
      [e.target.name]: e.target.value,
    });
  };

  const validateContactNo = (contactNo) => {
    const contactRegex = /^\+?[1-9]\d{1,14}$/;
    return contactRegex.test(contactNo);
  };

  const validateYear = (year) => {
    return year >= 0;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const newErrors = {};

    if (!validateContactNo(form.contactNo)) {
      newErrors.contactNo = 'Invalid contact number. Must be a valid international number.';
    }

    if (!validateYear(form.currentExpYear) || !validateYear(form.totalExpYear)) {
      newErrors.year = 'Years of experience must be a non-negative number.';
    }

    if (Object.keys(newErrors).length > 0) {
      setErrors(newErrors);
    } else {
      alert('Professional Information submitted');
      navigate('/current-loans-assets');
    }
  };

  return (
    <PageContainer>
      <FormContainer onSubmit={handleSubmit}>
        <h2>Professional Information</h2>
        <FormField>
          <label>Company Type</label>
          <input
            type="text"
            name="companyType"
            value={form.companyType}
            onChange={handleChange}
            required
          />
        </FormField>
        <FormField>
          <label>Company Name</label>
          <input
            type="text"
            name="companyName"
            value={form.companyName}
            onChange={handleChange}
            required
          />
        </FormField>
        <FormField>
          <label>Contact No</label>
          <input
            type="text"
            name="contactNo"
            value={form.contactNo}
            onChange={handleChange}
            required
          />
          {errors.contactNo && <ErrorText>{errors.contactNo}</ErrorText>}
        </FormField>
        <FormField>
          <label>Designation</label>
          <input
            type="text"
            name="designation"
            value={form.designation}
            onChange={handleChange}
            required
          />
        </FormField>
        <FormField>
          <label>Current Experience Year</label>
          <input
            type="number"
            name="currentExpYear"
            value={form.currentExpYear}
            onChange={handleChange}
            required
          />
          {errors.year && <ErrorText>{errors.year}</ErrorText>}
        </FormField>
        <FormField>
          <label>Current Experience Month</label>
          <input
            type="number"
            name="currentExpMonth"
            value={form.currentExpMonth}
            onChange={handleChange}
            required
          />
        </FormField>
        <FormField>
          <label>Total Experience Year</label>
          <input
            type="number"
            name="totalExpYear"
            value={form.totalExpYear}
            onChange={handleChange}
            required
          />
          {errors.year && <ErrorText>{errors.year}</ErrorText>}
        </FormField>
        <FormField>
          <label>Total Experience Month</label>
          <input
            type="number"
            name="totalExpMonth"
            value={form.totalExpMonth}
            onChange={handleChange}
            required
          />
        </FormField>
        <FormField>
          <label>Gross Salary</label>
          <input
            type="number"
            name="grossSalary"
            value={form.grossSalary}
            onChange={handleChange}
            required
          />
        </FormField>
        <FormField>
          <label>Net Salary</label>
          <input
            type="number"
            name="netSalary"
            value={form.netSalary}
            onChange={handleChange}
            required
          />
        </FormField>
        <FormField>
          <label>Self-Employed</label>
          <select
            name="selfEmployed"
            value={form.selfEmployed}
            onChange={handleChange}
            required
          >
            <option value="">Select Self-Employment Status</option>
            <option value="yes">Yes</option>
            <option value="no">No</option>
          </select>
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

  input, select {
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

export default ProfessionalInfo;
