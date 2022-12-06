import styled from "styled-components";
import { ButtonProps } from "./interface";

export const Button = styled.button<ButtonProps>((props) => ({
  ":hover": props.hoverStyle,
  ":active": props.activeStyle,
  ...props.style,
}));
