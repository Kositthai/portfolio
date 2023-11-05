import styled from 'styled-components';

const Container = styled.div`
  display: flex;
  margin: 0rem 7rem;
  align-items: center;
  font-family: 'Franklin Gothic Medium', 'Arial Narrow', Arial, sans-serif;
`;
const Logo = styled.div`
  font-size: 2rem;
  color: white;
  background: black;
  width: 3rem;
  height: 2rem;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const NavbarList = styled.ul`
  list-style: none;
  display: flex;
`;

const NavbarItem = styled.li`
  margin: 0 2rem;
`;

const Navbar = () => {
  return (
    <Container>
      <Logo>VK</Logo>
      <NavbarList>
        <NavbarItem>Work</NavbarItem>
        <NavbarItem>About</NavbarItem>
        <NavbarItem>Contact</NavbarItem>
      </NavbarList>
    </Container>
  );
};

export default Navbar;
