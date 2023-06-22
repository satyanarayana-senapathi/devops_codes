import { Meta, Story } from "@storybook/react/types-6-0";
import TextFieldComponent, { Props } from "../Textfield";

export default {
  title: "Atoms/TextField",
  component: TextFieldComponent,
  argTypes: {
    id: { control: "text" },
    label: { control: "text" },
    type: { control: "radio", options: ["password", "email"] },
    value: { control: "text" },
    onChange: { action: "onChange" },
    placeholder: { control: "text" },
    disabled: { control: "boolean" },
    error: { control: "boolean" },
    helperText: { control: "text" },
    fullWidth: { control: "boolean" },
    required: { control: "boolean" },
  },
} as Meta;

const Template: Story<Props> = (args) => {
  const { type, ...rest } = args;
  return (
    <TextFieldComponent
      {...rest}
      type={type === "password" ? "password" : "email"}
    />
  );
};

export const Default = Template.bind({});
Default.args = {
  id: "default",
  label: "Default",
  type: "email",
  value: "",
  onChange: () => {},
  placeholder: "Enter your email or password",
};
