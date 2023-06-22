import { Meta, Story } from "@storybook/react";
import { Provider } from "react-redux";
import { ThemeProvider } from "styled-components";
import TradeScreen from ".";
import { store } from "../../../../public/store";
import { theme } from "../../../theme/theme";

export default {
  component: TradeScreen,
  title: "Organisms/TradeScreen",
} as Meta;

const Template: Story = (args) => <Provider store={store}><ThemeProvider theme={theme}><TradeScreen currency={"Bitcoin"} {...args} /></ThemeProvider></Provider>;

export const Default = Template.bind({});