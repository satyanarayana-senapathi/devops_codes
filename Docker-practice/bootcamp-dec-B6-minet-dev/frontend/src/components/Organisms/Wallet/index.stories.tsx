import { Meta, Story } from "@storybook/react";
import { Provider } from "react-redux";
import { ThemeProvider } from "styled-components";
import Wallet from ".";
import { store } from "../../../../public/store";
import { theme } from "../../../theme/theme";

export default {
  component: Wallet,
  title: "Organisms/Wallet",
} as Meta;

const Template: Story = (args) => <Provider store={store}><ThemeProvider theme={theme}><Wallet mock={function (arg0: string): void {
  throw new Error("Function not implemented.");
} } coinName={"Bitcoin"} {...args} /></ThemeProvider></Provider>;

export const Default = Template.bind({});