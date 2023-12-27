import styled from '@emotion/styled'
import { Box } from '@mui/material'
import React from 'react'
import CardList from './CardList'

const Container = styled(Box)`
    margin-top: 40px;
`

const CardsContainer = ({coffees}) => {
  return (
    <Container>
        <CardList coffees={coffees}/>
    </Container>
  )
}

export default CardsContainer