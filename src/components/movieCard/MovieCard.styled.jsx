import styled from "styled-components";

export const Card = styled.div`
  height: 450px;
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
export const VoteContainer = styled.div`
  height: 100px;
  font-weight: 700;
  color: #c7cdd3;
  .flex {
    display: flex;
    justify-content: center;
    align-items: center;
    width: 100%;
    height: 100%;
  }
  .red {
    background-color: #f05454;
  }
  .green {
    background-color: #198754;
  }
  .orange {
    background-color: #ffc107;
    color: #435058;
  }
`;
