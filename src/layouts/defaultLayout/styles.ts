import styled from "styled-components";

export const LayoutContainer = styled.div`
  padding: 0 1.5rem;
  display: flex;
  flex-direction: column;
  align-items: center;

  > div {
    width: min(1120px, 100%);
  }
`;