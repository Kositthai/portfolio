import styled from 'styled-components'
import glassesWoman from '../assets/images/woman.png'
import Bike from '../assets/images/bicycle (2).png'
import gsap from 'gsap'
import {useEffect, useState, useRef} from 'react'
import Stone from '../assets/images/stone.png'
import Hyf from '../assets/images/hyf-logo.svg'
import Rock from '../assets/images/stone.png'
import Walor from '../assets/images/walor-logo.svg'

const Container = styled.div`
  height: 100vh;
  display: flex;
  align-items: center;
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
  width: fit-content;
  border: none;
  margin: auto 0 auto 3rem;
`

const Image = styled.img`
  width: 8rem;
  display: block;
  margin: auto;
`

const IntroduceMessage = styled.div`
  width: fit-content;
  border: 2px solid #37342f;
  border-radius: 1rem;
  margin: 3rem;
  font-family: Barlow;
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

const CV: React.FC = () => {
  const myRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const tl = gsap.timeline({
      defaults: {
        ease: 'power2.out', // Default ease for all tweens
      },
      repeat: -1,
    })

    tl.to('.bike', {x: '200%', duration: 2})
      .to('.hyf', {opacity: 1, y: '45%', duration: 2, ease: 'back.out'}) // '<' means start after the previous tween
      .to('.hyf-message', {y: '500%', opacity: 1, duration: 2}, '<')
      .to('.hyf-message, .hyf', {opacity: 0})
      .to('.bike', {x: '580%', duration: 2})
      .to('.walor', {y: '45%', opacity: 1, duration: 2, ease: 'back.out'})
      .to('.walor-message', {y: '42%', opacity: 1, duration: 2}, '<')
      .to('.walor-message, .walor', {opacity: 0, duration: 1})
      .to('.bike', {x: '1000%', duration: 2})

    const observer = new IntersectionObserver((entries) => {
      const entry = entries[0]

      if (entry.isIntersecting) {
        tl.restart()
      }
    })

    // Observe the element
    if (myRef.current) {
      observer.observe(myRef.current)
    }
  }, [myRef])

  return (
    <Container style={{height: '100vh', position: 'relative'}}>
      <Wrapper>
        <ResumeContainer>
          <Frame>
            <Image src={glassesWoman} />
          </Frame>
          <IntroduceMessage>
            <p className="first-paragraph">
              Hello, I'm <strong>Vipavee Kositthai</strong>, Background of
              Logistics management. I discovered my new passion for coding
              during my unemployment. This discovery led my journey further by
              joining the <strong>HackyourFuture bootcamp.</strong> {''}
              After successfully completing the bootcamp, I had the fantastic
              opportunity to intern at <strong>Walor.</strong>
            </p>

            <p className="third-paragraph">
              Our team at Walor is small but tightly-knit, working closely
              together and sharing innovative ideas. In my role as a{' '}
              <strong>front-end developer</strong>, I am responsible for
              implementing and updating features to enhance the user interface,
              with a focus on optimizing the overall user experience.
            </p>
          </IntroduceMessage>
        </ResumeContainer>
        <div ref={myRef}>
          <StlyedBike src={Bike} className="bike" />
          <StyledStone src={Stone} className="stone" />
          <StyledRock src={Rock} className="rock" />
          <StyledWalor src={Walor} className="walor" />
          <StyledHyf src={Hyf} className="hyf" />
        </div>
      </Wrapper>
      <StyledHyfMessage className="hyf-message">2022</StyledHyfMessage>
      <StyledWalorMessage className="walor-message">2023</StyledWalorMessage>
    </Container>
  )
}

export default CV
