import styled from 'styled-components'
import SocialMedia from './SocialMedia'
import {useRef, useEffect} from 'react'
import gsap from 'gsap'
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
  const nameRef = useRef(null)
  const roleRef = useRef(null)
  const introduceMsg = gsap.timeline()

  useEffect(() => {
    const nameElement = nameRef.current
    const roleElement = roleRef.current

    introduceMsg.to(nameElement, {
      duration: 2,
      text: 'I am Vipavee Kositthai',
    })
    introduceMsg.to(roleElement, {
      duration: 2,
      text: 'Front End Developer',
    })
  }, [])

  return (
    <Container>
      <div>
        <Title id="myText" ref={nameRef}></Title>
        <SubTitle id="role" ref={roleRef}></SubTitle>
      </div>
      <SocialMedia />
    </Container>
  )
}

export default Introduction
