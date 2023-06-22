import { ComponentMeta, ComponentStory } from "@storybook/react";
import NavBar from ".";
import { MemoryRouter, Routes, Route } from "react-router-dom";
export default {
  title: "molecules/navbar",
  component: NavBar,
} as ComponentMeta<typeof NavBar>;

const Template: ComponentStory<typeof NavBar> = (args) => (
  <MemoryRouter>
    <Routes>
      <Route path="/" element={<NavBar {...args} />} />
    </Routes>
  </MemoryRouter>
);

export const navbar = Template.bind({});
navbar.args = {
  direction: "row",
  width: "10rem",
  placement: "bottom",
};
