import styled from 'styled-components'

const Container = styled.div`
  display: flex;
  align-items: center;
  font-family: 'Franklin Gothic Medium', 'Arial Narrow', Arial, sans-serif;
  padding: 3rem 7rem;
`
const Logo = styled.div`
  font-size: 2rem;
  color: white;
  background: black;
  width: 3rem;
  height: 2rem;
  display: flex;
  justify-content: center;
  align-items: center;
`

const NavbarList = styled.ul`
  list-style: none;
  display: flex;
`

const NavbarItem = styled.li`
  margin: 0 2rem;
  list-style: none;
`

const Link = styled.a`
  text-decoration: none;
  color: #37342f;
`

const Navbar: React.FC = () => {
  return (
    <Container>
      <Logo>VK</Logo>
      <NavbarItem>
        <Link href="#about">About</Link>
      </NavbarItem>
      <NavbarList>
        <NavbarItem>
          <Link href="#work">Projcects</Link>
        </NavbarItem>
        <NavbarItem>Contact</NavbarItem>
      </NavbarList>
    </Container>
  )
}

export default Navbar
