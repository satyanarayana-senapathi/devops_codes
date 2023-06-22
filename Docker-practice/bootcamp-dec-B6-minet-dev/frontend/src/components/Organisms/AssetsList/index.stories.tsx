import Assets from ".";
import { ComponentMeta, ComponentStory } from "@storybook/react";
import { theme } from "../../../theme/theme";
import { ThemeProvider } from "@mui/material";
import { Provider } from "react-redux";
import { store } from "../../../../public/store";
import { MemoryRouter, Routes, Route } from "react-router-dom";
export default {
  title: "Organisms/Assetslist",
  component: Assets,
} as ComponentMeta<typeof Assets>;

const Template: ComponentStory<typeof Assets> = args => (
  <MemoryRouter>
    <Routes>
      <Route
        path="/"
        element={
          <Provider store={store}>
            <ThemeProvider theme={theme}>
              <Assets state={1} />
            </ThemeProvider>
          </Provider>
        }
      />
    </Routes>
  </MemoryRouter>
);

export const AssetsList = Template.bind({});
AssetsList.args = {};
