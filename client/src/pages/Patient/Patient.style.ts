import styled from "styled-components";
// import { Box, Card, CardContent, Typography, CardActions, Button, CardMedia, Container } from '@mui/material'

export const Container = styled.div`
  display: flex;
  align-content: center;
  align-self: center;
  justify-content: center;
  align-items: center;
  min-height: 100vh;
  min-height: 100dvh;
`

export const Card = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 80%;
  max-width: 30rem;
  box-shadow: 0px 12px 22px #262626;
  background-color: white;
`

export const CardContentWrapper = styled.div`
  text-align: start;
`

export const Title = styled.h3`

`

export const Text = styled.h5`
  text-align: start;
  font-size: 1.3rem;

`


export const PatientImage = styled.img`
  min-width: 50%;
  max-width: 70%;
  min-height: 30%;
  min-height: 70%;
  margin-top: 1rem;
`






