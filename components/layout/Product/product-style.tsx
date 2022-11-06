import styled from "@emotion/styled";

export const ProductStyle = styled.div`
  width: 24%;
  height: 450px;
  border: #d9d9d9;
  border-style: solid;
  margin-right: 12px;
  margin-bottom: 10px;
  padding: 10px;
  &:hover {
    background-color: #21b6c8;
    color: white;
    button {
      background-color: white;
      color: black;
      border-style: solid;
    }
  }
`;
export const ProductButton = styled.button`
  border-radius: 100px;
  padding: 14px;
  color: white;
  background-color: #21b6c8;
  border-style: none;
  font-size: 1em;
  width: 45%;

  &:hover {
    background-color: white;
    color: black;
    border-style: solid;
  }
`;
