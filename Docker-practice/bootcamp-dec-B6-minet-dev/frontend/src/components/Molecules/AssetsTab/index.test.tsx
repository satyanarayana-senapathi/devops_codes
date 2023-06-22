import "@testing-library/jest-dom"
import React from "react";
import { fireEvent, render} from "@testing-library/react";
import {theme} from "../../../theme/theme"
import { ThemeProvider } from "@mui/system";
import AssetsTab from ".";
test("testing the AssetsTab component",()=>{
    const component=render(
        <ThemeProvider theme={theme}>
           <AssetsTab img={""} name={"Bitcoin"} Stockname={"BTC"} price={"123.456,789"} change ={"+2.4%"} watchList={true} marketCap={"4.23T"} mock={()=>{}} router={(arg:string)=>{}}/>
        </ThemeProvider>
    
    )
    const element = component.getByText('Bitcoin')
   
    expect(element).toBeInTheDocument();
   
})

test("testing the AssetsTab component",()=>{
    const component=render(
        <ThemeProvider theme={theme}>
           <AssetsTab img={""} name={"Bitcoin"} Stockname={"BTC"} price={"123,456,789"} change ={"+2.4%"} watchList={true} marketCap={"4.23T"} mock={()=>{}} router={(arg:string)=>{}}/>
        </ThemeProvider>
    
    )
    const element = component.getByText('123,456,789')
    fireEvent.click(element)
    expect(element).toBeInTheDocument();
})
test("testing the AssetsTab component",()=>{
    const component=render(
        <ThemeProvider theme={theme}>
           <AssetsTab img={""} name={"Bitcoin"} Stockname={"BTC"} price={"123,456,789"} change ={"+2.4%"} watchList={true} marketCap={"4.23T"} mock={()=>{}} router={(arg:string)=>{}}/>
        </ThemeProvider>
    
    )
    const element = component.getByTestId("checkedstar")
    fireEvent.click(element)
    const element2= component.getByTestId("star")
    expect(element2).toBeInTheDocument();
   
})
test("testing the AssetsTab component",()=>{
    const component=render(
        <ThemeProvider theme={theme}>
           <AssetsTab img={""} name={"Bitcoin"} Stockname={"BTC"} price={"123,456,789"} change ={"-2.4%"} watchList={false} marketCap={"4.23T"} mock={()=>{}} router={(arg:string)=>{}}/>
        </ThemeProvider>
    
    )
    const element = component.getByText('-2.4%')
    expect(element).toHaveStyle({color:"rgb(183, 26, 51)"})
  
})


test("testing the AssetsTab component",()=>{
    const component=render(
        <ThemeProvider theme={theme}>
           <AssetsTab img={""} name={"Bitcoin"} Stockname={"BTC"} price={"123,456,789"} change ={"+2.4%"} watchList={false} marketCap={"4.23T"} mock={()=>{} } router={(arg:string)=>{}}/>
        </ThemeProvider>
    
    )
    const element = component.getByTestId("star")
    fireEvent.click(element)
    const element2= component.getByTestId("checkedstar")
    expect(element2).toBeInTheDocument();
   
})