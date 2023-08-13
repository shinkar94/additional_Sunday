import styled from "styled-components";

const SideBar = styled.div<{size:number}>`
  position: absolute;
  top: 0;
  left: 0;
  width: 180px;
  height: calc(100vh - 70px);
  display: flex;
  flex-direction: column;
  background: #fdfdfd;
  padding-top: 10px;
  box-shadow: 2px 0 10px 1px;

  & a {
    background: white;
    cursor: pointer;
    color: black;
    font-size: 18px;
    padding: 4px;
    text-decoration: none;
    transition: background 2s ease-out;
    border-bottom: 1px solid gray;

    &:hover {
      color: white;
      background: linear-gradient(45deg, #d93b3b, #917491);
    }
  }
`

export const S = {
    SideBar
}