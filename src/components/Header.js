import React from "react";
import styled from "styled-components";

const LinkContainer = styled.span`
  display: flex;
  flex-direction: row;
  justify-content: space-evenly;
  align-items: center;
  width: 100%;
`;

const Links = styled.a`
  text-decoration: none;
  color: rgb(46, 46, 46);
`;

const Header = () => {
  return (
    <>
      <LinkContainer>
        <Links href="#projects">PROJECTS</Links>
        <Links href="">SOCIAL</Links>
      </LinkContainer>
    </>
  );
};

export default Header;
