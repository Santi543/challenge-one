import React, { useEffect, useState } from 'react'
import styled from '@emotion/styled'
import { Box, Typography } from '@mui/material'
import vector from '../imgs/vector.svg'
import getData from '../data/productsArray'
import CardsContainer from './CardsContainer'
import photo from '../imgs/bg-cafe.jpg';

const BackgroundImage = styled.img`
    width: 100%;
    height: 300px;
`

const OurCoffesBox = styled(Box)`
    display: flex;
    flex-direction: column;
    background-color: #1B1D1F;
    z-index: 100;
    position: absolute;
    border-radius: 10px;
    align-items: center;
    padding: 15px 0px 50px 0px;
    width: 80%;
    height: 783px;
    justify-self: center;
    top: 400px;
    left: 0;
    right: 0;
    bottom: 0;
    margin: auto;
    @media (max-width: 1024px) {
        top: 593px;
        height: 970px;
    }
    @media (max-width: 800px){
        top: 1060px;
        height: 1730px;
        width: 400px;
    }
`

const TitleHead = styled.h1`
    font-size: 32px;
    font-family: 'DM Sans', sans-serif;
    color: #FEF7EE;
    margin: 50px 0 15px 0;
`

const Description = styled(Typography)`
    font-size: 16px;
    font-family: 'DM Sans', sans-serif;
    font-weight: bold;
    color: #6F757C;
    width: 500px;
    @media (max-width: 800px){
        width: 300px;
    }
`

const BoxRowButtons = styled(Box)`
    display: flex;
    flex-direction: row;
    margin-top: 20px;
    gap: 10px;
`

const ButtonAllProducts = styled(Box)`
    display: flex;
    align-items: center;
    justify-content: center;
    color: #FEF7EE;
    border-radius: 5px;
    cursor: pointer;
    font-weight: bold;
    font-family: 'DM Sans', sans-serif;
    font-size: 14px;
    height: 30px;
    width: 100px;
`

const BoxTop = styled(Box)`
    display: flex;
    flex-direction: column;
    z-index: 30;
    align-items: center;
    justify-content: center;
    height: fit-content;
`

const Vector = styled.img`
    z-index: -10;
    position: absolute;
    right: 387px;
    top: 20px;
    @media (max-width: 1300px){
        right: 250px;
    }
    @media (max-width: 1180px){
        right: 220px;
    }
    @media (max-width: 1024px){
        right: 149px;
    }
    @media (max-width: 800px){
        right: -55px;
    }
`

const Landing = () => {
    const [data, setData] = useState([])
    useEffect(() => {
        getData().then(res => { setData(res) })
    }, [])
    const left = false;
    const right = true;
    return (
        <>
            <BackgroundImage src={photo} />
            <OurCoffesBox>
                <Vector src={vector} style={{ zIndex: '-10' }} />
                <BoxTop>
                    <TitleHead>Our Collection</TitleHead>
                    <Description>
                        Introducing our Coffee Collection, a selection of unique coffes from different roasts types and origins, expertly roasted in small batches and shipped fresh weekly.
                    </Description>
                    <BoxRowButtons>
                        <ButtonAllProducts sx={{ backgroundColor: left ? '#1B1D1F' : '#6F757C' }}>All Products</ButtonAllProducts>
                        <ButtonAllProducts sx={{ backgroundColor: right ? '#1B1D1F' : '#6F757C' }}>Available Now</ButtonAllProducts>
                    </BoxRowButtons>
                    <CardsContainer coffees={data} />
                </BoxTop>

            </OurCoffesBox>
        </>
    )
}

export default Landing