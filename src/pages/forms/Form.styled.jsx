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
`;

export const Form = styled.form`
  height: calc(100vh - 100px);
  width: 600px;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  padding: 2rem;
  gap: 1rem;
`;

export const Input = styled.input`
  width: 80%;
  padding: 0.8rem 1rem;
  box-shadow: rgba(100, 100, 111, 0.2) 0px 7px 29px 0px;
  outline: none;
  border: 0;
  border-radius: 0.5rem;
`;

export const Button = styled.button`
  width: 80%;
  padding: 0.8rem 1rem;
  cursor: pointer;
  outline: none;
  border: 0;
  background-color: #f6ae2d;
  color: #f5f5f5;
  user-select: none;
  border-radius: 0.5rem;
`;
