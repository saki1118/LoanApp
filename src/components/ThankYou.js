import React from 'react';
import styled from 'styled-components';
import { useParams } from 'react-router-dom';

const ThankYou = () => {
  const { applicationId } = useParams();

  return (
    <PageContainer>
      <ContentWrapper>
        <Header>Thank You!</Header>
        <Message>Your loan application has been successfully submitted.</Message>
        <ApplicationID>
          Application ID: <strong>{applicationId}</strong>
        </ApplicationID>
      </ContentWrapper>
    </PageContainer>
  );
};

const PageContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh; /* Full viewport height */
  background: #ddead1; /* Light blue background */
`;

const ContentWrapper = styled.div`
  max-width: 600px;
  width: 100%;
  padding: 40px;
  background: #ffffff; /* White background */
  border-radius: 10px;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1); /* Subtle shadow */
  text-align: center;
`;

const Header = styled.h2`
  color: #75975e; /* Blue header */
  margin-bottom: 20px;
`;

const Message = styled.p`
  font-size: 18px;
  line-height: 1.6;
  margin-bottom: 20px;
  color: #333; /* Dark gray message text */
`;

const ApplicationID = styled.p`
  font-size: 16px;
`;

export default ThankYou;
