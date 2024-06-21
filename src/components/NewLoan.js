import React from 'react';
import styled from 'styled-components';

const NewLoan = () => {
  return (
    <Container>
      <h2>New Loan Application</h2>
      <p>Fill out the form below to apply for a new loan.</p>
      {/* Add form fields and logic for new loan application */}
    </Container>
  );
};

const Container = styled.div`
  max-width: 600px;
  margin: auto;
  padding: 20px;
  background: #f9f9f9;
  border-radius: 8px;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
`;

export default NewLoan;
