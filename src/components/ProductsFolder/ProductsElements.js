import styled from "styled-components";

export const ProductsContainer = styled.div`
  width: 100vw;
  min-height: 100vh;
  color: #242424;
`;

export const ProductWrapper = styled.div`
  display: flex;
  flex-flow: column;
  align-items: center;
  justify-content: center;
  margin: 0 auto;
`;

export const ProductCard = styled.div`
  margin: 0 2rem;
  line-height: 2;
  width: 600px;
  padding-bottom: 30px;
`;

export const ProductImg = styled.img`
  height: 350px;
  min-width: 100%;
  max-width: 100%;
  background-color: transparent;
`;

export const ProductTitle = styled.h2`
  font-weight: 700;
  font-size: 3rem;
`;

export const ProductInfo = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 2rem;
  text-align: center;
`;

export const ProductDesc = styled.p`
  margin-bottom: 1rem;
  font-weight: 700;
  font-size: 1.5rem;
`;

export const ProductPrice = styled.p`
  margin-bottom: 1rem;
  font-size: 1.5rem;
  font-weight: 700;
`;
export const ProductButton = styled.button`
  font-size: 1rem;
  padding: 1rem, 4rem;
  border: none;
  background: #fff;
  color: #0066cc;
  transition: 0.2 ease-out;

  &:hover {
    transition: 0.2s ease-out;
    cursor: pointer;
    text-decoration: underline;
  }
`;
