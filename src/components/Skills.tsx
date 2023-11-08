import styled from '@emotion/styled'
import {
  BiLogoReact,
  BiLogoTypescript,
  BiLogoJavascript,
  BiLogoGithub,
  BiLogoHtml5,
  BiLogoCss3,
  BiLogoFigma,
  BiLogoBootstrap,
} from 'react-icons/bi'
import {SiMui} from 'react-icons/si'

const Container = styled.div`
  display: flex;
  align-items: center;
  font-family: Barlow;
  font-size: 0.8rem;
  margin: 0 3rem;
  position: relative;
  border: 2px dotted black;
  border-radius: 5px;
  padding: 0.5rem;
  /* background: #d8cca3; */
`

const Title = styled.h1`
  /* &::before {
    content: '';
    width: 30px;
    height: 2px;
    background: black;
    position: absolute;
    left: -3rem;
    top: 50%;
  }

  &::after {
    content: '';
    width: 30px;
    height: 2px;
    background: black;
    position: absolute;
    left: 6rem;
    top: 50%;
  } */
`
const SkillIcons = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  font-size: 3rem;
  margin-left: 3.5rem;

  & > * {
    margin: auto 2rem;
  }
`

const Skills = () => {
  return (
    <Container>
      <Title>SKILLS</Title>
      <SkillIcons>
        <BiLogoReact />
        <BiLogoTypescript />
        <BiLogoJavascript />
        <BiLogoHtml5 />
        <BiLogoCss3 />
        <BiLogoBootstrap />
        <SiMui />
        <BiLogoGithub />
        <BiLogoFigma />
      </SkillIcons>
    </Container>
  )
}

export default Skills
