import { Dropdown } from '.';
import { ComponentMeta, ComponentStory }  from '@storybook/react';
import {theme} from '../../../theme/theme'
import { ThemeProvider } from '@emotion/react';
export default {
    title: 'atoms/DropDown',
    component: Dropdown,
} as ComponentMeta<typeof Dropdown>

      
const Template :ComponentStory<typeof Dropdown> = args => <ThemeProvider theme={theme}><Dropdown {...args}></Dropdown></ThemeProvider>

export const language = Template.bind({})
language.args= {
    Menu: ["English", "Hindi", "Telugu"],
}

export const profile = Template.bind({})
profile.args= {
    Menu: ["Dashboard", "MyProfile", "Settings", "Logout"],
}

export const Time = Template.bind({})
Time.args= {
    Menu: ["1h","2h", "8h", "24h", "1d", "1W"],
}

export const asset = Template.bind({})
asset.args= {
    Menu: ["Bitcoin", "Ethereum", "Ethereum2", "Tether", "Cardano", "XRP", "Dodge Coin", "USD Coin"],
}