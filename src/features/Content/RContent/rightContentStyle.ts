import styled from "styled-components";

const RightContent = styled.div`
  display: flex;
  flex-direction: column;
  gap: 10px;
  max-height: calc(100vh - 80px);
  overflow: auto;
  padding: 10px;

  .product {
    background: linear-gradient(135deg, white, #e3e3e3);
    box-shadow: 2px 2px 4px 1px gray,
      -2px -2px 4px 1px #dadada;
    padding: 4px;
    border-radius: 4px;

    & p {
      margin: 2px;
    }

    & h3 {
      margin: 2px;
      background: #444444;
      color: white;
    }
  }
`

export const S = {
    RightContent
}