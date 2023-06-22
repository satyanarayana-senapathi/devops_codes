import { Buy } from ".";
import { ComponentMeta, ComponentStory } from "@storybook/react";
import { theme } from "../../../theme/theme";
import { ThemeProvider } from "@mui/material";
import { Provider } from "react-redux";
import { store } from "../../../../public/store";
import { MemoryRouter, Routes, Route } from "react-router-dom";
export default {
  title: "Organisms/Buy",
  component: Buy,
} as ComponentMeta<typeof Buy>;

const Template: ComponentStory<typeof Buy> = args => (
  <MemoryRouter>
    <Routes>
      <Route
        path="/"
        element={
          <Provider store={store}>
            <ThemeProvider theme={theme}>
              <Buy ></Buy>
            </ThemeProvider>
          </Provider>
        }
      />
    </Routes>
  </MemoryRouter>
);

export const buyCoin = Template.bind({});
buyCoin.args = {};
