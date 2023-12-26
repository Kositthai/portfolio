import React from 'react'
import styled from 'styled-components'
import programmingImage from '../assets/images/programmer-woman.png'

const Container = styled.div`
  margin-left: 3rem;
  width: 100%;

  @media (max-width: 768px) {
    margin: 0;
  }
`

const Image = styled.img`
  width: 35rem;
  height: 35rem;

  @media (max-width: 768px) {
    width: 70%;
    height: auto;
  }
`

const ProfileImage: React.FC = () => {
  return (
    <Container>
      <Image src={programmingImage} alt="programmingImage" />
    </Container>
  )
}

export default ProfileImage
