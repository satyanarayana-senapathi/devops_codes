import { Card,Stack,styled,Divider   } from "@mui/material"
import TypographyMinet from "../../Atoms/TypographyMinet"
import Button from "../../Atoms/Button"
import Image from "../../Atoms/Image"
import speedDelivery from '../../../../public/assets/images/speedDelivery.svg'
import updrop from '../../../../public/assets/images/updrop.svg'
import downdrop from '../../../../public/assets/images/downdrop.svg'
import { useState, useEffect } from "react"
import {useSelector,useDispatch} from 'react-redux'
import { fee } from "../../../../public/store/features/transaction"
import { Data } from "../../../utils/constants"
const StyledCard = styled(Card)(()=>(
    {
        width:"100%",
        height:'auto',
        borderRadius:'4px',
        padding:"24px",
        gap:'16px',
        border: "1px solid #E8E8F7",
    }
))
const StyledCard2 = styled(Card)(()=>(
    {
        width: "100%",
        height: "74px",
        display: "flex",
        margin:"16px 0px",
        justifyContent: "space-between",
        flexDirection: "row",
        border: "1px solid #E8E8F7",
    }
))

export const DeliveryDetails = () => {
    const dispatch =useDispatch()
    const coinData = useSelector((state: { cryptoData: {value: Data }}) => state.cryptoData.value)
    const [toggle, setToggle] = useState<boolean>(false)
    const [time, setTime] = useState('2-5 min')
    const [transportation, setTransportation] = useState<number>(0.001)
    const handleToggle = () => {
        setToggle(!toggle)
    }
    const handleClick = (timeStr:string, val: number) => {
        setTime(timeStr)
        setTransportation(val)
        dispatch(fee({fee: val}))
        setToggle(!toggle)
    }
    useEffect(() => {
        setTime('2-5 min')
        setTransportation(0.001)
      }, [coinData]);
    return (
        <StyledCard elevation={0}>
            <TypographyMinet variant="body1" sx={{fontWeight:'500', color:'text.disabled'}}>Select speed Delivery</TypographyMinet>
            <StyledCard2 elevation={0}>
                    <Stack direction='row' gap='18px' >
                        <Stack sx={{ padding:'24px 0px 29px 24px'}}>
                           <Image src={speedDelivery} alt="USD coin" height="32px" width="32px"></Image>
                        </Stack>
                        <Stack gap='4px' sx={{padding:'16px 0px'}}>
                            <TypographyMinet variant="body1" sx={{ fontWeight:'500', color:'text.disabled'}}>Instance : {time}</TypographyMinet> 
                            <TypographyMinet variant="caption1" sx={{ fontWeight:'500', color:'text.secondary'}}>Transaction fees : {transportation}{coinData.symbol}</TypographyMinet>
                        </Stack>
                    </Stack>
                    <Stack sx={{ padding:'28px 0px'}}>
                    <Button variant="text" onClick = {handleToggle}><Image src={toggle===true? updrop : downdrop} alt='dropdown'></Image></Button>
                    </Stack>
            </StyledCard2>
            { toggle === true ? <>
            <Stack>
                <Stack data-testid='instance' onClick={()=>handleClick('2-5 minutes', 0.001)} direction='row' sx={{width:'580px', padding:'16px 24px 16px 60px', display:'flex', justifyContent:'space-between'}}>
                        <TypographyMinet variant="body1" sx={{ fontWeight:'500', color:'text.disabled'}}>Instance : 2-5 minutes</TypographyMinet>
                        <TypographyMinet variant="caption2" sx={{fontWeight:400, color:'text.secondary'}}>Delivery fees : 0.001 {coinData.symbol}</TypographyMinet>
                </Stack>
                <Divider/>
                <Stack data-testid='faster' onClick={()=>handleClick('4 hours', 0.0001)} direction='row' sx={{width:'580px', padding:'16px 24px 16px 60px', display:'flex', justifyContent:'space-between'}}>
                        <TypographyMinet variant="body1" sx={{ fontWeight:'500', color:'text.disabled'}}>Faster : 4 hours</TypographyMinet>
                        <TypographyMinet variant="caption2" sx={{fontWeight:400, color:'text.secondary'}}>Delivery fees : 0.0001 {coinData.symbol}</TypographyMinet>
                </Stack>
                <Divider/>
                <Stack data-testid='fast' onClick={()=>handleClick('120 hours', 0.00001)} direction='row' sx={{width:'580px', padding:'16px 24px 16px 60px', display:'flex', justifyContent:'space-between'}}>
                        <TypographyMinet variant="body1" sx={{ fontWeight:'500', color:'text.disabled'}}>Fast : 120 hours</TypographyMinet>
                        <TypographyMinet variant="caption2" sx={{fontWeight:400, color:'text.secondary'}}>Delivery fees : 0.00001 {coinData.symbol}</TypographyMinet>
                </Stack>
                <Divider/>
                <Stack data-testid='none' onClick={()=>handleClick('', 0)} direction='row' sx={{width:'580px', padding:'16px 24px 16px 60px', display:'flex', justifyContent:'space-between'}}>
                        <TypographyMinet variant="body1" sx={{ fontWeight:'500', color:'text.disabled'}}>None</TypographyMinet>
                </Stack>
                <Divider/>

            </Stack>
            </> : <></> }
        </StyledCard>
    )
}
