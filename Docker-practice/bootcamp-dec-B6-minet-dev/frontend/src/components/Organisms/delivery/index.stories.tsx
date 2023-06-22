import { DeliveryDetails } from '.';
import { ComponentMeta, ComponentStory }  from '@storybook/react';
import { theme } from '../../../theme/theme';
import { ThemeProvider } from '@mui/material';
import { Provider } from 'react-redux';
import { store } from '../../../../public/store';
export default {
    title: 'Organisms/Delivery details',
    component:DeliveryDetails,
} as ComponentMeta<typeof DeliveryDetails>

const Template :ComponentStory<typeof DeliveryDetails> = args => <Provider store={store}><ThemeProvider theme={theme}><DeliveryDetails /></ThemeProvider></Provider>

export const delivery = Template.bind({})
delivery.args= {
}