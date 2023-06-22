import { IconTypo } from '.';
import { ComponentMeta, ComponentStory }  from '@storybook/react';
import { theme } from '../../../theme/theme';
import { ThemeProvider } from '@mui/material';
import Delivery from "../../../../public/assets/images/delivery.svg"
export default {
    title: 'Molecules/IconTypo', 
    component: IconTypo,
} as ComponentMeta<typeof IconTypo>

const Template :ComponentStory<typeof IconTypo> = args => <ThemeProvider theme={theme}><IconTypo {...args}></IconTypo></ThemeProvider>

export const Icontypo = Template.bind({})
Icontypo.args= {
    image: `${Delivery}`,
    firstText: "Delivery",
    secondText: "0.01BTC"
}