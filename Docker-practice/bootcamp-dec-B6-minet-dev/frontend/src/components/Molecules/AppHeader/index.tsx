import { Avatar, Button, Stack,ThemeProvider, Typography } from '@mui/material'
import {theme} from '../../../theme/theme'
import React, { useState } from 'react'
import { useNavigate} from 'react-router-dom';
import TypographyMinet from '../../Atoms/TypographyMinet';
import Vbar from "../../../../public/assets/Vbar.svg";
import icn from "../../../../public/assets/icn.svg";
import vector from "../../../../public/assets/Vector.svg";


interface Props {
    name:string,
    accounts:string[],
    path?:string
}
const AppHeader= ({name,accounts}:Props) => {
   const [deg,setDeg]=useState(0);
    const rotate = ()=>{
           deg==0?setDeg(180):setDeg(0);
    }
   const navigate =useNavigate()
  return (
    <ThemeProvider theme={theme}>
     <Stack width={"auto"} direction={'row'} sx={{paddingTop:"20px",paddingRight:"20px",paddingBottom:"20px",paddingLeft: "20px",boxSizing:"border-box",margin:"0px",backgroundColor:"white"}} justifyContent={"space-between"} borderBottom={"1px solid rgb(240, 240, 240)" } >
       <Typography variant='h1' color="#343446" sx={{fontSize:"24px",fontWeight:"400"}}>{name}</Typography>
        <Stack direction={'row'} gap={2} alignItems={"center"} >
            <Button sx={{width:"120px",height:"42px",color:"white",borderRadius:"4px",display:name=="Checkout"?"none":"flex"}} variant="contained" color="warning" id="sell" onClick={()=>{}}>SELL</Button>
            <Button sx={{width:"120px",height:"42px",color:"white",borderRadius:"4px",display:name=="Checkout"?"none":"flex"}} variant="contained" id="buy" onClick={()=>{navigate("/buy/checkout")}}>BUY</Button>
            <img src={Vbar} alt="img" style={{height:"30px",margin:"5px"}} />
            <Avatar src={icn} sx={{width:"32px",height:"32px"}}/>
            <img data-testid="dropdown" id = "dropdown" src={vector} alt="imgdown" onClick={rotate} style={{transform:`rotate(${deg}deg)`}}/>
            <Stack data-testid="droparea" position={"absolute"} direction={"column"} gap = {3} padding={"20px"} margin={"10px"}  sx={{borderRadius:"5px" ,zIndex:1, backgroundColor:"#EEEEE8",display:(deg==0)?"none":"flex",top:"55px",right:"10px"}}>
                     {
                      accounts.map((i:string)=>{return(<TypographyMinet key={i} variant={"caption1"}>{i}</TypographyMinet>)})
                     }
            </Stack>
        </Stack>
     </Stack>
  </ThemeProvider>
   
    
  )
}

export default AppHeader