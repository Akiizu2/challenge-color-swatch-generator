import styled from "@emotion/styled";

export const ColorPadWrapper = styled("div", {
  shouldForwardProp: (prop) => prop !== "color",
})`
  flex: 1;
  max-width: 100%;

  display: flex;
  flex-direction: column;
  justify-content: flex-end;
  align-items: center;

  background-color: ${({ color }) => color};
  height: 300px;
  border-radius: 24px;

  overflow: hidden;

  @media screen and (max-width: 1023px) {
    flex: inherit;
    width: 100%;
    height: 250px;
  }
`;

export const ColorPadCssPropertyWrapper = styled("div")`
  align-self: stretch;
  background-color: #ddd;

  padding: 0.5rem;
`;
