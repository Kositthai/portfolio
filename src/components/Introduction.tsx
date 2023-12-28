import styled from 'styled-components'
import gsap from 'gsap'
import {useRef, useEffect, useState} from 'react'
import SocialMedia from './SocialMedia'
import TextPlugin from 'gsap/TextPlugin'

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  color: ${({theme}) => theme.primary};

  * {
    font-family: Yeseva;
  }

  div {
    @media (max-width: 768px) {
      margin-bottom: 1rem;
    }
  }

  @media (max-width: 768px) {
    order: 2;
  }
`
const Title = styled.h1`
  margin: 3rem 0;
  font-size: 2.3rem;

  @media (max-width: 1279px) {
    font-size: 1.5rem;
  }

  @media (max-width: 768px) {
    font-size: 1.2rem;
    margin: 1rem;
  }
`

const Subtitle = styled.h2`
  font-size: 2rem;

  @media (max-width: 1279px) {
    font-size: 1.2rem;
  }

  @media (max-width: 768px) {
    font-size: 1rem;
  }
`

gsap.registerPlugin(TextPlugin) // Register the TextPlugin

const Introduction: React.FC = () => {
  const [introductionAnimationCompleted, setIntroductionAnimationCompleted] =
    useState(false)

  const nameRef = useRef(null)
  const roleRef = useRef(null)
  const introductionTimeline = gsap.timeline()

  useEffect(() => {
    const nameElement = nameRef.current
    const roleElement = roleRef.current

    introductionTimeline.to(nameElement, {
      duration: 2,
      text: 'I am Vipavee Kositthai',
    })
    introductionTimeline.to(roleElement, {
      duration: 2,
      text: 'Front End Developer',
      onComplete: () => {
        setIntroductionAnimationCompleted(true)
      },
    })
  }, [introductionTimeline])

  return (
    <Container>
      <div>
        <Title id="myText" ref={nameRef}></Title>
        <Subtitle id="role" ref={roleRef}></Subtitle>

        <SocialMedia
          introductionAnimationCompleted={introductionAnimationCompleted}
        />
      </div>
    </Container>
  )
}

export default Introduction
