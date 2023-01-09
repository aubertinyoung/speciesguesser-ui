import React from "react";
import styled from "styled-components";

export const ImageContainer = styled.div`
  border-radius: 5px;
  // width: 100%;
  // height: 65%;
  // background: red;
  margin: 10px 5px;
  // display: flex;
  // justify-content: center;
  // align-items: center;
  // position: relative;
`;

export const PhotoCredit = styled.div`
  // position: absolute;
  top: 0;
  right: 0;
  font-size: 0.9rem;
  display: flex;
  justify-content: flex-end;
  align-items: center;
  color: grey;
`;

export const Hint = styled.button`
  min-width: 50px;
  background: #8db3c9;
  border-radius: 5px;
  height: 100%;
  padding: 5px 10px;
  color: white;
  margin: 0;
  border: none;
  cursor: pointer;
  font-weight: 600;
`;
