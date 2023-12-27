import styled from '@emotion/styled';
import { Box } from '@mui/material';
import React, { useEffect, useState } from 'react'
import Card from './Card';

const Container = styled(Box)`
    display: grid;
    grid-template-columns: 1fr 1fr 1fr;
    grid-template-rows: 1fr 1fr;
    row-gap: 50px;
    column-gap: 35px;
    @media (max-width: 1024px){
        grid-template-columns: 1fr 1fr;
        grid-template-rows: 1fr 1fr;
    }
    @media (max-width: 800px){
        grid-template-columns: 1fr;
        grid-template-rows: 1fr 1fr;
    }
`

const CardList = ({ coffees }) => {
    const [products, setProducts] = useState([])
    useEffect(() => {
        let sixProducts = coffees?.slice(0, 6);
        console.log(products)
        sixProducts[0] = { ...sixProducts[0], rating: 4.7, popular: true, stock: true, price: 5.20, votes: 65, img: 'https://media.licdn.com/dms/image/C4D12AQH-0bavkdPxGA/article-cover_image-shrink_720_1280/0/1520195140610?e=2147483647&v=beta&t=dlGJj6D8f5F8Z4a0TspwotwRa6TiPc2wOc720_HIV_U' }
        sixProducts[1] = { ...sixProducts[1], rating: 4.85, popular: true, stock: true, price: 3.50, votes: 14, img: 'https://www.nescafe.com/es/sites/default/files/desk.jpg' }
        sixProducts[2] = { ...sixProducts[2], rating: 4.9, popular: false, stock: true, price: 2.50, votes: 55, img: 'https://thefoodxp.com/wp-content/uploads/2022/12/Starbucks-Caramel-Brulee-Latte-Copycat-Recipe.png' }
        sixProducts[3] = { ...sixProducts[3], rating: 5.0, popular: false, stock: true, price: 4.50, votes: 23, img: 'https://exigibuencafe.com/wp-content/uploads/2017/12/exigi-5-1000x600.jpg' }
        sixProducts[4] = { ...sixProducts[4], rating: 4.65, popular: false, stock: false, price: 4.00, votes: 122, img: 'https://perfectdailygrind.com/wp-content/uploads/2020/08/Filter-or-Americano-1.jpg' }
        sixProducts[5] = { ...sixProducts[5], rating: null, popular: false, stock: true, price: 5.50, votes: 0, img: 'https://guiaepicureo.com.ar/wp-content/uploads/2019/06/espresso-1200x675.jpg' }
        setProducts(sixProducts)
    }, [])


    return (
        <Container>
            <Card coffees={products} />
        </Container>
    )
}

export default CardList