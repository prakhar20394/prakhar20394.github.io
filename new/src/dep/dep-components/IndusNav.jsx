import React from "react";
import styled from "styled-components";
import { NavLink } from "react-router-dom";

const Rail = styled.nav`
  position: fixed;
  inset: 0 0 0 0;
  width: 72px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  background: #0e0e0e;
  border-right: 2px solid #232323;
  padding: 32px 0;
`;

const Logo = styled(NavLink)`
  writing-mode: vertical-rl;
  transform: rotate(180deg);
  font-size: 20px;
  font-weight: 700;
  text-decoration: none;
  color: #faf7f2;
  padding: 16px 0;
`;

const Menu = styled.div`
  display: flex;
  flex-direction: column;
  gap: 32px;
  writing-mode: vertical-rl;
  transform: rotate(180deg);
`;

const Item = styled(NavLink)`
  font-size: 15px;
  letter-spacing: 0.05em;
  text-transform: uppercase;
  color: #faf7f2;
  opacity: 0.45;
  transition: opacity 0.18s, color 0.18s;

  &.active {
    opacity: 1;
    color: #ad4f2b;
  }
  &:hover {
    opacity: 0.7;
  }
`;

export default function IndusNav() {
  return (
    <Rail>
      <Logo to="/">PB</Logo>

      <Menu>
        <Item to="/projects">Work</Item>
        <Item to="/skills">Skills</Item>
        <Item to="/about">About</Item>
        <Item to="/blog">Writing</Item>
        <Item to="/contact">Contact</Item>
      </Menu>
    </Rail>
  );
}
