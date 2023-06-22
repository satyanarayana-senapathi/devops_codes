import {  Stack, Paper, Card,styled} from "@mui/material"
import TypographyMinet from "../../Atoms/TypographyMinet"
import Image from "../../Atoms/Image"
import tick from '../../../../public/assets/images/tick.svg'
import { useState, useEffect } from "react"
import axios from "axios"
import {useDispatch} from 'react-redux'
import { crypto } from "../../../../public/store/features/cryptoData"
import { fee } from "../../../../public/store/features/transaction"
import {max} from "../../../../public/store/features/maxValue"
import { BASE_URL, Data, USDollar } from "../../../utils/constants"
const StyledPaper = styled(Paper)(()=>(
    {
        width:"159px",
        height:"160px",
        boxSizing:"border-box",
        display:"flex",
        flexDirection:"column",
        alignItems:"center",
        padding:"14px 0px 0px 0px",
        background: "#FFFFFF",
        borderRadius:"4px",
    }
))
const StyledCard = styled(Card)(()=>(
    {
        width:"96%",
        height:'400px',
        display:"Grid",
        borderRadius:'4px',
        gridTemplateColumns: "25% 25% 25% 25%",
        padding:"20px 0px 20px 20px",
        overflow: "hidden",
        overflowY: "scroll",
        '&::-webkit-scrollbar': {
            width: '3.5px',
            height: '146px',
          },
          '&::-webkit-scrollbar-track': {
            backgroundColor: 'white',
          },
          '&::-webkit-scrollbar-thumb': {
            backgroundColor:"#B4B4CF",
            borderRadius: 5,
            borderWidth: 2,
            borderColor: 'white',
          },
    }
))
const StyledCard1 = styled(Card)(()=>(
    {
        width:"100%",
        height:'400px',
        borderRadius:'4px',
        border: "1px solid #E8E8F7",
    }
))

export const Crypto = () => {
    const dispatch =useDispatch()
    const [data,setData] = useState<Data[]>([])
    const [error, setError] = useState<string| null>(null)
    const [border, setBorder] = useState('Bitcoin')
    useEffect(()=>{
        axios.get(`${BASE_URL}/data`)
        .then(res=>setData(res.data))
        .catch(err=>setError("Data of crypto is not fetched"))
    },[])
    const handleBorder = (item:Data) => {
        setBorder(item.name)
        dispatch(crypto(item))
        console.log(item)
        dispatch(fee({ fee: 0.01}))
        dispatch(max({ max : 0}))
    }
    return (
            <StyledCard1 elevation={0}>
            <Stack>
                <TypographyMinet variant="body1" sx={{padding:'24px 0px 0px 24px', fontWeight:600, color:'text.disabled'}} >Choose crypto</TypographyMinet>
            </Stack>   
            {error && <TypographyMinet>{error}</TypographyMinet>} 
            <StyledCard data-testid='mockServer' elevation={0}> 
            {
            data.map((data) => (
                    <StyledPaper data-testid={`mockserver-${data.name}`} key={data.name} sx={{ border: border === data.name ?'2px solid' :'', borderColor: border === data.name ? 'primary.main' : ''}} elevation={0} onClick = {() =>handleBorder(data)}>
                        {
                            border === data.name?<Stack sx={{ position:'relative',paddingLeft:'131px'}}> <Image src = {tick} alt={tick}></Image> </Stack> : <></>
                        }        
                        <Stack data-testid='mockServerData' gap='12px' sx={{ display:'flex', alignItems:'center'}}>
                            <Stack >
                                <Image key={data.name} data-testid={data.name} src={data.image} alt={data.name} width='56px' height='56px'></Image>
                            </Stack>
                            <Stack gap='2px' sx={{ display:'flex', alignItems:'center'}}>
                                <TypographyMinet variant="body1" sx={{ fontWeight:'500',color:'grey.500'}}>{data.name}</TypographyMinet>
                                <TypographyMinet variant="caption1" sx={{color:'text.secondary', fontWeight:'500'}}>{USDollar.format(data.price)}</TypographyMinet>
                            </Stack>
                        </Stack>
                    </StyledPaper>                    
            ))
        }
        </StyledCard>
        </StyledCard1>
    )
}