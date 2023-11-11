import React from 'react'
import styled from '@emotion/styled'
import {LiaCertificateSolid} from 'react-icons/lia'
import hackerRank from '../assets/images/hackerrank_logo.png'
import jira from '../assets/images/jira.png'
import umbraco from '../assets/images/umbracoLogo.png'

const Container = styled.div`
  font-family: Barlow;
  margin-bottom: 3rem;
  display: flex;
`

const StyledCertificate = styled(LiaCertificateSolid)`
  font-size: 3.5rem;
  margin-left: 3rem;
`

const CertificateItem = styled.div`
  width: 26.5%;
  display: flex;
  justify-content: center;
  align-items: center;
  margin-left: 2rem;
  /* border: 1px rgb(55, 52, 47) solid;
  border-radius: 5px;
  background-color: rgba(55, 52, 47, 0.1); */
  box-shadow: 0px 2px 22px -3px rgba(158, 158, 158, 1);
  -webkit-box-shadow: 0px 2px 22px -3px rgba(158, 158, 158, 1);
  -moz-box-shadow: 0px 2px 22px -3px rgba(158, 158, 158, 1);
`

const CertificateLink = styled.a`
  display: grid;
  grid-template-columns: 1fr 2fr;
  text-decoration: none;
`

const Logo = styled.img`
  margin: auto auto;
`

const Detail = styled.p`
  margin: auto auto;
  font-weight: 700;
  color: #37342f;
`
const Cerificate: React.FC = () => {
  return (
    <Container>
      <StyledCertificate />

      <CertificateItem>
        <CertificateLink href="https://imgur.com/a/65Cpu64" target="_blank">
          <Logo src={umbraco} alt="" style={{width: '60%'}} />
          <Detail>
            <p>Umbraco | Aug 2023</p> Umbraco Professional
          </Detail>
        </CertificateLink>
      </CertificateItem>

      <CertificateItem>
        <CertificateLink
          href="https://university.atlassian.com/student/award/eNRu6njEhPTuPzapbxoT88Uv"
          target="_blank"
        >
          <Logo src={jira} alt="" style={{width: '20%'}} />
          <Detail>
            <p>Atlassian | July 2023</p>Jira Fundamentals Badget
          </Detail>
        </CertificateLink>
      </CertificateItem>

      <CertificateItem>
        <CertificateLink
          href="https://www.hackerrank.com/certificates/0978b834a191"
          target="_blank"
        >
          <Logo src={hackerRank} alt="" style={{width: '70%'}} />
          <Detail>
            <p>HackerRank | May 2023</p>React
          </Detail>
        </CertificateLink>
      </CertificateItem>
    </Container>
  )
}

export default Cerificate
