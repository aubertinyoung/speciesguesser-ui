import styled from "styled-components";

export const OptionsRow = styled.div`
  display: flex;
  justify-content: space-between;
  // min-height: 500px;
  width: 100%;
  margin: 0px 0;
  flex-wrap: wrap;
`;

export const OptionsElement = styled.button`
  border-radius: 10px;
  // border: 1px grey solid;
  // border: 1px #ffffff solid;
  // background: white;
  font-weight: 500;
  width: 45%;
  min-height: 50px;
  padding: 10px;
  margin: 5px;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  text-decoration: none;
  opacity: 0.75;
`;
