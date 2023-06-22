import React from "react";
import { Story, Meta } from "@storybook/react/types-6-0";
import { SearchBar, SearchBarProps } from "../SearchBar";

export default {
  title: "atoms/SearchBar",
  component: SearchBar,
  argTypes: {
    placeholder: {
      control: {
        type: "text",
      },
    },
    size: {
      control: {
        type: "select",
        options: ["small", "medium", "large"],
      },
    },
    showSearchIcon: {
      control: {
        type: "boolean",
      },
    },
    showFilterIcon: {
      control: {
        type: "boolean",
      },
    },
  },
} as Meta;

const Template: Story<SearchBarProps> = (args) => <SearchBar {...args} />;

export const Default = Template.bind({});
Default.args = {
  placeholder: "Search",
};
