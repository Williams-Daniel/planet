import { Link } from "react-router-dom";
import React from "react";
import  styled from "styled-components"

const Header = () => {
  return <div>
    <Container>
        <Main>
            <Logo to="/">Williams Daniel</Logo>

            <LinkHolder>
            <Holder to="/mercury">Mercury</Holder>
            <Holder to="/venus">Venus</Holder>
            <Holder to="/earth">Earth</Holder>
            <Holder to="/mars">Mars</Holder>
            <Holder to="/jupiter">Jupiter</Holder>
            <Holder to="/saturn">Saturn</Holder>
            <Holder to="/uranus">Uranus</Holder>
            <Holder to="/neptune">Neptune</Holder>
            </LinkHolder>
        </Main>
    </Container>
  </div>;
};

export default Header;
 
const Container =styled.div`
width: 100%;
height: 80px;
border-bottom: 1px solid silver;
display:flex;
justify-content: center;
position: fixed;
`
const Main =styled.div`
width: 90%;
height: 100%;
display: flex;
justify-content: space-between;
align-items: center;

`
const Logo =styled(Link)`
font-weight: 700  ;
text-decoration: none;
color: black;
font-size: 25px;
`
const LinkHolder =styled.div`
display:flex;
justify-content: center;
`
const Holder =styled(Link)`
padding: 0 10px ;
font-weight: 700 ;
text-decoration: none;
color: black; 
`


