import React, { ReactNode } from 'react'
import { Outlet, useParams } from "react-router-dom";
import TradeScreen from '../../components/Organisms/Trade-1'
import TemplateHome from '../../components/Templates/TemplateHome';

interface TradeProps{
  state:number
}

const Trade = ({state}:TradeProps) => {
const route=window.location.pathname
const {id}=useParams()
const descriptor  = (ID:string|undefined,route:string,out:ReactNode) =>{
  if(ID){
  return (<TradeScreen currency={ID}/>)
  }
  else{
    return out;
  }
}
const Content :ReactNode = descriptor(id,route,<Outlet/>)
  return (
    <TemplateHome name="Trade" content={Content}/>
);
};
 
export default Trade