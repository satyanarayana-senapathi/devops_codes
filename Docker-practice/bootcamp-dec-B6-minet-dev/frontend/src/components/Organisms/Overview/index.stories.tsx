import { Meta, Story } from "@storybook/react";
import { Provider } from "react-redux";
import { ThemeProvider } from "styled-components";
import Overview from ".";
import { store } from "../../../../public/store";
import { theme } from "../../../theme/theme";

export default {
  component: Overview,
  title: "Organisms/Overview",
} as Meta;

const Template: Story = (args) => <Provider store={store}><ThemeProvider theme={theme}><Overview coinName={"Bitcoin"} {...args} /></ThemeProvider></Provider>;

export const Default = Template.bind({});