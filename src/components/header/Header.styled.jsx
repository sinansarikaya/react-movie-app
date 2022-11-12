import styled from "styled-components";
import headerBg from "../../assets/header.jpg";

export const HeaderStyle = styled.header`
  width: 100%;
  height: 300px;
  background: url(${headerBg}) no-repeat;
  background-position: center;
  object-fit: cover;
  background-size: 100% auto;
  display: flex;
  justify-content: center;
  align-items: center;
  @media (max-width: 530px) {
    background-size: 100% 100%;
  }
`;

export const Search = styled.form`
  height: 50px;
  width: 75%;
  max-width: 800px;
  color: #b2b2b2;
  font-size: 1rem;
  font-weight: bold;
  border-radius: 2rem;
  background-color: #fff;
  display: flex;
  align-items: center;
  justify-content: space-between;
  border: 2px solid #ef6461;
  overflow: hidden;
  @media (max-width: 530px) {
    width: 95%;
  }
`;

export const Input = styled.input`
  width: 100%;
  height: 100%;
  border-top-left-radius: 2rem;
  border-bottom-left-radius: 2rem;
  outline: none;
  border: none;
  padding: 1rem 2rem;
  font-weight: 800;
  color: #435058; ;
`;

export const Button = styled.button`
  height: 50px;
  background-color: #ef6461;
  border-bottom-right-radius: 2rem;
  border-top-right-radius: 2rem;
  color: #eaf4f4;
  padding: 1rem 2rem;
  text-transform: uppercase;
  border: none;
  cursor: pointer;
  font-weight: 800;
  transition: background 0.3s ease-in-out;
  &:hover {
    background-color: #de706e;
  }
  @media (max-width: 275px) {
    padding: 1rem;
  }
`;
