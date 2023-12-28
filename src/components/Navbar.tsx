import styled from 'styled-components'

const Container = styled.div`
  display: flex;
  align-items: center;
  font-family: 'Franklin Gothic Medium', 'Arial Narrow', Arial, sans-serif;
  padding: 3rem 7rem;

  @media (max-width: 1024px) {
    padding: 1rem;
  }

  :hover {
    text-decoration: underline;
  }
`
const Logo = styled.div`
  font-size: 2rem;
  color: ${({theme}) => theme.white};
  background: ${({theme}) => theme.primary};
  width: 3rem;
  height: 2rem;
  display: flex;
  justify-content: center;
  align-items: center;
`

const NavbarItem = styled.li`
  margin: 0 2rem;
  list-style: none;
`

const NavbarList = styled.ul`
  list-style: none;
  display: flex;
`

const Link = styled.a`
  text-decoration: none;
  color: ${({theme}) => theme.primary};
`

const Navbar: React.FC = () => {
  return (
    <Container>
      <Logo>VK</Logo>
      <NavbarItem>
        <Link href="#about">About me</Link>
      </NavbarItem>
      <NavbarList>
        <NavbarItem>
          <Link href="#work">Projects</Link>
        </NavbarItem>
      </NavbarList>
    </Container>
  )
}

export default Navbar
