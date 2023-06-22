import "@testing-library/jest-dom"
import React from "react";
import { fireEvent, render} from "@testing-library/react";
import * as router from "react-router"
import { MemoryRouter, Route, Routes } from "react-router-dom";
import Checkout from ".";

const navigate=jest.fn()
beforeEach(()=>{jest.spyOn(router,"useNavigate").mockImplementation(()=>navigate);})

test("testing app header Button",()=>{
    const component=render(
        <MemoryRouter>
         <Routes>
            <Route path="/" element={ <Checkout/>}/>
         </Routes>
        </MemoryRouter>
    )
    const element2 = component.getByTestId("dropdown")
    fireEvent.click(element2)
    expect(element2).toHaveStyle({transform:"rotate(180deg)"});
    fireEvent.click(element2)
    expect(element2).toHaveStyle({transform:"rotate(0deg)"});
   
})