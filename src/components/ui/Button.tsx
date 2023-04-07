import styled from "styled-components";

const Button = styled.button.attrs({
  type: "button",
})`
  border: 0.1rem solid #888;
  background: transparent;
  color: ${(props) => props.theme.colors.primary};
  cursor: pointer;
`;

export default Button;
