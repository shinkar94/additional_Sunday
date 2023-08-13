import styled from "styled-components";

const RightContent = styled.div`
    display: flex;
    flex-direction: column;
    gap: 10px;
    max-height: 90vh;
    overflow: auto;

    .product {
      background: coral;
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