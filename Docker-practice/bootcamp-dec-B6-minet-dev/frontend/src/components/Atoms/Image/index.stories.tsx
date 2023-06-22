import { ComponentMeta, ComponentStory } from "@storybook/react";
import logo from "../../../../public/assets/dashboard.svg"
import  Image  from ".";
export default {
  title: "Atoms/Image",
  component: Image,
} as ComponentMeta<typeof Image>;

const Template: ComponentStory<typeof Image> = (args) => <Image {...args} />;

export const Icon = Template.bind({});
Icon.args = {
  src:`${logo}`
};