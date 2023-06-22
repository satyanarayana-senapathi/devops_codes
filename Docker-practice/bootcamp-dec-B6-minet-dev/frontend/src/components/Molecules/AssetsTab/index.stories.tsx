import AssetsTab from ".";
import { ThemeProvider } from "@mui/material";
import {theme} from "../../../theme/theme"
import { ComponentStory, ComponentMeta } from '@storybook/react';
export default {
    title:"Molecules/AssetsTab",
    component:AssetsTab
}as ComponentMeta<typeof AssetsTab>
const Template:ComponentStory<typeof AssetsTab>= args=><ThemeProvider theme={theme}><AssetsTab {...args}/></ThemeProvider>
export const Typography= Template.bind({});
Typography.args = {
name:"Bitcoin",
Stockname:"BTC",
img:"https://assets.coingecko.com/coins/images/1/large/bitcoin.png?1547033579",
price:"$24,345.66",
change:"+1.23%",
marketCap:"$6.23T",
watchList:false,
mock:()=>{}
};