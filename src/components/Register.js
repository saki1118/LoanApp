import React, { useState } from 'react';
import styled from 'styled-components';
import { useNavigate } from 'react-router-dom';

const Register = () => {
  const [form, setForm] = useState({
    username: '',
    password: '',
    confirmPassword: '',
    email: '',
    phoneNumber: '',
    otp: '',
  });

  const [otpGenerated, setOtpGenerated] = useState(false);
  const [generatedOtp, setGeneratedOtp] = useState('');

  const navigate = useNavigate();

  const handleChange = (e) => {
    setForm({
      ...form,
      [e.target.name]: e.target.value,
    });
  };

  const handleGenerateOTP = (e) => {
    e.preventDefault();
    // Generate OTP
    const newOtp = '1234'; // Simulated OTP for demo purposes
    setGeneratedOtp(newOtp);
    setOtpGenerated(true);
  };

  const handleVerifyOTP = (e) => {
    e.preventDefault();
    // Verify OTP
    if (form.otp === generatedOtp) {
      alert('OTP Verified. Proceed with Registration.');
    } else {
      alert('Invalid OTP. Please try again.');
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle registration logic
    alert('Registration Successful!');
    navigate('/');
  };

  return (
    <PageContainer>
      <FormContainer onSubmit={handleSubmit}>
        <h2>Register</h2>
        <FormField>
          <label>Username</label>
          <input
            type="text"
            name="username"
            value={form.username}
            onChange={handleChange}
            required
          />
        </FormField>
        <FormField>
          <label>Password</label>
          <input
            type="password"
            name="password"
            value={form.password}
            onChange={handleChange}
            required
          />
        </FormField>
        <FormField>
          <label>Confirm Password</label>
          <input
            type="password"
            name="confirmPassword"
            value={form.confirmPassword}
            onChange={handleChange}
            required
          />
        </FormField>
        <FormField>
          <label>Email</label>
          <input
            type="email"
            name="email"
            value={form.email}
            onChange={handleChange}
            required
          />
        </FormField>
        <FormField>
          <label>Phone Number</label>
          <input
            type="tel"
            name="phoneNumber"
            value={form.phoneNumber}
            onChange={handleChange}
            required
          />
        </FormField>
        {!otpGenerated && (
          <ButtonContainer>
            <VerifyButton type="button" onClick={handleGenerateOTP}>
              Generate OTP
            </VerifyButton>
          </ButtonContainer>
        )}
        {otpGenerated && (
          <>
            <FormField>
              <label>Enter OTP</label>
              <input
                type="text"
                name="otp"
                value={form.otp}
                onChange={handleChange}
                required
              />
            </FormField>
            <ButtonContainer>
              <VerifyButton type="button" onClick={handleVerifyOTP}>
                Verify OTP
              </VerifyButton>
            </ButtonContainer>
          </>
        )}
        {form.otp && (
          <ButtonContainer>
            <RegisterButton type="submit" onClick={handleSubmit}>
              Register
            </RegisterButton>
          </ButtonContainer>
        )}
      </FormContainer>
    </PageContainer>
  );
};

const PageContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
  background: #ddead1; /* Same background color as Login component */
  margin: 0;
  padding: 0;
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

const VerifyButton = styled.button`
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

const RegisterButton = styled.button`
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

export default Register;
