import tick from "../../public/assets/tick.svg"
import more_horiz from "../../public/assets/more_horiz.svg"
import danger from "../../public/assets/danger.svg"
// import Minnet from '../../../frontend/public/assets/minnet.svg'
// import Dashboard from '../../../frontend/public/assets/dashboard.svg'
// import Portfolio from '../../../frontend/public/assets/portfolio.svg'
// import Trade from '../../../frontend/public/assets/trade.svg'
// import Notification from '../../../frontend/public/assets/notification.svg'
// import Logout from '../../../frontend/public/assets/logout.svg'
import Minnet from '../../public/assets/minnet.svg'
import Dashboard from '../../public/assets/dashboard.svg'
import Portfolio from '../../public/assets/portfolio.svg'
import Trade from '../../public/assets/trade.svg'
import Notification from '../../public/assets/notification.svg'
import Logout from '../../public/assets/logout.svg'
export const GraphData = {
    series:[
        {
            name:'Bitcoin',
            data:[18,36,33,50,40,45]
        },
        {
            name:'Total Investment',
            data:[18,30,27,35,34,36]
        }
    ],
};
export const BASE_URL="http://localhost:5000";

interface TransactionProps {
  [key: string]: string
}
export const transactions:TransactionProps = {
  "assets/tick.svg": tick,
  "assets/more_horiz.svg": more_horiz,
  "assets/danger.svg": danger
}
export const TimePeriod = [
    {
        key:"tab-1H",
        label:"1H",
        value:"1H"
    },
    {
        key:"tab-24H",
        label:"24H",
        value:"24H"
    },
    {
        key:"tab-1W",
        label:"1W",
        value:"1W"
    },
    {
        key:"tab-1M",
        label:"1M",
        value:"1M"
    },
    {
        key:"tab-1Y",
        label:"1Y",
        value:"1Y"
    },
    {
        key:"tab-All",
        label:"All",
        value:"All"
    }

]


export const months = [
    "jan",
    "feb",
    "mar",
    "apr",
    "may",
    "jun",
    "jul",
    "aug",
    "sep",
    "oct",
    "nov",
    "dec",
  ];

export const  names = [
    "Emma",
    "Liam",
    "Olivia",
    "Noah",
    "Ava",
    "Ethan",
    "Sophia",
    "Lucas",
    "Mia",
    "Jason",
  ];
export const  surnames = [
    "Smith",
    "Johnson",
    "Williams",
    "Jones",
    "Brown",
    "Franklin",
    "Miller",
    "Davis",
    "Rodriguez",
    "Cooper",
  ];

 export interface Data {
    id:number;
    name: string;
    symbol: string;
    price: number;
    image: string;
    change: string;
    market_capital: string;
    total_investment: string;
    series: {
      name: string;
      data: number[];
    }[];
    circulating_supply: string;
    volume_24: string;
    total_percentage: string;
    coin_percentage: string;
    colors: string[];
    backgroundColor: string;
    transactions: {
        month: string;
        date: string;
        image: string;
        tag: string;
        value: string;
        val: string;
        status: string;
        bgColor: string;
      }[];
  }

  export interface Max {
    max: number;
  }
  
 export interface Transaction {
    fee: number;
  }
 export interface Remaining {
    remaining :number
}

export const USDollar = new Intl.NumberFormat("en-US", {
    style: "currency",
    currency: "USD",
  });
  

export const options=[
    {
      title:"",
      testid:"Minnet",
      src:`${Minnet}`,
      alt:"Minnet",
      clickHandler:()=>alert('clicked'),
    },
    {
      title:"DashBoard",
      testid:"Dashboard",
      src:`${Dashboard}`,
      alt:"DashBoard",
      clickHandler:()=>alert('clicked'),
    },
    {
      title:"My portfolio" ,
      testid:"portfolio-button",
      src:`${Portfolio}`,
      alt:"My portfolio",
      clickHandler:()=>alert('clicked'),
    },
    {
      title:"trade",
      testid:"trade-button",
      src:`${Trade}`,
      alt:"trade",
      clickHandler:()=>alert('clicked'),
    },
    {
      title:"notifications",
      testid:"notifications-button",
      src:`${Notification}`,
      alt:"notifications",
      clickHandler:()=>alert('clicked'),
    },
    {
      title:"logout",
      testid:"logout-button",
      src:`${Logout}`,
      alt:"logout",
      clickHandler:()=>alert('clicked'),
    },
  ]

  export const initialstate = [
    {
      "name": "Bitcoin",
      "symbol": "BTC",
      "price": 2015273.74,
      "image": "https://assets.coingecko.com/coins/images/1/large/bitcoin.png?1547033579",
      "change": "+6.45%",
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
    }
  ]


