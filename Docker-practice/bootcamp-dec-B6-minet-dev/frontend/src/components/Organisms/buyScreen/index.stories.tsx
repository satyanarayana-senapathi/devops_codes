import { BuyCheckout } from '.';
import { ComponentMeta, ComponentStory }  from '@storybook/react';
import { theme } from '../../../theme/theme';
import { ThemeProvider } from '@mui/material';
import { store } from '../../../../public/store';
import { Provider } from 'react-redux';
import { MemoryRouter, Routes, Route } from 'react-router-dom';
export default {
    title: 'Organisms/BuyCheckOut',
    component:BuyCheckout,
} as ComponentMeta<typeof BuyCheckout>

const Template :ComponentStory<typeof BuyCheckout> = args =>  <MemoryRouter>
<Routes>
  <Route
    path="/"
    element={<Provider store={store}><ThemeProvider theme={theme}><BuyCheckout/></ThemeProvider></Provider> }
    />
  </Routes>
</MemoryRouter>

export const BuyScreen = Template.bind({})
BuyScreen.args= {}