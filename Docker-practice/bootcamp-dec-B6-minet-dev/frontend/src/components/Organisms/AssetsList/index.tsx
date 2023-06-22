
import React, { useEffect, useState } from "react";
import {theme} from '../../../theme/theme'
import axios from'axios'
import { ThemeProvider } from "@emotion/react";
import AssetsTab from "../../Molecules/AssetsTab/index";
import {  Stack } from "@mui/system";
import {store} from "../../../../public/store/index"
import TypographyMinet from "../../Atoms/TypographyMinet/index";
import styled from "@emotion/styled";
import { BASE_URL, initialstate} from "../../../utils/constants";
import SearchBar from "../../Atoms/SearchBar";
import { Dropdown } from "../../Atoms/dropdown";
import { changed } from "../../../../public/store/features/WatchList";
import { useNavigate } from "react-router-dom";
const Container = styled.div`
height:85%;
overflow-y:auto;
&::-webkit-scrollbar {
display : none;
}
  `;

interface Series{
  "name": string, 
  "data":number[]
}
interface TabProps{
  state:number
}
interface Mock  {
  "name":string,
  "symbol": string,
  "price": number,
  "image": string,
  "change": string,
  "market_capital": string,
  "total_investment": string,
  "series":Series[]
  "circulating_supply":string,
  "volume_24": string,
  "total_percentage": string,
  "coin_percentage":string,
  "colors":string[],
  "backgroundColor": string
}
const Assets = ({state}:TabProps) => {
  const [tab,setTab]=useState<number>(state)
  const [watchlist,setWatchlist]=useState<any>(store.getState().WatchSlice.watchList)
  const [filterdata,setFilterdata]=useState<Mock[]>([])
  const [data,setData]=useState<Mock[]>(initialstate)

  const navigate=useNavigate()

useEffect(()=>{ axios.get(BASE_URL+"/data").then((res)=>{
  setData(res.data)
  setFilterdata(res.data)
  store.dispatch(changed(''))
  mockfunction();
})
},[])

const mockfunction = () =>{
  setWatchlist(store.getState().WatchSlice.watchList)
}

const USDollar = new Intl.NumberFormat('en-US', {
  style: 'currency',
  currency: 'USD',
})

const Filter = (name:string) =>{
 
  if(name.length>0){
    setFilterdata(data.filter((i)=>{
    if(i.name.toLowerCase().indexOf(name.toLowerCase())!=-1)
    {
      return i;
    }
  }))
}
else{
  setFilterdata(data)
}
}
const [watch_Items,setWatch_items]=useState<any>(  filterdata.map((i:Mock)=>{
  if(watchlist[i.name])
  {
  return (<AssetsTab key = {i.name} img={i.image} name={i.name} Stockname={i.symbol} price={USDollar.format(i.price)} change={i.change} marketCap={i.market_capital} watchList={watchlist[i.name]} mock={ mockfunction } router={(arg:string)=>{navigate(`/trade/${arg}`)}}/>)
  }
}))
const [all_Items,setAll_items]=useState<any>(  filterdata.map((i:Mock)=>{return (<AssetsTab key = {i.name} img={i.image} name={i.name} Stockname={i.symbol} price={USDollar.format(i.price)} change={i.change} marketCap={i.market_capital} watchList={watchlist[i.name]} mock={ mockfunction } router={(arg:string)=>{navigate(`/trade/${arg}`)}}/>)}))
useEffect(()=>{ setAll_items(  filterdata.map((i:Mock)=>{return (<AssetsTab key = {i.name} img={i.image} name={i.name} Stockname={i.symbol} price={USDollar.format(i.price)} change={i.change} marketCap={i.market_capital} watchList={watchlist[i.name]} mock={ mockfunction } router={(arg:string)=>{navigate(`/trade/${arg}`)}}/>)}))},[watchlist,filterdata])

useEffect(()=>{
  setWatch_items(filterdata.map((i:Mock)=>{ if(watchlist[i.name])
    {
    return (<AssetsTab key = {i.name} img={i.image} name={i.name} Stockname={i.symbol} price={USDollar.format(i.price)} change={i.change} marketCap={i.market_capital} watchList={watchlist[i.name]} mock={ mockfunction } router={(arg:string)=>{navigate(`/trade/${arg}`)}}/>)
  }
}))
},[watchlist,filterdata])

  return (
    <div style={{ width:"auto",padding:"20px 25px 20px 25px" ,height:"98vh" ,overflowY:"hidden" ,boxSizing:"border-box"}}>
      <ThemeProvider theme={theme}>
        <Stack direction={"row"} width={"auto"} alignItems={"baseline"}>
        <Stack direction={"row"} width={"100%"} borderBottom={`1px solid #E8E8F7`} >
          <TypographyMinet variant="subtitle2" padding={"10px 15px 10px 15px"} sx={{color:tab==1?'#0052FF':'#7D7D89' ,cursor:"pointer",borderBottom:(tab==1)?`3px solid #0052FF`:'none'}}  onClick={()=>{setTab(1)}}>All Assets</TypographyMinet>
          <TypographyMinet  variant="subtitle2" padding={"10px 15px 10px 15px"} sx={{color:tab==2?'#0052FF':'#7D7D89',cursor:"pointer",borderBottom:(tab==2)?`3px solid #0052FF`:'none'}}  onClick={()=>{setTab(2)}}>Watchlist</TypographyMinet>
        </Stack>
        <Stack direction={"row"}>
        <Stack direction={"row"} width={"230px"} height={"40px"} alignItems={"baseline"} padding={"0px 14px 0px 14px"}><SearchBar   placeholder="Search all assets" showFilterIcon={false} callBack={Filter}/></Stack>
        <Stack direction={"row"} height={"max-content"} alignItems={"baseline"} > <Dropdown Menu={["24h","1w"]} mock={(arg:string)=>{}} sx={{height:"41px",width:"78px",marginRight:"7px"}}/></Stack>
        <Stack direction={"row"} height={"max-content"} alignItems={"baseline"} > <Dropdown Menu={["All assets","Watchlist"]} mock={(arg:string)=>{}} sx={{height:"41px",width:"120px" ,marginLeft:"7px"}}/></Stack>
        </Stack>
        </Stack>
        <Stack direction={"row"} alignItems={"center"} width={"auto"} padding={"29px 24px 5px 24px"} justifyContent={"space-between"}>
         <TypographyMinet variant="caption1"  sx={{color:theme.palette.grey[500]}} width="310px">Name</TypographyMinet>
         <TypographyMinet variant="caption1" width="340px">Price</TypographyMinet>
         <TypographyMinet variant="caption1" width="300px">Change</TypographyMinet>
         <TypographyMinet variant="caption1" width="280px" >Market Cap</TypographyMinet>
         <TypographyMinet variant="caption1" marginRight={"50px"}>Watch</TypographyMinet>
        </Stack>
    <Container>
    {
         tab==1?all_Items: watch_Items
      }
    </Container>
      </ThemeProvider> 
      
    </div>
  );
};


export default Assets