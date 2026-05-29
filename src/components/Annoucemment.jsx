import styled from "styled-components"

const Container = styled.div`
    height : 30px ;
    background-color : teal;
    color : white ;
    display : flex;
    align-items : center;
    justify-content : center;
    font-size : 14px;
    font-weight : 500;
    `;

 const Annoucemment = () => {
  return (
       <Container>
        Super Promotion £ Livraison Gratuite a partir de 300 MAD
       </Container>
  )
}

export default Annoucemment ;

