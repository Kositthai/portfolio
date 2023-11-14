import styled from '@emotion/styled'
import {
  BiLogoReact,
  BiLogoTypescript,
  BiLogoJavascript,
  BiLogoHtml5,
  BiLogoCss3,
  BiLogoFigma,
  BiLogoBootstrap,
  BiLogoNodejs,
} from 'react-icons/bi'
import {SiMui, SiMysql} from 'react-icons/si'
import {BsGit} from 'react-icons/bs'

const Container = styled.div`
  display: flex;
  align-items: center;
  font-family: Barlow;
  font-size: 0.8rem;
  margin: 0 3rem;
  position: relative;
  padding: 0.5rem;
  color: #37342f;
  font-weight: 600;
`

const Title = styled.h1`
  font-size: 1.5rem;
`
const SkillIcons = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  font-size: 2rem;
  margin-left: 1.5rem;

  & > * {
    margin: auto 1.5rem;
  }
`

const SkillItem = styled.div``

const IconName = styled.p`
  font-size: 1rem;
  text-align: center;
`

const Skills: React.FC = () => {
  const skillObj = [
    {
      id: 1,
      icon: BiLogoReact,
      name: 'React',
    },
    {
      id: 2,
      icon: BiLogoTypescript,
      name: 'Typscript',
    },
    {
      id: 3,
      icon: BiLogoJavascript,
      name: 'Javascript',
    },
    {
      id: 4,
      icon: BiLogoHtml5,
      name: 'HTML',
    },
    {
      id: 5,
      icon: BiLogoCss3,
      name: 'CSS',
    },
    {id: 6, icon: BiLogoNodejs, name: 'Nodejs'},
    {
      id: 7,
      icon: SiMysql,
      name: 'MySQL',
    },
    {id: 8, icon: BiLogoBootstrap, name: 'Bootstrap'},

    {
      id: 9,
      icon: SiMui,
      name: 'Material Ui',
    },
    {
      id: 10,
      icon: BsGit,
      name: 'Git',
    },
    {id: 11, icon: BiLogoFigma, name: 'Figma'},
  ]
  return (
    <Container>
      <Title>Skills</Title>
      <SkillIcons>
        {skillObj.map((item) => {
          const IconComponent = item.icon
          return (
            <SkillItem key={item.id}>
              <IconComponent />
              <IconName>{item.name}</IconName>
            </SkillItem>
          )
        })}
      </SkillIcons>
    </Container>
  )
}

export default Skills
