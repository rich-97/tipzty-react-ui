import { Button } from "antd";
import styled from "styled-components";

const StyledButton = styled(Button)<{
  family?: string;
  width?: number;
  height?: number;
  fontSize?: string;
  weight?: string;
  color?: string;
  borderRadius?: number;
}>`
  font-size: ${(props) => (props.fontSize ? props.fontSize : "16px")};
  font-family: ${(props) => (props.family ? props.family : "Work Sans")};
  font-weight: ${(props) => (props.weight ? props.weight : "bold")};
  border-radius: ${(props) =>
    props.borderRadius ? `${props.borderRadius}` : "10px"};
  width: ${(props) =>
    props.width ? `${props.width}px` : props.block ? "100%" : "auto"};
  height: ${(props) => (props.height ? `${props.height}px` : "40px")};
  color: ${(props) => (props.color ? props.color : "auto")};
`;

export default StyledButton;
