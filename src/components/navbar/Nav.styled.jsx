import styled from "styled-components";

export const Nav = styled.div`
  background-color: #435058;
  color: #fff;
  height: 100px;
  padding: 0.5rem 2rem;
  font-size: 1.2rem;
  ul {
    display: flex;
    justify-content: space-between;
    align-items: center;
    height: 100%;
  }
  @media (max-width: 530px) {
    font-size: 1rem;
  }
  @media (max-width: 375px) {
    font-size: 0.7rem;
    padding: 0.5rem;
  }
`;

export const LogoImg = styled.img`
  height: 90px;
  @media (max-width: 530px) {
    height: 60px;
  }
  @media (max-width: 375px) {
    height: 50px;
  }
`;

export const NavAside = styled.div`
  display: flex;
  align-items: center;
  gap: 1rem;
  a {
    color: #fff;
    padding: 1.3rem 1rem;
    transition: background-color 0.3s ease-in-out;
    border-radius: 0.5rem;
    &:hover {
      background-color: #ef6461;
    }
  }
`;

export const Button = styled.button`
  background: none;
  border: 0;
  outline: none;
  color: #fff;
  cursor: pointer;
  transition: background-color 0.3s ease-in-out;
  padding: 1.3rem 1rem;
  border-radius: 0.5rem;
  font-size: 1.2rem;
  &:hover {
    background-color: #ef6461;
  }
  @media (max-width: 530px) {
    font-size: 1rem;
  }
  @media (max-width: 375px) {
    font-size: 0.7rem;
    padding: 1.3rem 0.7rem;
  }
`;
