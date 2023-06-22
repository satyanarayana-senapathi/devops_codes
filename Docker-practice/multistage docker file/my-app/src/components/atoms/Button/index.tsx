import React from 'react'
import { Interface } from 'readline'

interface SymbolProps{
    symbol:string;
    onclick:()=>void;
}
const Buttons = (props:SymbolProps) => {

  return (
    <div>
        <button onClick={props.onclick}>{props.symbol}</button>
    </div>
  )
}

export default Buttons