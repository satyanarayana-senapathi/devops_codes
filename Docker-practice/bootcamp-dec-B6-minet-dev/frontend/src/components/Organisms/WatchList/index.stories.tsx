import { Meta, Story } from "@storybook/react";
import { Provider } from "react-redux";
import { ThemeProvider } from "styled-components";
import WatchList from ".";
import { store } from "../../../../public/store";
import { theme } from "../../../theme/theme";
import { MemoryRouter, Routes, Route } from "react-router-dom";

export default {
  component: WatchList,
  title: "Organisms/WatchList",
} as Meta;

const Template: Story = (args) => (
  <MemoryRouter>
    <Routes>
      <Route
        path="/"
        element={
          <Provider store={store}>
            <ThemeProvider theme={theme}>
              <WatchList {...args} />
            </ThemeProvider>
          </Provider>
        }
      />
    </Routes>
  </MemoryRouter>
);

export const Default = Template.bind({});
