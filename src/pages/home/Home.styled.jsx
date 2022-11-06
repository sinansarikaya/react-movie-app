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
`;

export const Card = styled.div`
  height: 350px;
  overflow: hidden;
  box-shadow: rgba(100, 100, 111, 0.2) 0px 7px 29px 0px;
  border-radius: 1rem;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  cursor: pointer;
  &:hover {
    border: 1px solid silver;
  }
`;

export const CartTitle = styled.div`
  width: 100%;
  height: 15%;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: #435058;
  color: #c7cdd3;
  font-size: 1.2rem;
`;

export const Img = styled.img`
  width: 100%;
  height: 85%;
  object-fit: cover;
`;
