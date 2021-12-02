import styled from "styled-components"
import React, {
  ReactElement,
  ReactChildren,
  ReactChild,
  // RefObject,
} from "react"

interface Props {
  bgDefault?: string
  bgHover?: string
  bgActive?: string
  children?: ReactChild | ReactChildren
  href?: string
}
interface ButtonProps {
  bgDefault?: string
  bgHover?: string
  bgActive?: string
}
const Button = styled.div<ButtonProps>`
  height: 40px;
  display: flex;
  justify-content: center;
  align-items: center;
  color: rgba(0, 0, 0, 0.87);
  padding: 6px 16px;
  min-width: 64px;
  box-sizing: border-box;
  border-radius: 4px;
  letter-spacing: 0.02857em;
  background-color: ${(props) => props.bgDefault || "#e0e0e0"};
  transition: background-color 250ms cubic-bezier(0.4, 0, 0.2, 1) 0ms,
    box-shadow 250ms cubic-bezier(0.4, 0, 0.2, 1) 0ms,
    border 250ms cubic-bezier(0.4, 0, 0.2, 1) 0ms;
  box-shadow: 0px 3px 1px -2px rgb(0 0 0 / 20%),
    0px 2px 2px 0px rgb(0 0 0 / 14%), 0px 1px 5px 0px rgb(0 0 0 / 12%);
  &:hover {
    background-color: ${(props) => props.bgHover || "#d5d5d5"};
    box-shadow: 0px 2px 4px -1px rgb(0 0 0 / 20%),
      0px 4px 5px 0px rgb(0 0 0 / 14%), 0px 1px 10px 0px rgb(0 0 0 / 12%);
  }
  &:active {
    box-shadow: 0px 5px 5px -3px rgb(0 0 0 / 20%),
      0px 8px 10px 1px rgb(0 0 0 / 14%), 0px 3px 14px 2px rgb(0 0 0 / 12%);
    background-color: ${(props) => props.bgActive || "#c0c0c0"};
  }
`
const aaa = ({
  bgDefault,
  bgHover,
  bgActive,
  children,
}: Props): ReactElement => {
  // interface ButtonBProps extends Button {
  //   color: string
  // }
  // const ButtonModified = styled(Button)<ButtonBProps>`
  //   height: 40px;
  // `
  return (
    <>
      <Button bgDefault={bgDefault} bgHover={bgHover} bgActive={bgActive}>
        {children}
      </Button>
    </>
  )
}
export default aaa
