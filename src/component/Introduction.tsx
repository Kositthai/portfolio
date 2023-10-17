import styled from 'styled-components';
import SocialMedia from './SocialMedia';

const Container = styled.div`
  margin: auto;

  * {
    font-family: Yeseva;
  }
  div {
    margin-bottom: 4rem;
  }
`;
const Title = styled.h1`
  margin: 2rem 0;
`;

const SubTitle = styled.h2``;

const Introduction = () => {
  return (
    <Container>
      <div>
        <Title>I'm Vipavee Kositthai</Title>
        <SubTitle>Frontend Developer</SubTitle>
      </div>
      <SocialMedia />
    </Container>
  );
};

export default Introduction;
