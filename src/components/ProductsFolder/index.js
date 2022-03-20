import React from "react";
import {
  ProductsContainer,
  ProductWrapper,
  ProductTitle,
  ProductImg,
  ProductButton,
  ProductCard,
  ProductDesc,
  ProductInfo,
  ProductPrice,
} from "./ProductsElements";

const ProductsSection = ({ data }) => {
  return (
    <ProductsContainer>
      <ProductWrapper>
        {data.map((product, index) => {
          return (
            <ProductCard key={index}>
              <ProductInfo>
                <ProductTitle>{product.name}</ProductTitle>
                <ProductDesc>{product.desc}</ProductDesc>
                <ProductPrice>{product.price}</ProductPrice>
                <ProductButton>{product.button}</ProductButton>
              </ProductInfo>
              <ProductImg src={product.img} alt={product.alt} />
            </ProductCard>
          );
        })}
      </ProductWrapper>
    </ProductsContainer>
  );
};

export default ProductsSection;
