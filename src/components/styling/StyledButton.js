import React from "react";
import styled from "styled-components";

const StyledButton = styled.button`
  height: 36px;
  width: 147px;

  & .rectangle {
    background-color: #efefef;
    border: 1px solid;
    border-color: #000000;
    border-radius: 74px;
    height: 36px;
    left: 0;
    position: fixed;
    top: 0;
    width: 147px;
  }
`;

export const Box = () => {
  return (
    <StyledButton>
      <div className="long-button" />
    </StyledButton>
  );
};