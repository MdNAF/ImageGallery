import React from "react";
import styled from "styled-components";

const Button = ({ children, onClick }) => {
  return <ButtonOutlined onClick={onClick}>{children}</ButtonOutlined>;
};

export default Button;

// css styling using styled component
const ButtonOutlined = styled.button`
  display: flex;
  align-items: center;
  gap: 8px;
  padding: 10px 20px;
  background-color: transparent;
  color: #595959;
  font-size: 16px;
  border: 2px solid var(--theme);
  border-radius: 50px;
  transition: 0.3s;
  cursor: pointer;
  user-select: none;
  &:hover {
    background-color: var(--theme);
    color: #fff;
  }
  i {
    font-size: 14px;
  }
`;
