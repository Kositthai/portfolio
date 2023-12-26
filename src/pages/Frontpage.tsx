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

  @media (max-width: 768px) {
    display: block;
    margin: 3rem 0;
    text-align: center;
  }
`

const Frontpage: React.FC = () => {
  return (
    <Container>
      <Navbar />
      <Content>
        <ProfileImage />
        <Introduction />
      </Content>
    </Container>
  )
}

export default Frontpage
