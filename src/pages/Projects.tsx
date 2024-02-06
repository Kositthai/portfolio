import styled from 'styled-components';
import { useEffect, useRef, useState } from 'react';
import projectInitialImg from '../assets/images/butterflyGif.gif';
import eye from '../assets/images/eye.png';
import { projectTextAnimation } from '../animations/projectTextAnimation';
import { butterflyAnimation } from '../animations/butterflyAnimation';
import projectsInfo from '../data/projectInfo';

const Container = styled.div`
  width: 100%;
  height: 100%;
  position: relative;
  font-family: Barlow;
  overflow: hidden;
`;

const Butterfly = styled.img`
  position: absolute;
  top: 60%;
  left: 46.5%;
  width: 4rem;

  @media (max-width: 1440px) {
    left: 45.5%;
  }

  @media (max-width: 1279px) {
    top: 130%;
    width: 3rem;
  }

  @media (max-width: 1024px) {
    left: 44.5%;
  }

  @media (max-width: 768px) {
    left: 42.5%;
  }

  @media (max-width: 630px) {
    left: 41.5%;
  }

  @media (max-width: 530px) {
    top: 240%;
    width: 2rem;
  }
`;

const ProjectContainer = styled.div`
  display: flex;
  justify-content: center;
`;

const Projects = styled.h1`
  font-family: 'Franklin Gothic Medium', 'Arial Narrow', Arial, sans-serif;
  letter-spacing: 1.5rem;
  font-size: 5.5rem;
  color: ${({ theme }) => theme.primary};

  @media (max-width: 1279px) {
    font-size: 3rem;
  }

  @media (max-width: 530px) {
    font-size: 2rem;
  }
`;

const AnimationContainer = styled.div`
  position: relative;
`;

const Box = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  gap: 2rem;
  margin: 15rem 7rem;
  position: relative;

  @media (max-width: 1279px) {
    grid-template-columns: 1fr 1fr;
  }

  @media (max-width: 1024px) {
    margin: 15rem 2rem;
  }

  @media (max-width: 868px) {
    grid-template-columns: 1fr;
    margin: 10rem 2rem;
  }
`;

const ProjectItem = styled.div`
  height: 20rem;
  -webkit-box-shadow: 2px 4px 14px 0px rgba(0, 0, 0, 0.75);
  -moz-box-shadow: 2px 4px 14px 0px rgba(0, 0, 0, 0.75);
  box-shadow: 2px 4px 14px 0px rgba(0, 0, 0, 0.75);
  overflow: hidden;

  border-radius: 10px;

  :hover {
    cursor: url(${eye}), pointer;
  }
`;

const ProjectImage = styled.img`
  width: 100%;
  height: 100%;
`;

const ProjectDetail = styled.div`
  background: ${({ theme }) => theme.primary};
  width: 100%;
  height: 20rem;
  border-radius: 10px;
  color: ${({ theme }) => theme.white};
  text-align: center;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
`;

const ProjectDescription = styled.p`
  width: 90%;
  text-align: center;
  margin: 1rem auto;
  font-size: 1rem;
  line-height: 2rem;

  @media (max-width: 1536px) {
    font-size: 0.8rem;
  }

  @media (max-width: 630px) {
    font-size: 1rem;
    line-height: 1.5rem;
    margin: 1rem auto;
    width: 80%;
  }

  @media (max-width: 514px) {
    font-size: 0.8rem;
  }
`;

const StyledButton = styled.button`
  border: 1px solid white;
  background: ${({ theme }) => theme.rose};
  padding: 1rem 1.5rem;
  border-radius: 0.5rem;
  margin: 1rem;
  border: none;
  color: ${({ theme }) => theme.white};
  margin-top: auto;

  :hover {
    cursor: url(${eye}), pointer;
  }

  @media (max-width: 630px) {
    padding: 0.5rem 1rem;
  }
`;

const Link = styled.a`
  text-decoration: none;
  color: ${({ theme }) => theme.white};
`;

const StyledIcon = styled.div`
  font-size: 1.5rem;
  margin: 0.5rem 0;

  @media (max-width: 1536px) {
    font-size: 1.5rem;
  }

  @media (max-width: 414px) {
    font-size: 1rem;
  }
`;

const ProjectButtonContainer = styled.div`
  margin-top: auto;
`;

const ToolText = styled.div`
  display: flex;
  font-size: 0.8rem;
`;

const ToolTextItem = styled.div`
  margin: 0.5rem;
`;

type ProjectType = {
  id: number;
  image: string;
  description: string;
  source: string;
  live: string | null;
  toolText: string[];
};

const Project: React.FC = () => {
  const butterflyRef = useRef(null);

  const projectsText = 'PROJECTS'.split('');

  useEffect(() => {
    const { restartProjectTextAnimation } = projectTextAnimation();
    const { restartButterflyAnimation } = butterflyAnimation();

    const observer = new IntersectionObserver((entries) => {
      const entry = entries[0];

      if (entry.isIntersecting) {
        restartProjectTextAnimation();
        restartButterflyAnimation();
      }
    });

    // Observe the element
    if (butterflyRef.current) {
      observer.observe(butterflyRef.current);
    }
  }, [butterflyRef]);

  const [idNumber, setIdNumber] = useState<number[]>([]);

  const handleOnClick = (project: ProjectType) => {
    setIdNumber((prevIds) => {
      if (prevIds.includes(project.id)) {
        return prevIds.filter((id) => id !== project.id);
      } else {
        return [...prevIds, project.id];
      }
    });
  };

  return (
    <Container id="work">
      <AnimationContainer>
        <ProjectContainer>
          {projectsText.map((character) => {
            return <Projects className="projects">{character}</Projects>;
          })}
        </ProjectContainer>

        <Butterfly
          src={projectInitialImg}
          className="butterfly"
          ref={butterflyRef}
        />
      </AnimationContainer>

      <Box>
        {projectsInfo.map((project) => {
          return idNumber.includes(project.id) ? (
            <ProjectDetail
              onClick={() => handleOnClick(project)}
              key={project.id}
            >
              <ProjectDescription>{project.description}</ProjectDescription>
              <StyledIcon>
                {project.tool.map((item) => {
                  const IconComponent = item;
                  return <IconComponent style={{ margin: '0 .5rem' }} />;
                })}
              </StyledIcon>
              <ToolText>
                {project.toolText.map((item) => {
                  return <ToolTextItem>{item}</ToolTextItem>;
                })}
              </ToolText>

              <ProjectButtonContainer>
                <StyledButton>
                  <Link href={project.source}>Source</Link>
                </StyledButton>
                <StyledButton>
                  {project.live ? (
                    <Link
                      href={project.live ? project.live : 'no process'}
                      target="_blank"
                    >
                      Live
                    </Link>
                  ) : (
                    <p>On process</p>
                  )}
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
          );
        })}
      </Box>
    </Container>
  );
};

export default Project;
