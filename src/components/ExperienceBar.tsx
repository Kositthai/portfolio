import styled from '@emotion/styled'

const StyledCircle = styled.li`
  width: 2em;
  height: 2em;
  text-align: center;
  line-height: 2em;
  border-radius: 1em;
  background: #e5b679;
  margin: 0 6rem;
  display: inline-block;
  color: white;
  position: relative;

  ::before {
    content: '';
    position: absolute;
    top: 50%;
    background: #0c0c0c;
    width: 12rem;
    height: 0.15rem;
    left: 100%;
    z-index: -1;
  }

  :last-child {
    ::before {
      display: none;
    }
  }

  @media (max-width: 900px) {
    margin: 0 5rem;

    ::before {
      width: 10rem;
    }
  }

  @media (max-width: 800px) {
    margin: 0 4.5rem;

    ::before {
      width: 9rem;
    }
  }

  @media (max-width: 700px) {
    width: 1.5rem;
    height: 1.5rem;
    margin: 0 3rem;

    ::before {
      width: 6rem;
    }
  }

  @media (max-width: 530px) {
    margin: 0 2rem;

    ::before {
      width: 4rem;
    }
  }
`

const ExperienceContent = styled.div`
  display: grid;
  grid-template-columns: fit-content(50%) fit-content(50%) fit-content(50%) fit-content(
      50%
    );
  justify-content: space-around;

  > * {
    margin: 0 2rem;
  }
`

const ExperienceItem = styled.div`
  text-align: center;
  font-size: 0.7rem;
  margin: 1rem 0;

  @media (max-width: 800px) {
    font-size: 0.6rem;
  }

  @media (max-width: 530px) {
    width: 70%;
    margin: 1rem auto;
  }
`

const ExperienceBar = () => {
  return (
    <div style={{margin: '2rem 2rem'}}>
      <ul
        style={{
          display: 'flex',
          position: 'relative',
          alignItems: 'center',
          justifyContent: 'center',
          width: '100%',
        }}
      >
        <StyledCircle></StyledCircle>
        <StyledCircle></StyledCircle>
        <StyledCircle></StyledCircle>
        <StyledCircle></StyledCircle>
      </ul>
      <ExperienceContent>
        <ExperienceItem>
          <p>2015- 2019</p>
          <p>
            Bachelor of Logistics and <br></br>supply chain management
          </p>
        </ExperienceItem>
        <ExperienceItem>
          <p>2019- 2021</p>
          <p>
            Sumitronics (Thailand) <br></br>Sales Coordinator
          </p>
        </ExperienceItem>
        <ExperienceItem>
          <p>Sep 2022 - May 2023</p>
          <p>Hack Your Future Bootcamp</p>
          <p>Full-stack 34 weeks course</p>
        </ExperienceItem>
        <ExperienceItem>
          <p>Aug 2023 - Present</p>
          <p>Walor</p>
          <p>Front-end developer </p>
        </ExperienceItem>
      </ExperienceContent>
    </div>
  )
}

export default ExperienceBar
