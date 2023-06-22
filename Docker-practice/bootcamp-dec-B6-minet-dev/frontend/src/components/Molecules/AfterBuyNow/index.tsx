import DoneRoundedIcon from '@mui/icons-material/DoneRounded';
import { Button, Stack, ThemeProvider } from '@mui/material';
import {theme} from '../../../theme/theme'
import React from 'react'
import TypographyMinet from '../../Atoms/TypographyMinet';
import { useParams } from 'react-router-dom';

interface Props{
    ammount:string
}
const AfterBuyNow = ({ammount}:Props) => {
  const {value} = useParams()
  return (
    <ThemeProvider theme={theme} >
    <Stack direction={"column"} width="100%" height ="77vh"justifyContent={"center"} alignItems={"center"} boxSizing={"border-box"}>
    <Stack direction={"row"} justifyContent={"center"} alignItems={"center"} sx={{width:"60px",height:"60px",backgroundColor:theme.palette.success.light,borderRadius:"64px"}}>
        <DoneRoundedIcon sx={{color:theme.palette.success[500],height:"50%",width:"70%",margin:"0px"}}/>
    </Stack>
    <TypographyMinet data-testid="ammount" variant='h4' sx={{fontWeight:600,color:"#343446"}} marginTop={"40px"}>{value}</TypographyMinet>
    <TypographyMinet variant='body2' sx={{textAlign:'center',color:"#343446",width:"330px"}}  marginTop={"8px"}>purchase is completed, please check your
        balance in your crypto wallet</TypographyMinet>
    <Stack direction={"row"} gap={"25px"} marginTop="44px">
        <Button variant='outlined' sx={{height:"42px",textTransform:"uppercase"}}>buy crypto</Button>
        <Button variant='contained' sx={{height:"42px",textTransform:"uppercase"}}>go to usd coin</Button>
    </Stack>
    </Stack>
    </ThemeProvider>
  )
}

export default AfterBuyNow