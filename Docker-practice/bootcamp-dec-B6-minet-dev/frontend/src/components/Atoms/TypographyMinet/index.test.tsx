import "@testing-library/jest-dom"
import React from "react";
import { render} from "@testing-library/react";
import {theme} from "../../../theme/theme"
import { ThemeProvider } from "@mui/system";
import TypographyMinet from "./index";
test("testing the typography component",()=>{
    const component=render(
        <ThemeProvider theme={theme}>
            <TypographyMinet variant='h4' sx={{color:theme.palette.warning.light, backgroundColor:"primary"}} >hello world</TypographyMinet>
        </ThemeProvider>
    
    )
    const element = component.getByText('hello world')
    console.log(element.style.color)
    expect(element).toHaveStyle({color:theme.palette.warning.light});
})
test("testing the typography component",()=>{
    const {getByText}=render(<TypographyMinet variant='h4' sx={{color:theme.palette.warning.light}} >hello world</TypographyMinet>)
    expect(getByText('hello world')).toBeInTheDocument()
})