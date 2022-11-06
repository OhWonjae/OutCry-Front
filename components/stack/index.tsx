import styled from "@emotion/styled";

const Stack = styled.div<{
  direction?: "row" | "column";
  justifyContent?: "space-between" | "flex-start" | "flex-end" | "center";
  wrap?: "wrap" | "nowrap";
}>`
  display: flex;
  flex-wrap: wrap;
  flex-direction: ${(props) => props.direction};
  justify-content: ${(props) => props.justifyContent};
`;

export default Stack;
