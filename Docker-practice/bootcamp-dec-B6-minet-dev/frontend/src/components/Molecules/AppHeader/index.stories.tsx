import AppHeader from ".";
import { ThemeProvider } from "@mui/material";
import { theme } from "../../../theme/theme";
import { ComponentStory, ComponentMeta } from "@storybook/react";
import { MemoryRouter, Route, Routes } from "react-router-dom";
export default {
  title: "Molecules/AppHeader",
  component: AppHeader,
  argTypes: {
    name: { control: "text" },
    path: { control: "text" },
  },
} as ComponentMeta<typeof AppHeader>;
const Template: ComponentStory<typeof AppHeader> = (args) => (
  <MemoryRouter>
    <Routes>
      <Route
        path="/"
        element={
          <ThemeProvider theme={theme}>
            <AppHeader {...args} />
          </ThemeProvider>
        }
      />
    </Routes>
  </MemoryRouter>
);
export const Variant = Template.bind({});
Variant.args = {
  name: "Dashboard",
  accounts: ["name1", "name2", "name3"],
  path: "/",
};
