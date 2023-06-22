import { PaymentMethod } from '.';
import { ComponentMeta, ComponentStory }  from '@storybook/react';
import { theme } from '../../../theme/theme';
import { ThemeProvider } from '@mui/material';
import { store } from '../../../../public/store';
import { Provider } from 'react-redux';
export default {
    title: 'Organisms/payment method',
    component:PaymentMethod,
} as ComponentMeta<typeof PaymentMethod>

const Template :ComponentStory<typeof PaymentMethod> = args => <Provider store={store}><ThemeProvider theme={theme}><PaymentMethod ></PaymentMethod></ThemeProvider></Provider>

export const paymentMethod = Template.bind({})
paymentMethod.args= {
}