import React from 'react'
import { Outlet} from "react-router-dom";
import TemplateHome from '../../components/Templates/TemplateHome';


const Checkout = () => {

  return (
   <TemplateHome name="Checkout" content={<Outlet/>}/>
);
};
 
export default Checkout