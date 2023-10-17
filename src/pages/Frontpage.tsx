import styled from 'styled-components';
import Introduction from '../component/Introduction';
import ProfileImage from '../component/ProfileImage';
import Navbar from '../component/Navbar';

const Container = styled.div`
  padding-top: 3rem;
`;

const Content = styled.div`
  display: flex;
  margin: 5rem 3rem;
`;

const Frontpage: React.FC = () => {
  return (
    <Container>
      <Navbar />
      <Content>
        <ProfileImage />
        <Introduction />
      </Content>
    </Container>
  );
};

export default Frontpage;
