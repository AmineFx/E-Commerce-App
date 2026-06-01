import React from 'react';
import styled from 'styled-components';
import {
  ShoppingCartOutlined,
  SearchOutlined,
  FavoriteBorderOutlined
} from "@mui/icons-material";

const Container = styled.div`
  flex: 1;
  margin: 5px;
  min-width : 280px;
  height : 350px;
  display : flex;
  align-items : center;
  justify-content : center;
  background-color : #f5fbfd
`;

const Circle = styled.div`
    width : 200px;
    height : 200px;
    border-raduis : 50%;
    background-color : white;
    position : absolute ;
`;

const Info = styled.div`
    width : 100%;
    
`;

const Image = styled.img`
  height :75%;
  z-index : 2;
`;

const Icon = styled.div``;

const Product = ({ item }) => {
  return (
    <Container>
      <Circle />

      <Image src={item.img} alt="product" />

      <Info>
        <Icon>
          <ShoppingCartOutlined />
        </Icon>

        <Icon>
          <SearchOutlined />
        </Icon>

        <Icon>
          <FavoriteBorderOutlined />
        </Icon>
      </Info>
    </Container>
  );
};

export default Product;