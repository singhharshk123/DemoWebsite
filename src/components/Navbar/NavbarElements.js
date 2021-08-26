 import { FaBars } from 'react-icons/fa';
import { NavLink as Link } from 'react-router-dom';
import styled from 'styled-components';

export const Nav = styled.nav`
  background: white;
  height: 40px;
  display:flex ;
  justify-content: space-between;
`;

export const NavLink = styled(Link)`
  color: #101d12;
  display:block;
  text-decoration: none;
  padding: 0.5rem;
  height: 100%;
  cursor: pointer;
  }
`;

export const Bars = styled(FaBars)`
font-family: "Poppins",sans-serif;
    background: #faeacc;
    height: 80px;
    margin: 0!important;
    width: 100%;
 
  @media screen and (max-width: 768px) {
    display: block;
    position: absolute;
    top: 0;
    right: 0;
    transform: translate(-100%, 75%);
    font-size: 1.8rem;
    cursor: pointer;
  }
`;

export const NavMenu = styled.div`
font-family: "Poppins",sans-serif;
    background: #faeacc;
    height: 80px;
    margin: 0!important;
    width: 100%;
  display: flex;
  @media screen and (max-width: 768px) {
    display: none;
  }
`;