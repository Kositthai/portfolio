import styled from 'styled-components'
import projectInitialImg from '../assets/images/butterflyGif.gif'
import gsap from 'gsap'
import MotionPathPlugin from 'gsap/MotionPathPlugin'
import {useEffect, useRef} from 'react'
import {SplitText} from 'gsap-trial/all'
import mealShairing from '../assets/images/mealSharing.png'
import cinemania from '../assets/images/cinemania.png'
import figma from '../assets/images/convertFigma.png'
import {useState} from 'react'
import eye from '../assets/images/imgonline-com-ua-resize-WnBqqFROiKQBzh-removebg-preview (1).png'
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
import {SiMui, SiMysql, SiJira} from 'react-icons/si'
import {BsGit} from 'react-icons/bs'

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

const Projects = styled.h1`
  display: flex;
  justify-content: center;
  margin-top: -5rem;
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

type ProjectType = {
  id: number
  image: string
  descrition: string
  source: string
  live: string
}

gsap.registerPlugin(MotionPathPlugin)
gsap.registerPlugin(SplitText)

function Project() {
  const myRef = useRef(null)

  useEffect(() => {
    const butterflyAnimation = gsap.timeline({paused: true})

    butterflyAnimation.to('.butterfly', {
      duration: 7,
      delay: 5,
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

  const [idNumber, setIdNumber] = useState<number[]>([])

  const projectsObj = [
    {
      id: 1,
      image: figma,
      descrition:
        'This is my first HTML and CSS project, which I created during self-study. I converted a design from Figma into a static web.',
      source: 'https://github.com/Kositthai/Figma-To-Web',
      live: 'https://duplicating-project-figma.vercel.app/',
      tool: [BiLogoHtml5, BiLogoCss3, BiLogoFigma],
    },
    {
      id: 2,
      image: mealShairing,
      descrition:
        'A full-stack application equipped with features for making reservations and leaving reviews, along with additional capabilities for sorting and creation date.',
      source: 'https://github.com/Kositthai/Meal-Sharing-App',
      live: 'https://meal-sharing-app-production.up.railway.app/',
      tool: [BiLogoReact, BiLogoJavascript, BiLogoNodejs, SiMysql],
    },
    {
      id: 3,
      image: cinemania,
      descrition:
        'Collaborative group project undertaken with my classmates at HackYourFuture Bootcamp. The application includes functionality to add favorite movies to a personal list, a shopping cart feature, and incorporates sorting and search capabilities.',
      source: 'https://github.com/HackYourFuture-CPH/CINEMANIA',
      live: 'https://cinemania.fly.dev/',
      tool: [
        BiLogoReact,
        BiLogoJavascript,
        BiLogoNodejs,
        SiMysql,
        SiMui,
        SiJira,
      ],
    },
  ]

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
        <Projects id="projects">PROJECTS</Projects>
        <Butterfly src={projectInitialImg} className="butterfly" ref={myRef} />
      </AnimationContainer>
      <Box>
        {projectsObj.map((project, key) => {
          return idNumber.includes(project.id) ? (
            <ProjectDetail
              onClick={() => handleOnClick(project)}
              key={project.id}
            >
              <div>
                <ProjectDescription>{project.descrition}</ProjectDescription>
                <StyledIcon>
                  {project.tool.map((item) => {
                    const IconComponent = item
                    return <IconComponent style={{margin: '0 1rem'}} />
                  })}
                </StyledIcon>
                <StyledButton>
                  <Link href={project.source}>Source</Link>
                </StyledButton>
                <StyledButton>
                  <Link href={project.live} target="_blank">
                    Live
                  </Link>
                </StyledButton>
              </div>
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
