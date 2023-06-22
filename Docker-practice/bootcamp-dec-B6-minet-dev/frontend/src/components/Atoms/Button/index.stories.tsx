import { Meta, Story } from "@storybook/react/types-6-0";
import Button, { Props } from "./index";

export default {
  title: "Atoms/Button",
  component: Button,
} as Meta;

const Template: Story<Props> = (args) => <Button {...args} />;

export const Buy = Template.bind({});
Buy.args = { children: "Buy" };
