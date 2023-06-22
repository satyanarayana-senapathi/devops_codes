import { Crypto } from '.';
import { ComponentMeta, ComponentStory }  from '@storybook/react';
import { theme } from '../../../theme/theme';
import { ThemeProvider } from '@mui/material';
import { store } from '../../../../public/store';
import { Provider } from 'react-redux';
export default {
    title: 'Organisms/crypto',
    component:Crypto,
} as ComponentMeta<typeof Crypto>

const Template :ComponentStory<typeof Crypto> = args => <Provider store={store}><ThemeProvider theme={theme}><Crypto ></Crypto></ThemeProvider></Provider>

export const coins = Template.bind({})
coins.args= {
}