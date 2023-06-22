import { Crypto } from "../coins"
import { AmountDetails } from "../amountDetails"
import { Buy } from "../buy"
import { DeliveryDetails } from "../delivery"
import { PaymentMethod } from "../paymentsMethod"
import { Stack } from "@mui/material"
import TypographyMinet from "../../Atoms/TypographyMinet"


export const BuyCheckout = () => {
    return (
            <Stack data-testid='buy/checkout' direction="row" sx={{justifyContent:"space-between", maxWidth:"93vw",height:"max-content"}}>
                <Stack sx={{padding:"16px 42px 25px 25px", width:"58%"}}>
                    <TypographyMinet variant="subtitle1" sx={{ fontWeight:700,color:'text.disabled', padding:'24px 0px 12px 0px'}}>Buy Crypto</TypographyMinet>
                    <Stack gap='24px' >
                        <Stack sx={{width:"105.5%"}}>
                            <Crypto></Crypto>
                        </Stack>
                        <Stack gap="25px">
                        <PaymentMethod></PaymentMethod>
                        <AmountDetails></AmountDetails>
                        <DeliveryDetails></DeliveryDetails>
                        </Stack>
                    </Stack>
                </Stack>
                <Stack sx={{width:"35%"}}>
                    <Buy></Buy>
                </Stack>
            </Stack>
    )
}