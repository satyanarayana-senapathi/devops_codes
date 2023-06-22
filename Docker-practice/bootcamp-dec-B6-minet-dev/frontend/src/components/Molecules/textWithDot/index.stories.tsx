import { TextDot } from '.';
import { ComponentMeta, ComponentStory }  from '@storybook/react';
import { theme } from '../../../theme/theme';
import { ThemeProvider } from '@mui/material';
export default {
    title: 'Molecules/TextDot', 
    component: TextDot,
} as ComponentMeta<typeof TextDot>

const Template :ComponentStory<typeof TextDot> = args => <ThemeProvider theme={theme}><TextDot {...args}></TextDot></ThemeProvider>

export const text = Template.bind({})
text.args= {
    variant1:"caption2",
    variant2: "overline" ,
    firstText: "total",
    secondText: "$24,500",
    fontWeight: "500"
}