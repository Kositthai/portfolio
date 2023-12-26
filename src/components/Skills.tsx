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
  flex-wrap: wrap;
  align-items: center;
  font-family: Barlow;
  font-size: 0.8rem;
  margin: 0 2rem 2rem 2rem;
  position: relative;
  padding: 0.5rem;
  color: #37342f;
  font-weight: 600;

  @media (max-width: 1440px) {
    flex-direction: column;
    align-items: start;
  }

  @media (max-width: 1024px) {
    margin: 1rem;
    padding: 0;
  }
`

const Title = styled.h2`
  font-size: 1.5rem;

  @media (max-width: 1024px) {
    font-size: 1rem;
  }
`
const SkillIcons = styled.div`
  display: flex;

  font-size: 2rem;
  margin-left: 3rem;
  flex-wrap: wrap;

  & > * {
    margin: auto 1.5rem;

    @media (max-width: 1584px) {
      margin: auto 1.1rem;
    }
  }

  @media (max-width: 1440px) {
    margin: 1rem 0;

    & > * {
      margin: 1rem 1rem;
    }
  }

  @media (max-width: 1280px) {
    font-size: 1.5rem;
  }
`

const SkillItem = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`

const IconName = styled.p`
  font-size: 1rem;
  text-align: center;
  margin-top: 1rem;

  @media (max-width: 768px) {
    font-size: 0.7rem;
  }
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
