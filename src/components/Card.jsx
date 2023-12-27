import styled from '@emotion/styled'
import { Box, Typography } from '@mui/material'
import React from 'react'
import star from '../imgs/Star.svg'
import starfill from '../imgs/Star_fill.svg'

const CardContainer = styled(Box)`
  display: flex;
  flex-direction: column;
`

const BottomBox = styled(Box)`
  display: flex;
  flex-direction: column;
`

const BoxRow = styled(Box)`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  margin-top: 12px;
`

const ImgProduct = styled.img`
  width: 260px;
  height: 150px;
  border-radius: 12px;
  @media (max-width: 1180px) {
    width: 210px;
    height: 125px;
  }
`

const ProductName = styled(Typography)`
  font-size: 16px;
  color: #FEF7EE;
  font-weight: bold;
  font-family: 'DM Sans', sans-serif;
`

const ProductPrice = styled(Box)`
  align-items: center;
  justify-content: center;
  background-color: #BEE3CC;
  font-size: 12px;
  padding: 4px 8px 4px 8px;
  font-family: 'DM Sans', sans-serif;
  font-weight: bold;
  border-radius: 4px;
`

const Star = styled.img`
  height: 24px;
  width: 24px;
`

const BoxRating = styled(Box)`
  display: flex;
  flex-direction: row;
  gap: 4px;
  align-items: center;
`

const Rating = styled(Typography)`
  font-family: 'DM Sans', sans-serif;
  font-weight: bold;
  font-size: 14px;
  color: #FEF7EE;
`

const PopularText = styled(Box)`
  background-color: #F6C768;
  padding: 3px 12px 3px 12px;
  font-size: 10px;
  font-family: 'DM Sans', sans-serif;
  font-weight: bold;
  position: absolute;
  z-index: 200;
  left: 10px;
  top: 10px;
  border-radius: 8px;
`

const BoxRelativeImg = styled(Box)`
  position: relative;
`

const NoRatings = styled(Typography)`
  color: #6F757C;
  font-size: 14px;
  font-family: 'DM Sans', sans-serif;
  font-weight: bold;
`

const SoldOut = styled(Typography)`
  font-family: 'DM Sans', sans-serif;
  font-weight: bold;
  font-size: 14px;
  color: #ED735D;
  margin-top: 2px;
`

const Card = ({ coffees }) => {
  return (
    coffees.map((product) => {
      return (
        <CardContainer>
          <BoxRelativeImg>
            <ImgProduct src={product.img} />
            {product.popular ? <PopularText>Popular</PopularText> : null}
          </BoxRelativeImg>
          <BottomBox>
            <BoxRow>
              <ProductName>{product.title}</ProductName>
              <ProductPrice>${product.price.toFixed(2)}</ProductPrice>
            </BoxRow>
            <BoxRow>
              <BoxRating>

                {product.rating ?
                  <>
                    <Star src={starfill} />
                    <Rating>{product.rating.toFixed(1)}</Rating>
                    <NoRatings>{`(${product.votes} votes)`} </NoRatings>
                  </>
                  :
                  <><Star src={star} />
                    <NoRatings>No ratings</NoRatings>
                  </>}


              </BoxRating>
              {product.stock ? null : <SoldOut>Sold Out</SoldOut>}
            </BoxRow>
          </BottomBox>
        </CardContainer>
      )
    })

  )
}

export default Card