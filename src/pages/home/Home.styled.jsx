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

export const Card = styled.div`
  height: 400px;
  overflow: hidden;
  box-shadow: rgba(100, 100, 111, 0.2) 0px 7px 29px 0px;
  border-radius: 2%;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  cursor: pointer;
  text-align: center;
  &:hover {
    border: 1px solid silver;
  }
`;

export const CartTitle = styled.div`
  width: 100%;
  height: 20%;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: #435058;
  color: #c7cdd3;
  font-size: 1.2rem;
  font-family: "Oswald", sans-serif;

  @media (max-width: 1430px) {
    font-size: 1rem;
  }
  @media (max-width: 1220px) {
    font-size: 0.8rem;
  }
`;

export const ImgContainer = styled.div`
  width: 100%;
  height: 85%;
`;
export const Img = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
`;
