import styled from 'styled-components'
import skillInfo from '../data/skillInfo'

const Container = styled.div`
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  font-family: Barlow;
  font-size: 0.8rem;
  margin: 0 2rem 2rem 2rem;
  position: relative;
  padding: 0.5rem;
  color: ${({theme}) => theme.primary};
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
  return (
    <Container>
      <Title>Skills</Title>
      <SkillIcons>
        {skillInfo.map((item) => {
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
