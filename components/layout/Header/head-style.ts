import styled from "@emotion/styled";
export const HeadStyle = styled.div`
  background-color: black;
  padding: 0px 100px 0px 100px;
`;

export const HeadLine = styled.div`
  display: flex;
  justify-content: center;
`;

export const HeadTitle = styled.h1<{ fontSize: string }>`
  color: white;
  font-size: ${(props) => props.fontSize};
  margin: 0px 0px 16px 0px;
`;

export const HeadButton = styled.button`
  border-radius: 100px;
  padding: 14px;
  color: black;
  background-color: #9df1fb;
  border-style: none;
  margin: 0px 5px 16px 5px;
  font-size: 1em;

  &:hover {
    background-color: rgba(44, 43, 13, 10.22);
    color: white;
  }
`;
