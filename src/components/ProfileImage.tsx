import React from 'react'
import styled from 'styled-components'
import programmingImage from '../assets/images/programmer-woman.png'

const Container = styled.div`
  margin-left: 3rem;
`

const Image = styled.img`
  width: 35rem;
  height: 35rem;
`

const ProfileImage: React.FC = () => {
  return (
    <Container>
      <Image src={programmingImage} alt="programmingImage" />
    </Container>
  )
}

export default ProfileImage
