import styled from 'styled-components'
import gsap from 'gsap'
import {useRef, useEffect, useState} from 'react'
import SocialMedia from './SocialMedia'

import TextPlugin from 'gsap/TextPlugin'

const Container = styled.div`
  margin: auto;

  * {
    font-family: Yeseva;
  }
  div {
    margin-bottom: 4rem;
  }
`
const Title = styled.h1`
  margin: 3rem 0;
`

const SubTitle = styled.h2``

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
  }, [])

  return (
    <Container>
      <div>
        <Title id="myText" ref={nameRef}></Title>
        <SubTitle id="role" ref={roleRef}></SubTitle>
      </div>
      <SocialMedia
        introductionAnimationCompleted={introductionAnimationCompleted}
      />
    </Container>
  )
}

export default Introduction
