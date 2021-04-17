import styled from "styled-components";

interface Props {
  width?: number;
  size?: string;
  weight?: string;
  marginTop?: string;
  marginLeft?: string;
  marginRight?: string;
  marginBottom?: string;
  textAlign?: string;
  color?: string;
  error?: boolean;
  family?: string;
  lines?: number;
  lineHeight?: number;
}

const Span = styled.span`
  margin: 0;
  padding: 0;
  width: ${(props: Props) => (props.width ? `${props.width}px` : "auto")};
  line-height: ${(props: Props) => (props.lineHeight ? props.lineHeight : 1)};
  font-size: ${(props: Props) => props.size};
  color: ${(props: Props) => (props.error ? "red" : props.color)};
  font-family: ${(props: Props) => (props.family ? props.family : "Lato")};
  font-weight: ${(props: Props) => props.weight};
  margin-top: ${(props: Props) => props.marginTop};
  margin-bottom: ${(props: Props) => props.marginBottom};
  margin-left: ${(props: Props) => props.marginLeft};
  margin-right: ${(props: Props) => props.marginRight};
  text-align: ${(props: Props) => props.textAlign};
  display: inline-block;

  ${(props: Props) =>
    props.lines
      ? `
    overflow: hidden;
    text-overflow: ellipsis;
    display: -webkit-box;
    -webkit-line-clamp: ${props.lines};
    -webkit-box-orient: vertical;
  `
      : ""}

  &:hover {
    color: ${(props: Props) => props.color};
  }
`;

export default Span;
