import React from 'react';
import styled from 'styled-components';

const ExistingLoan = () => {
  return (
    <Container>
      <h2>Existing Loans</h2>
      <p>List of existing loan applications with status "N".</p>
      {/* Add logic to fetch and display existing loan applications */}
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

export default ExistingLoan;
