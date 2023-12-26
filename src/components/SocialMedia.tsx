import styled from 'styled-components'
import gsap from 'gsap'
import {useEffect} from 'react'
import {FaLinkedin, FaGithub} from 'react-icons/fa'
import {HiOutlineMail} from 'react-icons/hi'

const Container = styled.ul`
  list-style: none;
  display: flex;
  justify-content: space-between;
  margin: 5rem 0 0 0;
  width: 15rem;

  @media (max-width: 768px) {
    width: 10rem;
    margin-top: 0;
    margin: auto;
  }
`

const SocialMediaItem = styled.li`
  margin: 0;
  opacity: 0;
`

const SocialMediaIcon = styled.i`
  width: 2rem;
  height: 2rem;
  display: inline-block;
  border-radius: 60px;
  box-shadow: 0 0 2px #888;
  padding: 0.5em 0.5em;

  @media (max-width: 768px) {
    width: 1.5rem;
    height: 1.5rem;
  }
`

const SocialMediaLink = styled.a`
  text-decoration: none;
  color: black;
`

interface SocialMediaProps {
  introductionAnimationCompleted: boolean
}

const SocialMedia: React.FC<SocialMediaProps> = ({
  introductionAnimationCompleted,
}) => {
  const socialMediaList = [
    {
      icon: HiOutlineMail,
      link: 'mailto:vkositthai@outlook.com',
    },
    {
      icon: FaLinkedin,
      link: 'https://www.linkedin.com/in/vipavee-kositthai/',
    },
    {
      icon: FaGithub,
      link: 'https://github.com/Kositthai',
    },
  ]

  useEffect(() => {
    if (introductionAnimationCompleted) {
      gsap.to('.media', {
        y: 20,
        duration: 0.3,
        stagger: 0.1,
        opacity: 1,
      })
    }
  }, [introductionAnimationCompleted])

  return (
    <div>
      <Container>
        {socialMediaList.map((item) => {
          return (
            <SocialMediaItem className="media" key={item.link}>
              <SocialMediaLink href={item.link} target="_blank">
                <SocialMediaIcon as={item.icon} />
              </SocialMediaLink>
            </SocialMediaItem>
          )
        })}
      </Container>
    </div>
  )
}

export default SocialMedia
