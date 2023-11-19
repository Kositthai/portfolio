import styled from 'styled-components'
import {useEffect, useRef} from 'react'
import mySelf from '../assets/images/IMG_1500-blur-removebg-preview.png'
import bike from '../assets/images/bicycle.png'
import stone from '../assets/images/stone.png'
import hyf from '../assets/images/hyf-logo.svg'
import rock from '../assets/images/stone.png'
import walor from '../assets/images/walor-logo.svg'
import Skills from '../components/Skills'
import Certificate from '../components/Certificate'
import {experienceAnimation} from '../animations/experienceAnimation'

const Container = styled.div`
  height: 100vh;
  display: flex;
  align-items: center;
  font-family: Barlow;
`

const Wrapper = styled.div`
  width: 65%;
  height: 80vh;
  border: 3px solid #37342f;
  border-radius: 5px;
  margin: 5rem auto;
  position: relative;
  overflow: hidden;
`

const Frame = styled.div`
  border-radius: 50%;
  width: 22rem;
  border: none;
  margin: 1.5rem 0 auto 3rem;
  background: #ff91004f;
  overflow: hidden;
`

const Image = styled.img`
  width: 8rem;
  display: block;
  margin: auto;
  overflow: hidden;
`

const IntroduceMessage = styled.div`
  width: fit-content;
  border: 2px solid #37342f;
  border-radius: 1rem;
  margin: 3rem;

  font-size: 1rem;
  padding: 1rem;
  line-height: 1.5;

  p {
    margin: 0.5rem 0;
  }
`

const ResumeContainer = styled.div`
  display: flex;
`

const StlyedBike = styled.img`
  width: 8rem;
  position: absolute;
  top: 84%;
`

const StyledStone = styled.img`
  width: 4%;
  position: absolute;
  top: 96%;
  left: 30%;
`

const StyledHyf = styled.img`
  width: 4%;
  position: absolute;
  top: 73%;
  left: 23%;
  opacity: 0;
`

const StyledHyfMessage = styled.p`
  color: #37342f;
  font-weight: 600;
  position: absolute;
  top: 83%;
  left: 33.5%;
  opacity: 0;
`

const StyledRock = styled.img`
  width: 4%;
  position: absolute;
  top: 96%;
  left: 69%;
`

const StyledWalor = styled.img`
  width: 5%;
  position: absolute;
  top: 80%;
  left: 61.5%;
  opacity: 0;
`

const StyledWalorMessage = styled.p`
  color: #37342f;
  font-weight: 600;
  position: absolute;
  top: 91%;
  left: 59%;
  opacity: 0;
`

const Experience = styled.p`
  font-size: 1.5rem;
  font-weight: 600;
  margin-top: 3rem;
  margin-left: 3.5rem;
`

const CV: React.FC = () => {
  const myRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const {restartExperienceAnimation} = experienceAnimation()

    const observer = new IntersectionObserver((entries) => {
      const entry = entries[0]

      if (entry.isIntersecting) {
        restartExperienceAnimation()
      }
    })

    // Observe the element
    if (myRef.current) {
      observer.observe(myRef.current)
    }
  }, [myRef])

  return (
    <Container id="about" style={{height: '100vh', position: 'relative'}}>
      <Wrapper>
        <ResumeContainer>
          <Frame>
            <Image src={mySelf} style={{width: '15rem'}} />
          </Frame>
          <IntroduceMessage>
            <p className="first-paragraph">
              Hello, I'm <strong>Vipavee Kositthai</strong>, Background of
              Logistics management. I discovered my new passion for coding
              during my unemployment. This discovery led my journey further by
              joining the <strong>HackYourFuture bootcamp.</strong> {''}
              After successfully completing the bootcamp, I had the fantastic
              opportunity to intern at <strong>Walor.</strong>
            </p>

            <p className="third-paragraph">
              In my role as a <strong>front-end developer</strong>, I am
              responsible for implementing and updating features to enhance the
              user interface, with a focus on optimizing the overall user
              experience.
            </p>
          </IntroduceMessage>
        </ResumeContainer>

        <Certificate />
        <Skills />

        <div ref={myRef}>
          <Experience className="experience">Experience</Experience>
          <StlyedBike src={bike} className="bike" />
          <StyledStone src={stone} className="stone" />
          <StyledRock src={rock} className="rock" />
          <StyledWalor src={walor} className="walor" />
          <StyledHyf src={hyf} className="hyf" />
        </div>
      </Wrapper>
      <StyledHyfMessage className="hyf-message">2022</StyledHyfMessage>
      <StyledWalorMessage className="walor-message">2023</StyledWalorMessage>
    </Container>
  )
}

export default CV
