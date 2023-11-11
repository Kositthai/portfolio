import styled from 'styled-components'
import projectInitialImg from '../assets/images/butterflyGif.gif'
import gsap from 'gsap'
import MotionPathPlugin from 'gsap/MotionPathPlugin'
import {useEffect, useRef} from 'react'
import {SplitText} from 'gsap-trial/all'

const Container = styled.div`
  width: 100%;
  height: 100%;
  position: relative;
`
const Butterfly = styled.img`
  position: absolute;
  top: 4rem;
  left: 56rem;
  width: 4rem;
`

const Projects = styled.h1`
  display: flex;
  justify-content: center;
  font-family: 'Franklin Gothic Medium', 'Arial Narrow', Arial, sans-serif;
  letter-spacing: 1.5rem;
  font-size: 5.5rem;
`

const AnimationContainer = styled.div`
  position: relative;
  background: pink;
`

const Box = styled.div`
  /* display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  border: 1px solid black; */
`

gsap.registerPlugin(MotionPathPlugin)
gsap.registerPlugin(SplitText)

function Project() {
  const myRef = useRef(null)

  useEffect(() => {
    const butterflyAnimation = gsap.timeline({paused: true})

    butterflyAnimation.to('.butterfly', {
      duration: 7,
      delay: 20,
      motionPath: [
        {x: 0, y: 0},
        {x: -500, y: 200},
        {x: -1100, y: 50},
      ],
      opacity: 0,
      ease: 'power1.inOut',
    })

    const text = new SplitText('#projects', {
      type: 'chars',
      charsClass: 'text-animation',
    })

    const projectAnimation = gsap.timeline()

    projectAnimation.fromTo(
      text.chars,
      {
        autoAlpha: 0,
        duration: 0.5,
        stagger: 0.5,
      },
      {autoAlpha: 1, duration: 0.5, stagger: 0.5, y: 50}
    )

    const observer = new IntersectionObserver((entries) => {
      const entry = entries[0]

      if (entry.isIntersecting) {
        butterflyAnimation.restart()
        projectAnimation.play()
      }
    })

    // Observe the element
    if (myRef.current) {
      observer.observe(myRef.current)
    }
  }, [myRef])

  return (
    <Container>
      <AnimationContainer>
        <Projects id="projects">PROJECTS</Projects>
        <Butterfly src={projectInitialImg} className="butterfly" ref={myRef} />
      </AnimationContainer>
      <Box>
        <div>h</div>
        <div>e</div>
        <div>l</div>
      </Box>
    </Container>
  )
}

export default Project
