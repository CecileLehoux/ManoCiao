import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';

function CurrationPage() {
    return (
        <>
            <TextHolder>
                <h1>Choisissez le style de votre intérieur</h1>
                <h3>En fonction de votre choix nous allons vous séléctionner un panel de couleur et de meubles assortis</h3>
            </TextHolder>
            <Container>
            <Link to={'/ColorPage'} >
                <div>
                    <Title2>Salon industriel</Title2>
                    <Image src="../../assets/images/salon-industriel.jpeg" alt='salon1'/> </div>
            </Link>
                <div>
                <Title2>Salon scandinave</Title2>
                    <Image src='../../assets/images/scandinave-salon.jpeg' alt='salon1'/> </div>
                <div>
                <Title2>Salon cosy</Title2>
                    <Image src='../../assets/images/salon-cosy.jpeg' alt='salon1'/> </div>
                <div>
                <Title2>Salon vintage</Title2>
                    <Image src='../../assets/images/salon-vintage.jpeg' alt='salon1'/> </div>
            </Container>
           
        
        </>
    )
}

const TextHolder = styled.div`
display: flex;
flex-direction: column;
text-align: center;
justify-content: center;
align-items: center;
padding: none;
@media screen and (max-width: 880px) {
    width: 80%;
    margin:0 auto;
}
`
const Container = styled.div`
display: flex;
flex-direction: row;
flex-wrap: wrap;
justify-content: space-around;
border-radius: 10px;
margin-left: 1rem;
margin-right: 1rem;
padding: 1rem;
width: 63%;
margin: 0 auto;
gap: 4rem;
`
const ChoiceHolder = styled.div`
display: flex;
flex-direction: column;
align-items: center;
justify-content: space-around;
h3 {
    color: white;
    font-weight: bold;
    font-size: x-large;
    width: 80%;
}
&:hover {
    transform: scale(1.1);
    transition: 0.3s;
}
`
const Image = styled.img`
width: 26rem;
height: 15rem;
display: flex;
justify-content: center;
align-items: center;
border-radius : 30px;
box-shadow: rgba(0, 0, 0, 0.35) 0px 5px 15px;
&:hover {
    transform: scale(1.1);
    transition: 0.3s;
}
&:active {
 background-color: aquamarine;
}
@media screen and (max-width: 880px) {
    width: 21rem;
}
`
const Title2 = styled.h3`
width: 26rem;
text-align:center;
@media screen and (max-width: 880px) {
    width: 21rem;
}

`


export default CurrationPage;