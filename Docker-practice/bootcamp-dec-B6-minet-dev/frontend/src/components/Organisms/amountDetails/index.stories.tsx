import { AmountDetails } from '.';
import { ComponentMeta, ComponentStory }  from '@storybook/react';
import { theme } from '../../../theme/theme';
import { ThemeProvider } from '@mui/material';
import { Provider } from 'react-redux';
import { store } from '../../../../public/store';
export default {
    title: 'Organisms/Amount Details',
    component: AmountDetails,
} as ComponentMeta<typeof AmountDetails>

const Template :ComponentStory<typeof AmountDetails> = args => <Provider store={store}><ThemeProvider theme={theme}><AmountDetails ></AmountDetails></ThemeProvider></Provider>

export const amount = Template.bind({})
amount.args= {
}