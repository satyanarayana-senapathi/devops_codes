import { Card,Stack,styled } from "@mui/material"
import TypographyMinet from "../../Atoms/TypographyMinet"
import Image from "../../Atoms/Image"
import rupee from '../../../../public/assets/images/rupee.svg'
import {useSelector} from 'react-redux'
import { Remaining, USDollar } from "../../../utils/constants"

const StyledCard = styled(Card)(()=>(
    {
        width:"100%",
        height:'140px',
        borderRadius:'4px',
        padding:"24px",
        gap:'16px',
        border: "1px solid #E8E8F7",
    }
))
const StyledCard2 = styled(Card)(()=>(
    {
        width:"100%",
        height:'60px',
        borderRadius:'4px',
        padding:'16px 0px',
        margin:'16px 0px',
        border: "1px solid #E8E8F7",
    }
))


export const PaymentMethod = () => {
    const remaining = useSelector((state: {remainingAmountDetails : { value: Remaining}})=> state.remainingAmountDetails.value)
    return (
        <StyledCard elevation={0}>
            <TypographyMinet variant="body1" sx={{fontWeight:'500', color:'text.disabled'}}>Payment Method</TypographyMinet>
            <StyledCard2 elevation={0}>
                <Stack direction='row' sx={{ display:'flex', justifyContent:'space-between'}}>
                    <Stack direction='row' gap='12px' >
                        <Stack sx={{ padding:'8px 0px 8px 8px'}}>
                            <Image src={rupee} alt="USD coin" height="32px" width="32px"></Image>
                        </Stack>
                        <Stack gap='4px' sx={{padding:'8px 0px'}}>
                            <TypographyMinet variant="caption1" sx={{ fontWeight:'500', color:'text.disabled'}}>USD Coin (Cash)</TypographyMinet> 
                            <TypographyMinet variant="subtitle1" sx={{ fontWeight:'500', color:'text.secondary'}}>Total balance - {USDollar.format(remaining.remaining)}</TypographyMinet>
                        </Stack>
                    </Stack>
                    <TypographyMinet variant="caption1" sx={{fontWeight:'500',color:'text.secondary', padding:'16px 32px'}}>Default</TypographyMinet>
                </Stack>
                
            </StyledCard2>
        </StyledCard>
    )
}