import React, { useState } from 'react';
import styled from 'styled-components';
import { useNavigate } from 'react-router-dom';

const PersonalInfo = () => {
  const [form, setForm] = useState({
    firstName: '',
    lastName: '',
    aadharNo: '',
    panNo: '',
    gender: '',
    dob: '',
    address1: '',
    address2: '',
    address3: '',
    numberOfDependents: '',
    education: '',
  });

  const [errors, setErrors] = useState({});
  const navigate = useNavigate();

  const handleChange = (e) => {
    setForm({
      ...form,
      [e.target.name]: e.target.value,
    });
  };

  const validatePan = (panNo) => {
    const panRegex = /^[A-Z]{5}[0-9]{4}[A-Z]{1}$/;
    return panRegex.test(panNo);
  };

  const validateAadhar = (aadharNo) => {
    const aadharRegex = /^[2-9]{1}[0-9]{11}$/;
    return aadharRegex.test(aadharNo);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const newErrors = {};

    if (!validatePan(form.panNo)) {
      newErrors.panNo = 'Invalid PAN number. Format: ABCDE1234F';
    }

    if (!validateAadhar(form.aadharNo)) {
      newErrors.aadharNo = 'Invalid Aadhar number. Format: 12 digits starting from 2-9';
    }

    if (Object.keys(newErrors).length > 0) {
      setErrors(newErrors);
    } else {
      alert('Personal Information submitted');
      navigate('/professional-info');
    }
  };

  return (
    <PageContainer>
      <FormContainer onSubmit={handleSubmit}>
        <h2>Personal Information</h2>
        <FormField>
          <label>First Name</label>
          <input
            type="text"
            name="firstName"
            value={form.firstName}
            onChange={handleChange}
            required
          />
        </FormField>
        <FormField>
          <label>Last Name</label>
          <input
            type="text"
            name="lastName"
            value={form.lastName}
            onChange={handleChange}
            required
          />
        </FormField>
        <FormField>
          <label>Aadhar No</label>
          <input
            type="text"
            name="aadharNo"
            value={form.aadharNo}
            onChange={handleChange}
            required
          />
          {errors.aadharNo && <ErrorText>{errors.aadharNo}</ErrorText>}
        </FormField>
        <FormField>
          <label>PAN No</label>
          <input
            type="text"
            name="panNo"
            value={form.panNo}
            onChange={handleChange}
            required
          />
          {errors.panNo && <ErrorText>{errors.panNo}</ErrorText>}
        </FormField>
        <FormField>
          <label>Gender</label>
          <select name="gender" value={form.gender} onChange={handleChange} required>
            <option value="">Select Gender</option>
            <option value="male">Male</option>
            <option value="female">Female</option>
            <option value="other">Other</option>
          </select>
        </FormField>
        <FormField>
          <label>Date of Birth</label>
          <input
            type="date"
            name="dob"
            value={form.dob}
            onChange={handleChange}
            required
          />
        </FormField>
        <FormField>
          <label>Address 1</label>
          <input
            type="text"
            name="address1"
            value={form.address1}
            onChange={handleChange}
            required
          />
        </FormField>
        <FormField>
          <label>Address 2</label>
          <input
            type="text"
            name="address2"
            value={form.address2}
            onChange={handleChange}
          />
        </FormField>
        <FormField>
          <label>Address 3</label>
          <input
            type="text"
            name="address3"
            value={form.address3}
            onChange={handleChange}
          />
        </FormField>
        <FormField>
          <label>Number of Dependents</label>
          <input
            type="number"
            name="numberOfDependents"
            value={form.numberOfDependents}
            onChange={handleChange}
            required
          />
        </FormField>
        <FormField>
          <label>Education</label>
          <select name="education" value={form.education} onChange={handleChange} required>
            <option value="">Select Graduate or not</option>
            <option value="high-school">Graduate</option>
            <option value="diploma">Not Graduate</option>
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

export default PersonalInfo;
