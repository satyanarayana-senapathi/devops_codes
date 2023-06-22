import "@testing-library/jest-dom"
import React from "react";
import { fireEvent, render, screen} from "@testing-library/react";
import * as router from "react-router"
import { BrowserRouter, MemoryRouter, Route, Routes } from "react-router-dom";
import Trade from ".";
import Assets from "../../components/Organisms/AssetsList";
import { ThemeProvider } from "@mui/material";
import { Provider } from "react-redux";
import { store } from "../../../public/store/index";
import { theme } from '../../theme/theme'
import AfterBuyNow from "../../components/Molecules/AfterBuyNow";
import { BuyCheckout } from "../../components/Organisms/buyScreen";
import Checkout from "../Checkout";
import Dashboard from "../Dashboard";

const navigate=jest.fn()
beforeEach(()=>{jest.spyOn(router,"useNavigate").mockImplementation(()=>navigate);})

test("testing app first screen",()=>{
    render(
        <MemoryRouter initialEntries={["/trade/Bitcoin"]}>
        <Routes>
        <Route path="/trade" element={<Trade state={1} />}>
             <Route path="watchlist" element={<Assets state={2} />} />
             <Route path="assets" element={<Assets state={1} />} />
             <Route path=":id" element={<Trade state={1} />} />
           </Route>
        </Routes>
       </MemoryRouter>
    )   
})

test("testing app fourth screen",()=>{
    render(
        <Provider store={store}>
        <ThemeProvider theme={theme}>
          <BrowserRouter>
            <Routes>
              <Route path="/" element={<Dashboard />} />
              <Route path="/trade" element={<Trade state={1} />}>
                <Route path="watchlist" element={<Assets state={2} />} />
                <Route path="assets" element={<Assets state={1} />} />
                <Route path=":id" element={<Trade state={1} />} />
              </Route>
              <Route path="/buy" element={<Checkout/>}>
               <Route path="checkout" element={<BuyCheckout />}/>
               <Route path="details/:value" element={<AfterBuyNow ammount={"0.025694 BTC"}/>}/>
              </Route>
            </Routes>
          </BrowserRouter>
        </ThemeProvider>
      </Provider>
    )   
    const tradeIcon = screen.getByText('Discover assets');
    fireEvent.mouseOver(tradeIcon);
})

test("testing app fourth screen",()=>{
    render(
        <MemoryRouter initialEntries={["/trade/assets"]}>
         <Routes>
         <Route path="/trade" element={<Trade state={1} />}>
              <Route path="watchlist" element={<Assets state={2} />} />
              <Route path="assets" element={<Assets state={1} />} />
              <Route path=":id" element={<Trade state={1} />} />
            </Route>
         </Routes>
        </MemoryRouter>
    )   
})
