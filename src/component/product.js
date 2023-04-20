import React from "react";
import styled from "styled-components";

const Card = styled.div`
  width: 300px;
  margin-bottom: 50px;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
`;

const Image = styled.img`
  width: 100%;
`;

const Title = styled.h3`
  font-size: 1.2rem;
  margin: 0;
`;

const Price = styled.p`
  font-size: 1.2rem;
  margin: 5px 0;
`;

const Main = ({ product }) => {
  return (
    <ImageSlider />
    <div>
      <h2>Bestsellers</h2>
    </div>
    <Card>
      <Image src={product.image} alt={product.title} />
      <Title>{product.title}</Title>
      <Price>Rs.{product.price}</Price>
      <button>Add to cart</button>
    </Card>
  );
};
export default Main;
