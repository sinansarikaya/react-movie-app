import styled from "styled-components";

export const NotFoundContainer = styled.div`
  width: 100%;
  height: calc(100vh - 100px);
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  gap: 2rem;
  overflow: hidden;
`;

export const Img = styled.img`
  box-shadow: rgba(100, 100, 111, 0.2) 0px 7px 29px 0px;
  width: 80%;
  border-radius: 0.5rem;
`;

export const Button = styled.button`
  width: 80%;
  padding: 0.8rem 1rem;
  cursor: pointer;
  outline: none;
  border: 0;
  background-color: #435058;
  color: #f5f5f5;
  user-select: none;
  border-radius: 0.5rem;
  transition: background-color 0.3s ease-in-out;
  font-size: 1rem;
  &:hover {
    background-color: hsl(202.85714285714286, 13.548387096774189%, 40%);
  }
`;
