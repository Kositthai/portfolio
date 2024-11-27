import styled from 'styled-components';

const Container = styled.div`
  margin: 2rem 2rem;
`;

const StyledCircle = styled.li`
  width: 2em;
  height: 2em;
  text-align: center;
  line-height: 2em;
  border-radius: 1em;
  background: ${({ theme }) => theme.orange};
  margin: 0 6rem;
  display: inline-block;
  color: ${({ theme }) => theme.white};
  position: relative;

  &::before {
    content: '';
    position: absolute;
    top: 50%;
    background: ${({ theme }) => theme.primary};
    width: 12rem;
    height: 0.15rem;
    left: 100%;
    z-index: -1;
  }

  &:last-child {
    &::before {
      display: none;
    }
  }

  @media (max-width: 900px) {
    margin: 0 5rem;

    &::before {
      width: 10rem;
    }
  }

  @media (max-width: 800px) {
    margin: 0 4.5rem;

    &::before {
      width: 9rem;
    }
  }

  @media (max-width: 700px) {
    width: 1.5rem;
    height: 1.5rem;
    margin: 0 3rem;

    &::before {
      width: 6rem;
    }
  }

  @media (max-width: 530px) {
    margin: 0 2rem;

    &::before {
      width: 4rem;
    }
  }
`;

const ExperienceContent = styled.div`
  display: grid;
  grid-template-columns: fit-content(50%) fit-content(50%) fit-content(50%) fit-content(
      50%
    );
  justify-content: space-around;

  > * {
    margin: 0 2rem;
  }
`;

const ExperienceItem = styled.div`
  text-align: center;
  font-size: 0.7rem;
  margin: 1rem 0;
  font-family: 'Barlow';
  font-weight: 700;

  @media (max-width: 800px) {
    font-size: 0.6rem;
  }

  @media (max-width: 530px) {
    width: 70%;
    margin: 1rem auto;
  }
`;

const CircleContainer = styled.ul`
  display: flex;
  position: relative;
  align-items: center;
  justify-content: center;
  width: 100%;
`;

const ExperienceBar: React.FC = () => {
  return (
    <Container>
      <CircleContainer>
        <StyledCircle></StyledCircle>
        <StyledCircle></StyledCircle>
        <StyledCircle></StyledCircle>
        <StyledCircle></StyledCircle>
      </CircleContainer>
      <ExperienceContent>
        <ExperienceItem>
          <p>2019- 2021</p>
          <p>
            Sumitronics (Thailand) <br></br>Sales Coordinator
          </p>
        </ExperienceItem>
        <ExperienceItem>
          <p>Sep 2022 - May 2023</p>
          <p>Hack Your Future Bootcamp</p>
          <p>Full-stack 34 weeks course</p>
        </ExperienceItem>
        <ExperienceItem>
          <p>Mar 2023 - March</p>
          <p>Walor (Copenhagen)</p>
          <p>Full-stack developer </p>
        </ExperienceItem>
        <ExperienceItem>
          <p>May 2024 - October 2024</p>
          <p>GISMAP Aps (Copenhagen)</p>
          <p>Front-end developer </p>
        </ExperienceItem>
      </ExperienceContent>
    </Container>
  );
};

export default ExperienceBar;
