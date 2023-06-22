import "@testing-library/jest-dom"
import React from "react";
import { fireEvent, render,screen} from "@testing-library/react";
import EmptyDashboard from ".";
import * as router from "react-router"
import { MemoryRouter, Route, Routes } from "react-router-dom";

const navigate=jest.fn()
beforeEach(()=>{jest.spyOn(router,"useNavigate").mockImplementation(()=>navigate);})

test("testing app header Button",()=>{
    const component=render(
        <MemoryRouter>
         <Routes>
            <Route path="/" element={ <EmptyDashboard/>}/>
         </Routes>
        </MemoryRouter>
    )
    const element = component.getByText('BUY')
    fireEvent.click(element)
    const sell= component.getByText('SELL')
    fireEvent.click(sell)
    expect(sell).toBeInTheDocument();
    const element2 = component.getByTestId("dropdown")
    fireEvent.click(element2)
    expect(element2).toHaveStyle({transform:"rotate(180deg)"});
    fireEvent.click(element2)
    expect(element2).toHaveStyle({transform:"rotate(0deg)"});
   
})
test("testing Navbar ",()=>{
    render(
        <MemoryRouter>
         <Routes>
            <Route path="/" element={ <EmptyDashboard/>}/>
         </Routes>
        </MemoryRouter>
    )
    const handler=screen.getByTestId("Dashboard")
    fireEvent.click(handler);
    expect(handler).toBeInTheDocument();
    const handler2=screen.getByAltText("trade")
  fireEvent.click(handler2);
   
})

