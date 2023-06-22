import { Footer } from '.';
import { ComponentMeta, ComponentStory }  from '@storybook/react';
import { theme } from '../../../theme/theme';
import { ThemeProvider } from '@mui/material';
export default {
    title: 'Molecules/footer',
    component:Footer,
} as ComponentMeta<typeof Footer>

const Template :ComponentStory<typeof Footer> = args => <ThemeProvider theme={theme}><Footer {...args} ></Footer></ThemeProvider>

export const footer = Template.bind({})
footer.args= {
}