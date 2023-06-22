import "./App.css";
import { theme } from "./theme/theme";
import { ThemeProvider } from "@emotion/react";
import { BrowserRouter, Route, Routes} from "react-router-dom";
import Dashboard from "./Pages/Dashboard"
import Trade from "./Pages/Trade";
import Assets from "./components/Organisms/AssetsList";
import { Provider } from "react-redux";
import { store } from "../public/store";
import { BuyCheckout } from "./components/Organisms/buyScreen";
import Checkout from "./Pages/Checkout";
import AfterBuyNow from "./components/Molecules/AfterBuyNow";

export const App = () => {
  return (
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
  );
};
