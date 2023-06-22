import { ThemeProvider } from "@mui/material";
import { ComponentMeta, ComponentStory } from "@storybook/react";
import  {SliderBar}  from ".";
import { theme } from "../../../theme/theme";
export default {
  title: "Atoms/Slider",
  component: SliderBar,
} as ComponentMeta<typeof SliderBar>;

const Template: ComponentStory<typeof SliderBar> = (args) => <ThemeProvider theme={theme}><SliderBar {...args} /></ThemeProvider>;

export const Slider_Minet = Template.bind({});
Slider_Minet.args = {
  sx:{color:theme.palette.grey[400]}
  
}