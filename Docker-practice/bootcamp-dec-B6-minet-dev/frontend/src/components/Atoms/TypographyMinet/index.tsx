import Typography from '@mui/material/Typography'
import {TypographyProps } from '@mui/material'
const TypographyMinet = (props:TypographyProps ) => {
  return (
    <Typography {...props}>{props.children}</Typography>
  )
}
export default TypographyMinet