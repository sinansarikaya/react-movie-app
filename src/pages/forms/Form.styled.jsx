import styled from "styled-components";
import formBg from "../../assets/formBg.jpg";

export const Container = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-between;
`;

export const Aside = styled.aside`
  height: calc(100vh - 100px);
  width: calc(100% - 600px);
  background: url(${formBg}) no-repeat;
  background-position: center;
  object-fit: cover;
  @media (max-width: 900px) {
    display: none;
  }
`;

export const Form = styled.form`
  height: calc(100vh - 100px);
  width: 600px;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  padding: 2rem;
  gap: 2rem;
  @media (max-width: 900px) {
    width: 100%;
  }
  @media (max-width: 450px) {
    padding: 0;
  }
`;

export const Title = styled.h1`
  color: #435058;
  @media (max-width: 450px) {
    font-size: 1.5rem;
  }
`;

export const Row = styled.div`
  width: 80%;
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
`;

export const Label = styled.label`
  color: #435058;
`;

export const Input = styled.input`
  width: 100%;
  padding: 0.8rem 1rem;
  box-shadow: rgba(100, 100, 111, 0.2) 0px 7px 29px 0px;
  outline: none;
  border: 0;
  border-radius: 0.5rem;
  background-color: hsl(209.99999999999991, 11.999999999999984%, 88%);
  color: #435058;
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
