import { ComponentMeta, ComponentStory } from "@storybook/react";
import { Provider } from "react-redux";
import { ThemeProvider } from "@mui/material";
import { Box } from "@mui/material";
import RecentTransactions from "../recentTransaction";
import { store } from "../../../../public/store/index";
import { theme } from "../../../theme/theme";

export default {
  title: "Organisms/Recent Transactions",
  component: RecentTransactions,
} as ComponentMeta<typeof RecentTransactions>;

const Template: ComponentStory<typeof RecentTransactions> = () => (
  <Provider store={store}>
    <ThemeProvider theme={theme}>
      <Box maxWidth={500}>
        <RecentTransactions />
      </Box>
    </ThemeProvider>
  </Provider>
);

export const Default = Template.bind({});
Default.args = {};
