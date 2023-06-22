import { createSlice } from "@reduxjs/toolkit";

export const userSlice = createSlice({
  name: "data",
  initialState: {
    value: {
      id: 1,
      name: "Bitcoin",
      symbol: "BTC",
      price: 2015273.74,
      image:
        "https://assets.coingecko.com/coins/images/1/large/bitcoin.png?1547033579",
      change: "+6.45%",
      market_capital: "47.19T",
      total_investment: "$637,283,258.87",
      series: [
        {
          name: "Bitcoin",
          data: [26, 64, 11, 78, 53, 54],
        },
        { 
          name: "Total investment", 
          data: [5, 2, 12, 34, 90, 83] 
        },
      ],
      circulating_supply: "1.9M BTC",
      volume_24: "4.12T",
      total_percentage: "-5.8%",
      coin_percentage: "+7.40%",
      colors: ["#FFA74F", "#0052FF"],
      backgroundColor: "rgba(247, 147, 26, 0.2)",
      transactions: [
        {
          month: "jan",
          date: "7",
          image: "assets/more_horiz.svg",
          tag: "from Sophia Miller",
          value: "+0.0463 BTC",
          val: "+$2530",
          status: "purchased",
          bgColor: "#FFF6ED",
        },
        {
          month: "jul",
          date: "23",
          image: "assets/tick.svg",
          tag: "from Jason Franklin",
          value: "+0.3095 BTC",
          val: "+$1700",
          status: "purchased",
          bgColor: "#E9F7EC",
        },
        {
          month: "jun",
          date: "27",
          image: "assets/more_horiz.svg",
          tag: "from Sophia Jones",
          value: "+0.7255 BTC",
          val: "+$1700",
          status: "purchased",
          bgColor: "#FFF6ED",
        },
        {
          month: "aug",
          date: "31",
          image: "assets/danger.svg",
          tag: "from Olivia Jones",
          value: "+0.0216 BTC",
          val: "+$930",
          status: "purchased",
          bgColor: "#F3E6EB",
        },
        {
          month: "feb",
          date: "14",
          image: "assets/more_horiz.svg",
          tag: "from Noah Williams",
          value: "+0.0216 BTC",
          val: "+$1700",
          status: "purchased",
          bgColor: "#FFF6ED",
        },
        {
          month: "may",
          date: "24",
          image: "assets/tick.svg",
          tag: "from Noah Davis",
          value: "+0.7255 BTC",
          val: "+$4630",
          status: "purchased",
          bgColor: "#E9F7EC",
        },
        {
          month: "aug",
          date: "23",
          image: "assets/tick.svg",
          tag: "from Liam Franklin",
          value: "+0.0253 BTC",
          val: "+$840",
          status: "purchased",
          bgColor: "#E9F7EC",
        },
      ],
    },
  },
  reducers: {
    crypto: (state, action) => {
      state.value = action.payload;
    },
  },
});

export const { crypto } = userSlice.actions;
export default userSlice.reducer;
