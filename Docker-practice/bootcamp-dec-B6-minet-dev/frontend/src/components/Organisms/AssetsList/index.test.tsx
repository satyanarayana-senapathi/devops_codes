import "@testing-library/jest-dom"
import React from "react";
import { fireEvent,waitFor ,render} from "@testing-library/react";
import * as router from "react-router"
import axios from "axios"
import Assets from ".";
import { Provider } from "react-redux";
import { store } from "../../../../public/store";
import { MemoryRouter, Route, Routes } from "react-router-dom";

jest.mock("axios");
const Items=["English", "Hindi", "Telugu"]
const mockData =[
    {
      "name": "Bitcoin",
      "symbol": "BTC",
      "price": 2015273.74,
      "image": "https://assets.coingecko.com/coins/images/1/large/bitcoin.png?1547033579",
      "change": "-6.45%",
      "market_capital": "47.19T",
      "total_investment": "$637,283,258.87",
      "series": [
        { "name": "Bitcoin", "data": [26, 64, 11, 78, 53, 54] },
        { "name": "Total investment", "data": [5, 2, 12, 34, 90, 83] }
      ],
      "circulating_supply": "1.9M BTC",
      "volume_24": "4.12T",
      "total_percentage": "-5.8%",
      "coin_percentage": "+7.40%",
      "colors":["#FFA74F","#0052FF"],
      "backgroundColor": "rgba(247, 147, 26, 0.2)"
    },
    {
        "id": 2,
        "name": "Ethereum",
        "symbol": "ETH",
        "price": 138551.51,
        "image": "https://assets.coingecko.com/coins/images/279/large/ethereum.png?1595348880",
        "change": "+6.57%",
        "market_capital": "20.21T",
        "total_investment": "$180,830,109.85",
        "series": [
          { "name": "Ethereum", "data": [64, 50, 61, 24, 93, 12] },
          { "name": "Total investment", "data": [12, 10, 8, 96, 1, 75] }
        ],
        "circulating_supply": "12.0M ETH",
        "volume_24": "0.92T",
        "total_percentage": "+0.2%",
        "coin_percentage": "-4.20%",
        "colors": ["#B71A33", "#66A1FF"],
        "backgroundColor": "rgba(34, 34, 34, 0.2)"
    }
  ];
  const navigate=jest.fn()
  beforeEach(()=>{jest.spyOn(router,"useNavigate").mockImplementation(()=>navigate);})
test("API call should return data", async () => {
  (axios.get as jest.Mock).mockResolvedValueOnce({ data: mockData });
  const {getByText,getByPlaceholderText,getAllByTestId}= render(
 <MemoryRouter>
   <Provider store={store}>
    <Routes>
      <Route path="/" element={<Assets state={1} />}/>
    </Routes>
    </Provider>
 </MemoryRouter>
  );
  await waitFor(() => {
    const coin=getAllByTestId("checkedstar")[0]
    fireEvent.click(coin)
    fireEvent.click(coin)
    const inputElement =getByPlaceholderText("Search all assets");
    fireEvent.keyUp(inputElement, { target: { value:"Ethereum" } });
    const element = getByText("Ethereum")
    fireEvent.click(element)
    expect(axios.get).toHaveBeenCalledWith("http://localhost:5000/data");
    expect(element).toBeInTheDocument();
    fireEvent.keyUp(inputElement, { target: { value:"" } });
    const Assets=getByText("All Assets")
    const Watchlist=getByText("Watchlist")
    fireEvent.click(Assets)
    fireEvent.click(coin)
    fireEvent.click(Watchlist)
    fireEvent.keyUp(inputElement, { target: { value:"Bitcoin" } });
    const element2= getByText("Bitcoin")
    fireEvent.click(element2)
  })
})

