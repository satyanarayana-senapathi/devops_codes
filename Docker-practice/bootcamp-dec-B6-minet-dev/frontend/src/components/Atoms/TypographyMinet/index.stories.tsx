import TypographyMinet from "./index";
import { ThemeProvider } from "@mui/material";
import {theme} from "../../../theme/theme"
import { ComponentStory, ComponentMeta } from '@storybook/react';
export default {
    title:"Atoms/Typography",
    component:TypographyMinet,
    argTypes:{
      backgroundColor:{control:'color'},
    }
}as ComponentMeta<typeof TypographyMinet>
const Template:ComponentStory<typeof TypographyMinet>= args=><ThemeProvider theme={theme}><TypographyMinet {...args}/></ThemeProvider>
export const typography_Minet= Template.bind({});
typography_Minet.args = {
 variant:'h4',
 children:'Dashboard',
 sx:{color:theme.palette.error.main}
};
