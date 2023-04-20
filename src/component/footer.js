import React from "react";
import styled from "styled-components";

const Foot = styled.footer`
  display: flex;
  justify-content: space-between;
  align-items: center;
  background-color: #fff;
  height: 50px;
  padding: 0 50px;
`;

const Text = styled.p`
  font-size: 1rem;
  color: #000;
`;

const Footer = () => {
  return <Foot></Foot>;
};

export default Footer;
