import { Box, Slider, SliderProps} from "@mui/material";

export const SliderBar = (props: SliderProps) => {
  return (
  <Box sx={{height:'100%'}}>
     <Slider {...props}  />
    </Box>
  )
};