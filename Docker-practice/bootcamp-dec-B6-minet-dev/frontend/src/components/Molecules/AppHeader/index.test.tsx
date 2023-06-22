import "@testing-library/jest-dom"
import React from "react";
import { fireEvent, render} from "@testing-library/react";
import AppHeader from ".";
import * as router from "react-router"
import { MemoryRouter, Route, Routes } from "react-router-dom";

const navigate=jest.fn()
beforeEach(()=>{jest.spyOn(router,"useNavigate").mockImplementation(()=>navigate);})

test("testing app header without path",()=>{
    const component=render(
        <MemoryRouter>
         <Routes>
            <Route path="/" element={ <AppHeader name={"Dashboard"}  accounts={["name1","name2","name3"]}/>}/>
         </Routes>
        </MemoryRouter>
    )
    const element = component.getByText('BUY')
    fireEvent.click(element)
    expect(element).toBeInTheDocument();
   
})
test("testing app header for dropdown",()=>{
    const component=render(
        <MemoryRouter>
        <Routes>
           <Route path="/" element={ <AppHeader name={"Checkout"}  accounts={["name1","name2","name3"]}/>}/>
        </Routes>
       </MemoryRouter>
    )
    const element = component.getByTestId("dropdown")
    fireEvent.click(element)
    expect(element).toBeInTheDocument();
   
})
test("testing dropdown orientation",()=>{
    const component=render(
        <MemoryRouter>
         <Routes>
            <Route path="/" element={ <AppHeader name={"Checkout"}  accounts={["name1","name2","name3"]}/>}/>
         </Routes>
        </MemoryRouter>
    )
    const element = component.getByTestId("dropdown")
    fireEvent.click(element)
    expect(element).toHaveStyle({transform:"rotate(180deg)"});
    fireEvent.click(element)
    expect(element).toHaveStyle({transform:"rotate(0deg)"});
   
})

test("testing the droparea rendering after clicking ",()=>{
    const component=render(
        <MemoryRouter>
        <Routes>
           <Route path="/" element={ <AppHeader name={"Checkout"}  accounts={["name1","name2","name3"]}/>}/>
        </Routes>
       </MemoryRouter>
    )
    const element = component.getByTestId("dropdown")
    fireEvent.click(element)
    const element1 = component.getByTestId("droparea")
    expect(element1).toBeInTheDocument();
   
})
test("testing app header with path redirect",()=>{
    const component=render(
       <MemoryRouter>
         <Routes>
            <Route path="/" element={ <AppHeader name={"Checkout"}  accounts={["name1","name2","name3"]}/>}/>
         </Routes>
        </MemoryRouter>
    )
    const element = component.getByText("BUY")
    fireEvent.click(element)
    expect(element).toBeInTheDocument();
   
})
test("testing app header with path redirect",()=>{
    const component=render(
       <MemoryRouter>
         <Routes>
            <Route path="/" element={ <AppHeader name={"Checkout"}  accounts={["name1","name2","name3"]}/>}/>
         </Routes>
        </MemoryRouter>
    )
    const element = component.getByText("SELL")
    fireEvent.click(element)
    expect(element).toBeInTheDocument();
   
})

