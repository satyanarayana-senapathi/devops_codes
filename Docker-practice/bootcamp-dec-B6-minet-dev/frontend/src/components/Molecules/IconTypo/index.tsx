import { Stack } from "@mui/material"
import Image from "../../Atoms/Image"
import TypographyMinet from "../../Atoms/TypographyMinet"

interface Props {
    image: string
    firstText: string
    secondText: string
}

export const IconTypo = (props:Props) => {
    return (
        <Stack data-testid="iconTypo" direction="row">
          <Stack sx={{ padding: "0px 0px 0px 24px" }}>
            <Image src={props.image} alt={props.image} width="42px" height="42px"></Image>
          </Stack>
          <Stack gap="2px" sx={{ padding: "0px 0px 0px 12px" }}>
            <TypographyMinet
              variant="caption2"
              sx={{ fontweight: "400", color: "text.secondary" }}
            >
              {props.firstText}
            </TypographyMinet>
            <TypographyMinet
              variant="body1"
              sx={{ fontweight: "500", color: "text.disabled" }}
            >
              {props.secondText}
            </TypographyMinet>
          </Stack>
        </Stack>
    )
}