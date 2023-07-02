import styled from "styled-components";
// import { Box, Card, CardContent, Typography, CardActions, Button, CardMedia, Container } from '@mui/material'

export const Container = styled.div`
  display: flex;
  align-content: center;
  align-items: center;
  min-height: 100vh;
  min-height: 100dvh;
  flex-direction: column;
`

export const Card = styled.div`
  display: flex;
  flex-direction: column;
  padding: 15px;
  margin: 15px;
  max-width: 100%;
  box-shadow: 0px 12px 22px #262626;
  background-color: white;
`

export const CardContentWrapper = styled.div`
   display: flex;
  align-items: start;
  flex-direction: column;
  justify-content: flex-end;
  width: 100%;
  padding-block: 1rem;
  gap: 5px;
  align-self: flex-end;
`

export const InfoWrapper = styled.div`
  display: flex;
  align-items: start;
  flex-direction: column;
  justify-content: flex-end;
  padding-block: 1rem;
  gap: 5px;
`

export const Text = styled.p`
  text-align: end;
  font-size: 1.5rem;
  align-self: flex-end;
  margin: 0;
  font-weight: bold;
`
export const PatientImage = styled.img`
  width: 100%;
`








