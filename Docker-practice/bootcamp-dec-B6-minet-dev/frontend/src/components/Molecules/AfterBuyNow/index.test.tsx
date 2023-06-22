import "@testing-library/jest-dom"
import { render } from "@testing-library/react"
import {theme} from "../../../theme/theme"
import { ThemeProvider } from "@mui/system";
import AfterBuyNow from "."

test("test for AfterBuyNow screen",()=>{
    const component = render(<ThemeProvider theme ={theme}><AfterBuyNow ammount="0.265891 BTC"/></ThemeProvider>)
    const  element = component.getByTestId("ammount")
    expect(element).toBeInTheDocument()
})

