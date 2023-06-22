import { createSlice, configureStore } from '@reduxjs/toolkit'

const WatchSlice = createSlice({
  name: 'listId',
  initialState: {
    watchList:{
    
        "Bitcoin":!false,
        
        "Ethereum":!false,
        
        "Tether":!false,
        
        "BNB":!false,
        
        "USD Coin":false,
        
        "XRP":false,
        
        "Cardano":false,
        
        "Polygon":false,
        
        "Dogecoin":false,
        
        "Lido Staked Ether":false,
        
        "Binance USD":false,
        
        "Solana":false,
        
        "Polkadot":false,
        
        "Shiba Inu":false,
        
        "Dai":false,
        
        "TRON":false,
        
        "Litecoin":false,
        
        "Avalanche":false,
        
        "Uniswap":false,
        
        "Wrapped Bitcoin":false,
        
        "Toncoin":false,
        
        "Cosmos Hub":false,
        
        "Chainlink":false,
        
        "LEO Token":false,
        
        "OKB":false,
        
        "Monero":false,
        
        "Ethereum Classic":false,
        
        "Filecoin":false,
        
        "Bitcoin Cash":false,
        
        "Lido DAO":false,
        
        "Stellar":false,
        
        "Aptos":false,
        
        "TrueUSD":false,
        
        "Quant":false,
        
        "Hedera":false,
        
        "Cronos":false,
        
        "NEAR Protocol":false,
        
        "VeChain":false,
        
        "ApeCoin":false,
        
        "Internet Computer":false,
        
        "Algorand":false,
        
        "The Graph":false,
        
        "EOS":false,
        
        "Stacks":false,
        
        "Fantom":false,
        
        "The Sandbox":false,
        
        "Decentraland":false,
        
        "Aave":false,
        
        "MultiversX":false,
        
        "Frax":false,
        
        "Theta Network":false,
        
        "Flow":false,
        
        "Tezos":false,
        
        "Synthetix Network":false,
        
        "Axie Infinity":false,
        
        "KuCoin":false,
        
        "ImmutableX":false,
        
        "Pax Dollar":false,
        
        "Optimism":false,
        
        "Rocket Pool":false,
        
        "Maker":false,
        
        "Terra Luna Classic":false,
        
        "NEO":false,
        
        "Klaytn":false,
        
        "Gate":false,
        
        "Curve DAO":false,
        
        "USDD":false,
        
        "Bitcoin SV":false,
        
        "BitDAO":false,
        
        "PancakeSwap":false,
        
        "Frax Share":false,
        
        "Huobi":false,
        
        "Mina Protocol":false,
        
        "WhiteBIT Token":false,
        
        "GMX":false,
        
        "Chiliz":false,
        
        "Dash":false,
        
        "BitTorrent":false,
        
        "eCash":false,
        
        "IOTA":false,
        
        "Conflux":false,
        
        "Edgecoin":false,
        
        "Bitget Token":false,
        
        "Trust Wallet":false,
        
        "cETH":false,
        
        "Tokenize Xchange":false,
        
        "Kava":false,
        
        "PAX Gold":false,
        
        "Osmosis":false,
        
        "SingularityNET":false,
        
        "Tether Gold":false,
        
        "Render":false,
        
        "OKC":false,
        
        "Zilliqa":false,
        
        "Arweave":false,
        
        "THORChain":false,
        
        "Convex Finance":false,
        
        "XDC Network":false,
        
        "1inch":false,
        
        "WEMIX":false
        
        }
  },
  reducers: {
    changed: (state:any,action) => {
      try{
      state.watchList[action.payload]=!state.watchList[action.payload]
      }
      catch(err){}
    }
  }
})

export const { changed } = WatchSlice.actions
export default WatchSlice.reducer




