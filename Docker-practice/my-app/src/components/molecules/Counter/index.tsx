import React, { useState } from 'react'
import Typo from '../../atoms/Text'
import Buttons from '../../atoms/Button'

const CounterApp = () => {
    const [count,setCount]=useState(0)
    const increment=()=>{
        setCount(count+1)
    }
    const decrement=()=>{
        setCount(count-1)
    }
  return (
    <div>
        <Typo/>
        <div className='btn'>
            <Buttons symbol={'-'} onclick={ decrement}/>
            {count}
            <Buttons symbol={'+'} onclick={increment} />
        </div>
    </div>
  )
}

export default CounterApp