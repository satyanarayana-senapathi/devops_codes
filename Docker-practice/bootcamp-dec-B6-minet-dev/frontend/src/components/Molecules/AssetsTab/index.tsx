import { Stack } from '@mui/material'
import React, { useState } from 'react'
import {theme} from '../../../theme/theme'
import TypographyMinet from '../../Atoms/TypographyMinet'
import {store} from "../../../../public/store/index"
import { changed } from '../../../../public/store/features/WatchList'
import starIcon from "../../../../public/assets/star.svg"
import ustarIcon from "../../../../public/assets/ustar.svg"

interface Props{
    img:string,
    name:string,
    Stockname:string,
    price:string,
    change:string,
    marketCap:string,
    watchList:boolean,
    mock:()=>void,
    router:(arg:string)=>void
}
const AssetsTab  = ({img,name,Stockname,price,change,marketCap,watchList,mock,router}:Props) => {
    const [watch,setWatch]=useState(watchList)
    const toggle = (event:any) =>{
      try{
       event.stopPropagation()
       watch?setWatch(false):setWatch(true);
        store.dispatch(changed(name))
        mock()
      }
      catch(err){}
      
    }
    const statechanger = () =>{
          router(name)
    }
    let star=<span onClick={toggle} style={{marginRight:"60px"}} ><img data-testid="star" src={ustarIcon} alt="star" style={{paddingLeft:"13px",cursor:"pointer"}}/></span>
    let checkedstar=<span onClick={toggle} style={{marginRight:"60px"}}><img data-testid="checkedstar" src={starIcon} alt="checkedstar" style={{paddingLeft:"13px",cursor:"pointer"}}/></span>
  return (
    <Stack onClick={statechanger}  direction='row' alignItems="center"  justifyContent={"space-between"} sx={{border: "1px solid #E8E8F7",padding: "16px 24px",borderRadius:"4px", margin:"10px 0px 10px 0px",backgroundColor:"#FFFFFF",width:"auto"}} >
    <Stack  direction='row' gap={"10px"} alignItems="center" width="310px">
     <img src={img} alt="crypto" style={{width:"42px", height:"42px"}}/>
     <Stack direction='column' gap={"3px"} >
        <TypographyMinet variant='body1'>{name}</TypographyMinet>
        <TypographyMinet variant='overline' sx={{fontWeight:"400",color:"#7D7D89"}}>{Stockname}</TypographyMinet>
     </Stack>
     </Stack>
     <TypographyMinet variant='body2' width="342px">{price}</TypographyMinet>
     <TypographyMinet variant='body2' width="298px" sx={{color:change[0]=="-"?theme.palette.error.main:theme.palette.success[500]}}>{change}</TypographyMinet>
     <TypographyMinet variant='body2' width="280px" >${marketCap}</TypographyMinet>
     {
       watch ?checkedstar:star
     }
    </Stack>
  )
}

export default AssetsTab