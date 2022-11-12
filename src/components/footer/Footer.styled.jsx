import styled from "styled-components";

export const FooterContainer = styled.footer`
  background-color: #435058;
  height: 100px;
  color: #c7cdd3;
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 1rem;
  a {
    color: #c7cdd3;
    font-weight: bold;
    text-decoration: underline;
    transition: color 0.3s ease-in-out;
    &:hover {
      color: hsl(209.99999999999991, 11.999999999999984%, 70%);
    }
  }
`;

export const Line = styled.div`
  height: 100%;
  width: 0.2rem;
  background-color: #c7cdd3; ;
`;

export const Social = styled.div`
  font-size: 1.7rem;
  display: flex;
  align-items: center;
  gap: 0.5rem;
`;
