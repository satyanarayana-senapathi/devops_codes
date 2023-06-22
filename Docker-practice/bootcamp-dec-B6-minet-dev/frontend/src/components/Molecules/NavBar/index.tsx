import {
    Card,
    IconButton,
    Tooltip,
  } from "@mui/material";
  import { Stack, StackProps } from "@mui/system";
import { useNavigate } from "react-router-dom";
import { options } from "../../../utils/constants";
  import Image from "../../Atoms/Image";
  
  
  interface MyProps extends StackProps {
    placement?:
      | "top"
      | "right"
      | "bottom"
      | "left"
      | "bottom-end"
      | "bottom-start"
      | "left-end"
      | "left-start"
      | "right-end"
      | "right-start"
      | "top-end"
      | "top-start";
  }
  const NavBar = (props: MyProps) => {
    const navigate=useNavigate()  
    const {
      direction = "column",
      spacing = "2rem",
      width = "auto",
      placement = "right",
    } = props;
 

    return (
      <Card sx={{height:'100%',width:{width}}}>
        <Stack direction={direction} spacing={spacing} padding={2}>
          {options.map((icon) =>(
          <Tooltip title={icon.title} placement={placement} arrow key={icon.title}>
            <IconButton onClick={()=>{
               if(icon.title=="trade"){
                navigate("/trade/assets")
               }
              else{
                navigate("/")
              }
            }} data-testid={icon.testid}>
              <Image src={icon.src} alt={icon.alt} />
            </IconButton>
          </Tooltip>
          ))}
        </Stack>
      </Card>
    );
  };
  
  export default NavBar;