import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';

const ApplyLoan = () => {
  return (
    <PageContainer>
      <Container>
        <h2>Apply for Loan</h2>
        <ButtonGroup>
          <StyledLink to="/personal-info">Personal Information</StyledLink>
          <StyledLink to="/professional-info">Professional Information</StyledLink>
          <StyledLink to="/current-loans-assets">Current Loans & Assets</StyledLink>
          <StyledLink to="/bank-details">Bank Details</StyledLink>
          <StyledLink to="/kyc-documents">KYC Documents</StyledLink>
          <StyledLink to="/loan-amount">Loan Amount</StyledLink>
          <StyledLink to="/loan-agreement">Loan Agreement</StyledLink>
        </ButtonGroup>
      </Container>
    </PageContainer>
  );
};

const PageContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
  background: #ddead1; /* Same background color as Login component */
`;

const Container = styled.div`
  max-width: 600px;
  width: 100%;
  padding: 20px;
  background: white;
  border-radius: 8px;
  box-shadow: 0 0 15px rgba(0, 0, 0, 0.1);
  text-align: center;
`;

const ButtonGroup = styled.div`
  display: flex;
  flex-direction: column;
  gap: 15px;
`;

const StyledLink = styled(Link)`
  background: #95bb72;
  color: white;
  padding: 12px;
  border-radius: 5px;
  text-decoration: none;
  text-align: center;
  transition: background 0.3s ease;
  &:hover {
    background: #ddead1;
  }
`;

export default ApplyLoan;
