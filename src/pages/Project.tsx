import styled from 'styled-components'
import projectInitialImg from '../assets/images//output-onlinegiftools.gif'
import {duration} from '@mui/material'
import gsap from 'gsap'
import MotionPathPlugin from 'gsap/MotionPathPlugin'
import {useEffect} from 'react'

const Container = styled.div`
  width: 100%;
  height: 100%;
  position: relative;
`
const Butterfly = styled.img`
  position: absolute;
  top: 40%;
  left: 40%;
  width: 15%;
`

const StyledSVG = styled.svg`
  width: 20%;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-65%, -45%);
  font-family: 'Rampart One', sans-serif;
  letter-spacing: 1rem;
  font-size: 5.5rem;
`

gsap.registerPlugin(MotionPathPlugin)

function Project() {
  useEffect(() => {
    gsap.to('.butterfly', {
      duration: 5,
      delay: 2,
      motionPath: [
        {x: 0, y: 0},
        {x: -500, y: -200},
        {x: -1200, y: 200},
      ],
      ease: 'power1.inOut',
    })
  }, []) // Run the animation once on mount

  return (
    <Container>
      <StyledSVG viewBox="0 0 500 900">
        <path
          d="M50,400 C100,80 400,80 500,400"
          fill="transparent"
          id="projectPath"
        />
        <text>
          <textPath xlinkHref="#projectPath" startOffset="17%">
            Projects
          </textPath>
        </text>
      </StyledSVG>

      <Butterfly src={projectInitialImg} className="butterfly" />
    </Container>
  )
}

export default Project
