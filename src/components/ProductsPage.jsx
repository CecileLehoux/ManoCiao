import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';

function ProductsPage() {
    return (
        <>
            <Link to={'/'} >
                <ArrowHolder>
                    <img src='assets/arrowReturn.jpg' alt='retour' width='75%' />
                </ArrowHolder>
            </Link>
            <TextHolder>
                <h1>Voici votre sélection</h1>
                <h3>Vos critères : aménagement, salon, meubles de confort, dominante marron</h3>
            </TextHolder>
            <Container>
                <SousContainer>
                <p>Dan - Canapé droit 3 places convertible - style industriel</p>
                    <Image src='../../assets/images/canape-marron.png' alt='salon1'/> 
                    <Button>Ajouter au panier</Button>
                    </SousContainer>
                <SousContainer>
                    <p>Fauteuil Marron Similicuir daim</p>
                    <Image src='../../assets/images/canape-marron-fonce.png' alt='salon1'/>
                    <Button>Ajouter au panier</Button>
                     </SousContainer>
                <SousContainer>
                    <p>Table Basse, style industriel</p>
                    <Image src='../../assets/images/table-basse.png' alt='salon1'/> 
                    <Button>Ajouter au panier</Button>
                    </SousContainer>

                <SousContainer>
                <p>Fauteuil Marron Similicuir daim</p>
                    <Image src='../../assets/images/fauteuil.png' alt='salon1'/> 
                    <Button>Ajouter au panier</Button>
                    </SousContainer>
            </Container>
                
                <TextHolder>
                <h2>Les produits complémentaires</h2>
                </TextHolder>
            <Container>
                <SousContainer>
                    <p>Bosch Perceuse sans-fil EasyDrill 1200 1 batterie 1,5 Ah</p>
                    <Image src='../../assets/images/visseuse.png' alt='salon1'/> 
                    <Button>Ajouter au panier</Button>
                    </SousContainer>
                <SousContainer>
                    <p>Chariot de transport diable bleu et noir - MAKITA TR00000001</p>
                    <Image src='../../assets/images/diable.png' alt='salon1'/>
                    <Button>Ajouter au panier</Button>
                     </SousContainer>
                <SousContainer>
                    <p>Coffret Ergokraft KRAFTWERK Tournevis porte-embouts 138 Outils</p>
                    <Image src='../../assets/images/tournevis.png' alt='salon1'/> 
                    <Button>Ajouter au panier</Button>
                    </SousContainer>
              
           </Container>
           
           
        
        </>
    )
}

const ArrowHolder = styled.div`
    border: solid 1px #179E9F;
    width: 2rem;
    height: 2rem;
    border-radius: 50%;
    overflow: hidden;
    display: flex;
    justify-content: center;
    align-items: center;
    margin-left: 1rem;
    position: absolute;
    &:hover {
    transform: scale(1.1);
    transition: 0.3s;
}
`
const TextHolder = styled.div`
display: block;
text-align: center;
padding: 1.5rem;
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
@media screen and (max-width: 880px) {
    width: 80%;
}
`
const SousContainer = styled.div`
justify-content: space-around;
width: 30%;
box-shadow: rgba(0, 0, 0, 0.35) 0px 5px 15px;
border-radius: 10px;
padding: 1rem;
text-align:center;
@media screen and (max-width: 880px) {
    width: 85%;
}


;
`
const Button = styled.button`
padding: 0.5rem;
background-color:#179E9F ;
border: 1px solid #fff; 
color: #ffffff;
border-radius:10px;
font-size: 16px;
margin-top: 1rem;
&:hover {
    background-color: #fff;
    color:#179E9F ;
    border: 1px solid #179E9F ;
}
`

const Image = styled.img`
width: 100%;
display: flex;
justify-content: center;
align-items: center;
border-radius : 30px;
height: 170px;



`


export default ProductsPage;