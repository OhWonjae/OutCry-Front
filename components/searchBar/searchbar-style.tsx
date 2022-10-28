import styled from "@emotion/styled";

export const SearchbarStyle = styled.input`
  width: calc(100% - 80px);
  height: 50px;
  margin: 10px 5px 10px 0px;
  padding-left: 10px;
  border-width: 0.1em;
  border-color: rgba(44, 43, 43, 0.22);
  &:hover {
    border-color: #9df1fb;
    border-width: 0.1em;
  }
`;
export const SearchbarButtonStyle = styled.button`
  width: 75px;
  height: 50px;
  padding-left: 10px;
  border-style: none;
  background-color: #48d5f5;
  color: white;

  &:hover {
    background-color: black;
  }
`;
