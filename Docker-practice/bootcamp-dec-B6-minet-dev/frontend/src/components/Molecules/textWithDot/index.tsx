import {Stack} from "@mui/material"
import TypographyMinet from "../../Atoms/TypographyMinet"

interface Props {
    variant1:"h1" | "button" | "caption" | "h2" | "h3" | "h4" | "h5" | "h6" | "subtitle1" | "subtitle2" | "body1" | "body2" | "overline" | "inherit" | "caption1" | "caption2" | undefined
    variant2:"h1" | "button" | "caption" | "h2" | "h3" | "h4" | "h5" | "h6" | "subtitle1" | "subtitle2" | "body1" | "body2" | "overline" | "inherit" | "caption1" | "caption2" | undefined
    firstText: string
    secondText: string
    fontWeight: string
}

export const TextDot= (props:Props) => {
    return (
        <Stack data-testid="textDot" sx={{display:"flex",alignItems:"center",width:"100%"}} direction="row">
            <TypographyMinet fontWeight={props.fontWeight} variant={props.variant1} sx={{color: "text.disabled", textTransform:"none", whiteSpace:"nowrap"}}>{props.firstText} </TypographyMinet>
            <TypographyMinet sx={{fontweight: 400,color: "text.disabled", paddingBottom:"8px"}} noWrap> ............................................................................................................................................................................................................................................................................................................................. </TypographyMinet>
            <TypographyMinet fontWeight={props.fontWeight} variant={props.variant2} sx={{color: "text.disabled", whiteSpace:"nowrap"}}>{props.secondText}</TypographyMinet>
        </Stack>
    )
}