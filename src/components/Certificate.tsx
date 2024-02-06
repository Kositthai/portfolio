import React from 'react';
import styled from 'styled-components';
import { LiaCertificateSolid } from 'react-icons/lia';
import hackerRank from '../assets/images/hackerrank_logo.png';
import jira from '../assets/images/horizontal-logo-gradient-blue-atlassian.png';
import ux from '../assets/images/accenture-7.png';

const Container = styled.div`
  font-family: Barlow;
  margin-bottom: 3rem;
  margin-top: 3rem;
  display: flex;

  @media (max-width: 1279px) {
    display: block;
  }
`;

const StyledCertificate = styled(LiaCertificateSolid)`
  font-size: 3.5rem;
  margin: auto 3rem;

  @media (max-width: 1279px) {
    display: none;
  }
`;

const Title = styled.h2`
  display: none;
  font-size: 1rem;

  @media (max-width: 1279px) {
    display: block;
    margin: 1rem;
  }
`;

const CertificateContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  flex-basis: 100%;
  margin: 0 2rem;

  @media (max-width: 1279px) {
    margin: 0;
  }
`;

const CertificateItem = styled.div`
  max-width: 25rem;
  display: flex;
  justify-content: center;
  align-items: center;
  margin: 0 1rem;
  box-shadow: 0px 2px 22px -3px ${({ theme }) => theme.gray};
  -webkit-box-shadow: 0px 2px 22px -3px ${({ theme }) => theme.gray};
  -moz-box-shadow: 0px 2px 22px -3px ${({ theme }) => theme.gray};

  @media (max-width: 1279px) {
    margin: 0rem;
    box-shadow: none;
    border-right: 1px solid ${({ theme }) => theme.lightGray};
  }
`;

const CertificateLink = styled.a`
  display: grid;
  grid-template-columns: 1fr 2fr;
  text-decoration: none;

  @media (max-width: 1279px) {
    display: flex;
    flex-direction: column;
    flex: 1 1 0px;
    text-align: center;
    height: 100%;
    margin: 0rem;
  }
`;

const Logo = styled.img`
  margin: auto auto;
  max-width: 60%;
`;

const Detail = styled.div`
  margin: 1rem;
  font-weight: 700;
  color: ${({ theme }) => theme.primary};

  @media (max-width: 1280px) {
    font-size: 0.8rem;
    margin: 1rem;
  }

  @media (max-width: 1279px) {
    font-size: 0.7rem;
    margin-top: auto;
    text-align: center;
  }
`;

const StyledDetail = styled.p`
  text-align: center;
`;

const Cerificate: React.FC = () => {
  return (
    <Container>
      <Title>Certificates</Title>
      <StyledCertificate />

      <CertificateContainer>
        <CertificateItem>
          <CertificateLink href="https://imgur.com/bANO1Ll" target="_blank">
            <Logo src={ux} alt="" />
            <Detail>
              <StyledDetail>Accenture | Feb 2024</StyledDetail>
              <StyledDetail>Digital skills: User Experience</StyledDetail>
            </Detail>
          </CertificateLink>
        </CertificateItem>

        <CertificateItem>
          <CertificateLink
            href="https://university.atlassian.com/student/award/eNRu6njEhPTuPzapbxoT88Uv"
            target="_blank"
          >
            <Logo src={jira} alt="" />
            <Detail>
              <StyledDetail>Atlassian | July 2023</StyledDetail>
              <StyledDetail>Jira Fundamentals</StyledDetail>
            </Detail>
          </CertificateLink>
        </CertificateItem>

        <CertificateItem>
          <CertificateLink
            href="https://www.hackerrank.com/certificates/0978b834a191"
            target="_blank"
          >
            <Logo src={hackerRank} alt="" />
            <Detail>
              <StyledDetail>HackerRank | May 2023</StyledDetail>
              <StyledDetail>React</StyledDetail>
            </Detail>
          </CertificateLink>
        </CertificateItem>
      </CertificateContainer>
    </Container>
  );
};

export default Cerificate;
