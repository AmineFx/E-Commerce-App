import React, { useEffect, useState } from 'react'
import { popularProducts } from '../data';
import styled from 'styled-components';
import Product from './Product'; 
import axios from "axios";

const Container = styled.div`
    display : flex;
    padding : 20px;
    flex-wrap : wrap;
    justify-content : space-between
`;


 const Products = ({cat, filters, sort}) => {
    const [products, setProducts] = useState([]);
    const [filters, setFiltersProducts] = useState([]);

    useEffect(() => {
      const getProdcuts = async () => {
        try  {
          const res = await axios.get("http://localhost:5173/api/products");
          console.log(res);
             }
        catch(err) {
          console.log(err)
                   }
      }
    

    },[cat]);
  //console.log(cat, filters, sort)
  return (
    <Container>
   
    { popularProducts.map((item) => (
      <Product item = {item} key={item.id}/>
    ))}


    </Container>
  )
}

export default Products;
