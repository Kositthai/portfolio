import styled from 'styled-components'
import {useEffect, useRef} from 'react'
import projectInitialImg from '../assets/images/butterflyGif.gif'
import {useState} from 'react'
import eye from '../assets/images/eye.png'
import {projectTextAnimation} from '../animations/projectTextAnimation'
import {butterflyAnimation} from '../animations/butterflyAnimation'
import projectsInfo from '../data/projectInfo'

const Container = styled.div`
  width: 100%;
  height: 100%;
  position: relative;
  font-family: Barlow;
  margin-top: 2rem;
`
const Butterfly = styled.img`
  position: absolute;
  top: 4rem;
  left: 56rem;
  width: 4rem;
`

const ProjectContainer = styled.div`
  display: flex;
  justify-content: center;
  margin-top: 10rem;
`

const Projects = styled.h1`
  font-family: 'Franklin Gothic Medium', 'Arial Narrow', Arial, sans-serif;
  letter-spacing: 1.5rem;
  font-size: 5.5rem;
  color: #37342f;
`

const AnimationContainer = styled.div`
  position: relative;
`

const Box = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  gap: 2rem;
  margin: 15rem 7rem;
`

const ProjectItem = styled.div`
  height: 20rem;

  :hover {
    cursor: url(${eye}), pointer;
  }
`

const ProjectImage = styled.img`
  width: 100%;
  height: 100%;
  border-radius: 10px;
`

const ProjectDetail = styled.div`
  background: #37342f;
  width: 100%;
  height: 20rem;
  border-radius: 10px;
  color: white;
  text-align: center;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
`

const ProjectDescription = styled.p`
  width: 70%;
  text-align: center;
  margin: 1rem auto;
  font-size: 1rem;
  line-height: 2rem;
`

const StyledButton = styled.button`
  border: 1px solid white;
  background: #ca8a8b;
  padding: 1rem 1.5rem;
  border-radius: 0.5rem;
  margin: 1rem;
  border: none;
  color: white;
  margin-top: auto;

  :hover {
    cursor: url(${eye}), pointer;
  }
`

const Link = styled.a`
  text-decoration: none;
  color: white;
`

const StyledIcon = styled.div`
  font-size: 2rem;
  margin: 1rem;
`

const ProjectButtonContainer = styled.div`
  margin-top: auto;
`

type ProjectType = {
  id: number
  image: string
  descrition: string
  source: string
  live: string
}

const Project: React.FC = () => {
  const myRef = useRef(null)

  const projectsText = 'PROJECTS'.split('')

  useEffect(() => {
    const {restartProjectTextAnimation} = projectTextAnimation()
    const {restartButterflyAnimation} = butterflyAnimation()

    const observer = new IntersectionObserver((entries) => {
      const entry = entries[0]

      if (entry.isIntersecting) {
        restartProjectTextAnimation()
        restartButterflyAnimation()
      }
    })

    // Observe the element
    if (myRef.current) {
      observer.observe(myRef.current)
    }
  }, [myRef])

  const [idNumber, setIdNumber] = useState<number[]>([])

  const handleOnClick = (project: ProjectType) => {
    setIdNumber((prevIds) => {
      if (prevIds.includes(project.id)) {
        return prevIds.filter((id) => id !== project.id)
      } else {
        return [...prevIds, project.id]
      }
    })
  }

  return (
    <Container id="work">
      <AnimationContainer>
        <ProjectContainer>
          {projectsText.map((character) => {
            return <Projects className="projects">{character}</Projects>
          })}
        </ProjectContainer>

        <Butterfly src={projectInitialImg} className="butterfly" ref={myRef} />
      </AnimationContainer>
      <Box>
        {projectsInfo.map((project, key) => {
          return idNumber.includes(project.id) ? (
            <ProjectDetail
              onClick={() => handleOnClick(project)}
              key={project.id}
            >
              <ProjectDescription>{project.descrition}</ProjectDescription>
              <StyledIcon>
                {project.tool.map((item) => {
                  const IconComponent = item
                  return <IconComponent style={{margin: '0 1rem'}} />
                })}
              </StyledIcon>

              <ProjectButtonContainer>
                <StyledButton>
                  <Link href={project.source}>Source</Link>
                </StyledButton>
                <StyledButton>
                  <Link href={project.live} target="_blank">
                    Live
                  </Link>
                </StyledButton>
              </ProjectButtonContainer>
            </ProjectDetail>
          ) : (
            <ProjectItem
              onClick={() => handleOnClick(project)}
              key={project.id}
            >
              <ProjectImage src={project.image} />
            </ProjectItem>
          )
        })}
      </Box>
    </Container>
  )
}

export default Project
