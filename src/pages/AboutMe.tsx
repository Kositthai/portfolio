import styled from 'styled-components';
import { useEffect, useRef } from 'react';
import mySelf from '../assets/images/IMG_1500-blur-removebg-preview.png';
import bike from '../assets/images/bicycle.png';
import hyf from '../assets/images/hyf-logo.svg';
import walor from '../assets/images/walor-logo.svg';
import Skills from '../components/Skills';
import Certificate from '../components/Certificate';
import { experienceAnimation } from '../animations/experienceAnimation';
import ExperienceBar from '../components/ExperienceBar';

const Container = styled.div`
  width: 100%;
  font-family: Barlow, 'Franklin Gothic Medium', 'Arial Narrow', Arial,
    sans-serif;
  display: flex;
  justify-content: center;
  align-items: center;
  margin: auto;
`;

const Wrapper = styled.div`
  width: 80%;
  height: auto;
  border: 3px solid ${({ theme }) => theme.primary};
  border-radius: 5px;
  position: relative;
  margin: 5rem 0;
  overflow: hidden;

  @media (max-width: 1280px) {
    margin: 1rem;
    width: 80%;
    position: block;
  }

  @media (max-width: 1024px) {
    width: 95%;
  }
`;

const Frame = styled.div`
  border-radius: 50%;
  width: 15rem;
  border: none;
  margin: auto 2rem;
  background: ${({ theme }) => theme.orange};
  overflow: hidden;

  @media (max-width: 1024px) {
    width: 0;
    height: 0;
    margin: 1;
    background: transparent;
  }
`;

const Image = styled.img`
  width: 100%;
  display: block;
  margin: auto;

  @media (max-width: 1024px) {
    display: none;
  }
`;

const IntroduceMessage = styled.div`
  width: fit-content;
  border: 2px solid ${({ theme }) => theme.primary};
  border-radius: 1rem;
  margin: 3rem 3rem 3rem 0;
  font-size: 1.2rem;
  padding: 1rem;
  line-height: 1.5;
  position: relative;
  font-weight: 500;

  p {
    margin: 0.5rem 0;
  }

  @media (max-width: 1280px) {
    font-size: 1rem;
    margin: 1rem;
  }

  @media (max-width: 1024px) {
    font-size: 0.8rem;
    margin: 1rem;
    border: none;
  }
`;

const ResumeContainer = styled.div`
  display: flex;

  @media (max-width: 1024px) {
    display: block;
  }
`;

const StlyedBike = styled.img`
  width: 7rem;
`;

const StyledHyf = styled.img`
  width: 3rem;
  position: absolute;
  left: 26.5%;
  opacity: 0;

  @media (max-width: 1280px) {
    left: 27%;
  }
`;

const StyledHyfMessage = styled.p`
  color: ${({ theme }) => theme.primary};
  font-weight: 600;
  position: absolute;
  left: 28%;
  opacity: 0;
`;

const StyledWalor = styled.img`
  width: 4rem;
  position: absolute;
  left: 63%;
  opacity: 0;
`;

const StyledWalorMessage = styled.p`
  color: ${({ theme }) => theme.primary};
  font-weight: 600;
  position: absolute;
  left: 65%;
  opacity: 0;
`;

const Experience = styled.p`
  font-size: 1.5rem;
  font-weight: 600;
  margin-top: 3rem;
  margin-left: 2.3rem;

  @media (max-width: 1024px) {
    font-size: 1rem;
    margin-left: 1rem;
  }
`;

const ExperienceContainer = styled.div``;

const ExperienceTitle = styled.h2`
  font-size: 1rem;
  margin: 1rem;
`;

const StyledImage = styled.img`
  width: 20%;
  float: left;
`;

const ExperienceContent = styled.div`
  display: flex;
  justify-content: center;
`;

const AnimationContainer = styled.div`
  position: relative;
  width: 100%;
`;

const AboutMe: React.FC = () => {
  const myRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const { restartExperienceAnimation } = experienceAnimation();

    const observer = new IntersectionObserver((entries) => {
      const entry = entries[0];

      if (entry.isIntersecting) {
        restartExperienceAnimation();
      }
    });

    // Observe the element
    if (myRef.current) {
      observer.observe(myRef.current);
    }
  }, [myRef]);

  return (
    <Container id="about">
      <Wrapper>
        <ResumeContainer>
          <Frame>
            <Image src={mySelf} />
          </Frame>
          <IntroduceMessage>
            {window.matchMedia('(max-width: 1024px)').matches && (
              <StyledImage src={mySelf} />
            )}

            <div>
              Hello, I'm <strong>Vipavee Kositthai</strong>, with a{' '}
              <strong>background in Logistics Management</strong>. My journey
              into coding began during a period of unemployment, where I
              discovered a new passion. This discovery led me to join the{' '}
              <strong>Hack Your Future Bootcamp</strong>, an experience that
              opened up new opportunities, including my current role at{' '}
              <strong>Walor.</strong>
              <br></br>
              As a <strong>front-end developer</strong>, my responsibilities
              include implementing and updating features to improve the user
              interface, with a keen focus on enhancing the overall user
              experience.
              <br></br>Recently, I've <strong>transitioned</strong> into backend
              development, working with <strong>PHP and Laravel</strong>. This
              transition not only <strong>enhances my skills</strong> by
              combining frontend and backend knowledge but also allows me to
              tackle projects with a more comprehensive perspective, ensuring
              <strong>seamless integration and robust functionality</strong>.
              <br></br>
              I'm excited to <strong>continue learning</strong> and expanding my
              skills in new technologies.
            </div>
          </IntroduceMessage>
        </ResumeContainer>
        <Skills />
        <Certificate />

        {window.matchMedia('(max-width: 1279px)').matches ? (
          <ExperienceContainer>
            <ExperienceTitle>Experiences</ExperienceTitle>
            <ExperienceContent>
              <ExperienceBar />
            </ExperienceContent>
          </ExperienceContainer>
        ) : (
          <AnimationContainer ref={myRef}>
            <Experience className="experience">Experiences</Experience>
            <StlyedBike src={bike} className="bike" />
            <StyledHyf src={hyf} className="hyf" />
            <StyledWalor src={walor} className="walor" />
            <StyledHyfMessage className="hyf-message">2022</StyledHyfMessage>
            <StyledWalorMessage className="walor-message">
              2023
            </StyledWalorMessage>
          </AnimationContainer>
        )}
      </Wrapper>
    </Container>
  );
};

export default AboutMe;
