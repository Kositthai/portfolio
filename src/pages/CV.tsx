import styled from 'styled-components';
import glassesWoman from '../assets/images/woman.png';
import Bike from '../assets/images/bicycle (2).png';
import gsap from 'gsap';
import {useEffect, useState} from 'react';
import Stone from '../assets/images/stone.png';
import Hyf from '../assets/images/hyf-logo.svg';
import Rock from '../assets/images/stone.png';
import Walor from '../assets/images/walor-logo.svg';

const Container = styled.div`
  height: 100vh;
  display: flex;
  align-items: center;
`;

const Wrapper = styled.div`
  width: 65%;
  height: 80vh;
  border: 3px solid #37342f;
  border-radius: 5px;
  margin: 5rem auto;
  position: relative;
  overflow: hidden;
`;

const Frame = styled.div`
  border-radius: 50%;
  width: fit-content;
  border: none;
  margin: auto 0 auto 3rem;
`;

const Image = styled.img`
  width: 8rem;
  display: block;
  margin: auto;
`;

const IntroduceMessage = styled.div`
  width: fit-content;
  border: 2px solid #37342f;
  border-radius: 1rem;
  margin: 3rem;
  font-family: Canveat;
  font-size: 1rem;
  padding: 1rem;
  line-height: 1.5;

  p {
    margin: 0.5rem 0;
  }
`;

const ResumeContainer = styled.div`
  display: flex;
`;

const StlyedBike = styled.img`
  width: 8rem;
  position: absolute;
  top: 84%;
`;

const StyledStone = styled.img`
  width: 4%;
  position: absolute;
  top: 96%;
  left: 30%;
`;

const StyledHyf = styled.img`
  width: 4%;
  position: absolute;
  top: 73%;
  left: 23%;
  opacity: 0;
`;

const StyledHyfMessage = styled.p`
  color: #37342f;
  font-weight: 600;
  position: absolute;
  top: 83%;
  left: 33.5%;
  opacity: 0;
`;

const StyledRock = styled.img`
  width: 4%;
  position: absolute;
  top: 96%;
  left: 69%;
`;

const StyledWalor = styled.img`
  width: 5%;
  position: absolute;
  top: 80%;
  left: 61.5%;
  opacity: 0;
`;

const StyledWalorMessage = styled.p`
  color: #37342f;
  font-weight: 600;
  position: absolute;
  top: 91%;
  left: 59%;
  opacity: 0;
`;

const CV = () => {
  const startBikeAnimation = () => {
    gsap.to('.bike', {
      x: '200%',
      duration: 3,
      ease: 'power2.out',
      onComplete: () => {
        startStoneAnimation();
        setTimeout(startLogoAnimation, 500);
      },
    });
  };

  const startStoneAnimation = () => {
    gsap.to('.stone', {
      opacity: 1,
    });
  };

  const startLogoAnimation = () => {
    gsap.to('.hyf', {
      opacity: 1,
      duration: 1,
      ease: 'back.out',
      y: '45%',
      onComplete: () => {
        startMessageAnimation();
      },
    });
  };

  const startMessageAnimation = () => {
    gsap.to('.hyf-message', {
      y: '500%',
      ease: 'back.out',
      opacity: 1,
      onComplete: () => {
        setTimeout(() => {
          gsap.to('.hyf-message', {
            opacity: 0,
          });
        }, 1000);
        setTimeout(() => {
          gsap.to('.hyf', {
            opacity: 0,
          });
        }, 2000);
        setTimeout(() => {
          startBikeAnimationAfterMessage();
        }, 3000);
      },
    });
  };

  const startBikeAnimationAfterMessage = () => {
    gsap.to('.bike', {
      x: '580%',
      duration: 2,
      ease: 'power2.out',
      onComplete: () => {
        startWalorAnimationAfterBike();
      },
    });
  };

  const startWalorAnimationAfterBike = () => {
    gsap.to('.walor', {
      opacity: 1,
      duration: 1,
      ease: 'back.out',
      y: '45%',
      onComplete: () => {
        startWalorMessageAnimation();
      },
    });
  };

  const startWalorMessageAnimation = () => {
    gsap.to('.walor-message', {
      y: '42%',
      ease: 'back.out',
      opacity: 1,
      onComplete: () => {
        setTimeout(() => {
          gsap.to('.walor-message', {
            opacity: 0,
          });
        }, 1000);
        setTimeout(() => {
          gsap.to('.walor', {
            opacity: 0,
          });
        }, 2000);
        setTimeout(() => {
          startBikeAnimationAfterWalorMessage();
        }, 3000);
      },
    });
  };

  const startBikeAnimationAfterWalorMessage = () => {
    gsap.to('.bike', {
      x: '1000%',
      duration: 3,
      ease: 'power2.out',
      onComplete: () => {
        gsap.set('.bike', {x: '-5%'});
        startBikeAnimation();
      },
    });
  };

  useEffect(() => {
    const handleScroll = () => {
      const innerHeight = window.innerHeight;
      if (innerHeight >= 955) {
        // Start your animation here
        startBikeAnimation();
        console.log('inner test');
      }
    };
    handleScroll();

    // startBikeAnimation();
  }, []);

  return (
    <Container style={{height: '100vh', position: 'relative'}}>
      <Wrapper>
        <ResumeContainer>
          <Frame>
            <Image src={glassesWoman} />
          </Frame>
          <IntroduceMessage>
            <p className="test">
              Hello, I'm Vipavee Kositthai, originally from Thailand. I moved to
              Denmark for family reasons, and while I was waiting for my
              residence permit, I discovered my passion for coding. This
              discovery led me to pursue my journey further by joining the
              HackyourFuture bootcamp.
            </p>
            <p>
              After successfully completing the bootcamp, I had the fantastic
              opportunity to intern at Walor. Our team at Walor is small but
              tightly-knit, working closely together and sharing innovative
              ideas. In my role, I am responsible for implementing and updating
              features to enhance the user interface, with a focus on optimizing
              the overall user experience.
            </p>
            <p>
              I also have the privilege of taking on additional tasks that go
              beyond my current responsibilities, thanks to the support and
              guidance from my colleagues. This opportunity has allowed me to
              continuously learn, grow, and expand my skills.
            </p>
          </IntroduceMessage>
        </ResumeContainer>

        <StlyedBike src={Bike} className="bike" />
        <StyledStone src={Stone} className="stone" />
        <StyledRock src={Rock} className="rock" />
        <StyledWalor src={Walor} className="walor" />
        <StyledHyf src={Hyf} className="hyf" />
      </Wrapper>
      <StyledHyfMessage className="hyf-message">2022</StyledHyfMessage>
      <StyledWalorMessage className="walor-message">2023</StyledWalorMessage>
    </Container>
  );
};

export default CV;
