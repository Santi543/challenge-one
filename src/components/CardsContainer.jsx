import styled from '@emotion/styled'
import { Box } from '@mui/material'
import React from 'react'
import CardList from './CardList'

const Container = styled(Box)`
    margin-top: 40px;
`

const CardsContainer = ({coffees, available}) => {
  return (
    <Container>
        <CardList coffees={coffees} available={available}/>
    </Container>
  )
}

export default CardsContainer