import { Meta, Story } from "@storybook/react";
import MyPortfolio from ".";
import { Provider } from "react-redux";
import { store } from "../../../../public/store";
import { MemoryRouter, Routes, Route } from "react-router-dom";

export default {
  component: MyPortfolio,
  title: "Organisms/Myportfolio",
} as Meta;

const Template: Story = (args) => (
  <MemoryRouter>
    <Routes>
      <Route
        path="/"
        element={
          <Provider store={store}>
            {" "}
            <MyPortfolio {...args} />
          </Provider>
        }
      />
    </Routes>
  </MemoryRouter>
);

export const Default = Template.bind({});
