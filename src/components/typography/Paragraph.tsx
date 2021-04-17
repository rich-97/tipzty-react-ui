import styled from "styled-components";

interface Props {
  size?: string;
  weight?: string;
  family?: string;
  marginTop?: string;
  marginLeft?: string;
  marginRight?: string;
  marginBottom?: string;
  textAlign?: string;
  color?: string;
  error?: boolean;
  lines?: number;
  width?: number;
}

const Paragraph = styled.p<Props>`
  margin: 0;
  padding: 0;
  font-size: ${(props) => props.size};
  color: ${(props) => props.color};
  font-family: ${(props) => (props.family ? props.family : "Lato")};
  font-weight: ${(props) => props.weight};
  margin-top: ${(props) => props.marginTop};
  margin-bottom: ${(props) => props.marginBottom};
  margin-left: ${(props) => props.marginLeft};
  margin-right: ${(props) => props.marginRight};
  text-align: ${(props) => props.textAlign};
  width: ${(props) => (props.width ? `${props.width}px` : "auto")};

  ${(props) =>
    props.lines
      ? `
    overflow: hidden;
    text-overflow: ellipsis;
    display: -webkit-box;
    -webkit-line-clamp: ${props.lines};
    -webkit-box-orient: vertical;
  `
      : ""}
`;

export default Paragraph;
