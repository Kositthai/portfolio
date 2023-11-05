import styled from 'styled-components';
import {FaLinkedin, FaGithub} from 'react-icons/fa';
import {HiOutlineMail} from 'react-icons/hi';

const Container = styled.ul`
  list-style: none;
  display: flex;
  justify-content: space-between;
  margin: 0;
  width: 15rem;
  margin-top: 5rem;
`;

const SocialMediaItem = styled.li`
  margin: 0;
`;

const SocialMediaIcon = styled.i`
  width: 2rem;
  height: 2rem;
  display: inline-block;
  border-radius: 60px;
  box-shadow: 0 0 2px #888;
  padding: 0.5em 0.5em;
`;

const SocialMediaLink = styled.a``;

const SocialMedia = () => {
  const socialMediaList = [
    {
      icon: HiOutlineMail,
      link: 'https://www.linkedin.com/in/vipavee-kositthai/',
    },
    {
      icon: FaLinkedin,
      link: 'https://www.linkedin.com/in/vipavee-kositthai/',
    },
    {
      icon: FaGithub,
      link: 'https://www.linkedin.com/in/vipavee-kositthai/',
    },
  ];
  return (
    <div>
      <Container>
        {socialMediaList.map((item) => {
          return (
            <SocialMediaItem>
              <SocialMediaIcon as={item.icon} />
              <SocialMediaLink href={item.link} />
            </SocialMediaItem>
          );
        })}
      </Container>
    </div>
  );
};

export default SocialMedia;
