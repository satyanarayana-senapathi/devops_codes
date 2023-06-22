import AfterBuyNow from ".";
import { ThemeProvider } from "@mui/material";
import {theme} from "../../../theme/theme"
import { ComponentStory, ComponentMeta } from '@storybook/react';
export default {
    title:"Molecules/AfterBuyNow",
    component:AfterBuyNow,
    argTypes:{
     ammount:{control:"text"}
    }
}as ComponentMeta<typeof AfterBuyNow>
const Template:ComponentStory<typeof AfterBuyNow>= args=><ThemeProvider theme={theme}><AfterBuyNow {...args}/></ThemeProvider>
export const Variant= Template.bind({});
Variant.args = {
ammount:"0.0256091 BTC"
};