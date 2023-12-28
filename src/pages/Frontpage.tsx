import styled from 'styled-components'
import Introduction from '../components/Introduction'
import ProfileImage from '../components/ProfileImage'
import Navbar from '../components/Navbar'

const Container = styled.div``

const Content = styled.div`
  display: flex;
  margin: 5rem 3rem;

  & > * {
    flex: 1 1 0px;
  }

  @media (max-width: 1279px) {
    margin: 5rem 1rem 5rem 1rem;
  }

  @media (max-width: 768px) {
    display: flex;
    flex-direction: column;
    margin: 3rem 0;
    text-align: center;
  }
`

const Frontpage: React.FC = () => {
  return (
    <Container>
      <Navbar />
      <Content>
        <Introduction />
        <ProfileImage />
      </Content>
    </Container>
  )
}

export default Frontpage
