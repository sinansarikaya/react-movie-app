import styled from "styled-components";

export const Main = styled.main`
  width: 90%;
  margin: 2rem auto;
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  padding: 2rem;
  box-shadow: rgba(100, 100, 111, 0.2) 0px 7px 29px 0px;
  border-radius: 1rem;
  gap: 1.5rem;
  @media (max-width: 1024px) {
    grid-template-columns: repeat(3, 1fr);
  }
  @media (max-width: 768px) {
    grid-template-columns: repeat(2, 1fr);
  }
  @media (max-width: 530px) {
    grid-template-columns: 1fr;
  }
`;
