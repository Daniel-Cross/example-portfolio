import React from "react";

import styled from "styled-components";

const LinkContainer = styled.span`
  border-top: solid 1px gray;
  background-color: salmon;
  height: 100px;
  display: flex;
  flex-direction: row;
  justify-content: space-evenly;
  align-items: center;
  width: 100%;
`;

const Links = styled.a`
  text-decoration: none;
  color: white;
`;

const Footer = () => {
  return (
    <>
      <LinkContainer>
        <Links href="">FACEBOOK</Links>
        <Links href="">EMAIL</Links>
        <Links href="">LINKEDIN</Links>
      </LinkContainer>
    </>
  );
};

export default Footer;
