import styled from "styled-components";

export const Container = styled.main`
  width: 80%;
  height: calc(100vh - 100px - 4rem);
  margin: 2rem auto;
  padding: 2rem;
  box-shadow: rgba(100, 100, 111, 0.2) 0px 7px 29px 0px;
  border-radius: 1rem;
`;

export const Content = styled.div`
  width: 100%;
  display: flex;
  gap: 2rem;
`;

export const Img = styled.img`
  width: 300px;
`;

export const Aside = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1rem;
  border-radius: 1rem;
  box-shadow: rgba(100, 100, 111, 0.2) 0px 7px 29px 0px;
  
  .title {
    background-color: #435058;
    color: #c7cdd3;
    padding: 1rem;
    text-align: center;
    font-size: 1.4rem;
    font-weight: 500;
    font-family: 'Oswald', sans-serif;
    
  }
  .date {
    color: hsl(0, 45%, 50%);
    font-family: 'Oswald', sans-serif;
    text-align: end;
    padding: 0rem 2.5rem;
    font-weight: bold;
    font-size: 13px;
    padding: 1.5rem 0rem;
  }

  .detail {
    height: 100%;
    padding: 0rem 2.5rem;
    display: flex;
    flex-direction: column;
    line-height: 2rem; 
    color: #343a40;
    .overview {
      margin-bottom: auto;
    }
  }

  .subtitle { 
      width: 100%;
      font-family: 'Oswald', sans-serif;
      padding: 1rem 2rem;
      color: #343a40;
      gap: 1rem;

      p {
        margin-bottom: 8px;
      }
    }
`;
