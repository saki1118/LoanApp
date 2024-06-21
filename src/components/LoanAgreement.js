import React, { useState } from 'react';
import styled from 'styled-components';
import { useNavigate } from 'react-router-dom';

const LoanAgreement = () => {
  const [applicationId, setApplicationId] = useState('');
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    const checkbox = e.target.elements['termsCheckbox'];
    if (checkbox.checked) {
      alert('Loan Agreement accepted. Generating Application ID...');
      const newApplicationId = generateApplicationId();
      setApplicationId(newApplicationId);
      // Navigate to thank-you page with applicationId as URL parameter
      navigate(`/thank-you/${newApplicationId}`);
    } else {
      alert('Please agree to the terms and conditions.');
    }
  };

  const generateApplicationId = () => {
    const timestamp = Date.now().toString(36);
    const randomChars = Math.random().toString(36).substr(2, 5);
    return `${timestamp}-${randomChars}`.toUpperCase();
  };

  return (
    <PageContainer>
      <FormContainer onSubmit={handleSubmit}>
        <h2>Loan Agreement</h2>
        <AgreementContainer>
          <p>Please review the loan agreement below:</p>
          <AgreementText>
            <h3>Loan Agreement Terms and Conditions</h3>
            
            <h4>1. Loan Amount and Disbursement</h4>
            <p>The Lender agrees to loan the Borrower a principal sum, which shall be disbursed to the Borrower's designated bank account upon execution of this Agreement.</p>
            
            <h4>2. Interest Rate</h4>
            <p>The loan will bear interest at a rate agreed upon by both parties, calculated on the outstanding principal balance.</p>
            
            <h4>3. Repayment Terms</h4>
            <p>The Borrower agrees to repay the loan in equal monthly installments over a period agreed upon by both parties, commencing on the date specified in the repayment schedule.</p>
            
            <h4>4. Prepayment</h4>
            <p>The Borrower may prepay the loan in whole or in part at any time without penalty. Any prepayment will be applied to the outstanding principal balance.</p>
            
            <h4>5. Default</h4>
            <p>If the Borrower fails to make any payment when due, the Lender may declare the entire unpaid principal balance and accrued interest immediately due and payable. The Borrower agrees to pay all costs of collection, including reasonable attorney's fees, in the event of default.</p>
            
            <h4>6. Representations and Warranties</h4>
            <p>The Borrower represents and warrants that all information provided to the Lender in connection with this loan is true, accurate, and complete. The Borrower agrees to notify the Lender of any material changes to such information.</p>
            
            <h4>7. Governing Law</h4>
            <p>This Agreement shall be governed by and construed in accordance with the laws of the jurisdiction in which the Lender is located, without regard to its conflict of laws principles.</p>
            
            <h4>8. Miscellaneous</h4>
            <p>This Agreement constitutes the entire agreement between the parties and may not be amended or modified except in writing signed by both parties. If any provision of this Agreement is found to be invalid or unenforceable, the remaining provisions shall continue in full force and effect.</p>
          </AgreementText>
        </AgreementContainer>
        <FormField>
          <label>
            <input id="termsCheckbox" type="checkbox" required />
            <CheckboxText>I agree to the terms and conditions</CheckboxText>
          </label>
        </FormField>
        <ButtonContainer>
          <SubmitButton type="submit">Submit Application</SubmitButton>
        </ButtonContainer>
        {applicationId && (
          <ApplicationIdContainer>
            <h3>Your Application ID:</h3>
            <p>{applicationId}</p>
          </ApplicationIdContainer>
        )}
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
  max-width: 800px;
  width: 100%;
  padding: 30px;
  background: #f4f4f9;
  border-radius: 8px;
  box-shadow: 0 0 15px rgba(0, 0, 0, 0.1);
  font-family: 'Arial', sans-serif;
  color: #333;
`;

const AgreementContainer = styled.div`
  margin-bottom: 20px;
`;

const AgreementText = styled.div`
  background: #ffffff;
  border: 1px solid #ccc;
  padding: 15px;
  border-radius: 4px;
  max-height: 400px;
  overflow-y: auto;

  h3, h4 {
    margin-top: 0;
    color: #007bff;
  }

  p {
    margin-bottom: 10px;
    line-height: 1.5;
  }
`;

const FormField = styled.div`
  margin-bottom: 20px;

  label {
    display: flex;
    align-items: center;
    font-size: 16px;
  }

  input[type="checkbox"] {
    margin-right: 10px;
  }
`;

const CheckboxText = styled.span`
  flex: 1;
`;

const ButtonContainer = styled.div`
  display: flex;
  justify-content: center; /* Center align horizontally */
  margin-top: 20px; /* Add some top margin */
`;

const SubmitButton = styled.button`
  background-color: #75975e;
  color: white;
  padding: 10px 20px;
  border: none;
  border-radius: 4px;
  cursor: pointer;
  font-size: 16px;
  transition: background-color 0.3s ease;

  &:hover {
    background-color: #0056b3;
  }
`;

const ApplicationIdContainer = styled.div`
  margin-top: 30px;
  padding: 20px;
  background: #fff;
  border: 1px solid #ccc;
  border-radius: 8px;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);

  h3 {
    margin-bottom: 10px;
  }

  p {
    font-size: 18px;
    font-weight: bold;
    color: #007bff;
    margin-bottom: 20px;
  }
`;

export default LoanAgreement;
