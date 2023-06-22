import { Graph } from '.';
import { ComponentMeta, ComponentStory }  from '@storybook/react';
import { theme } from '../../../theme/theme';
import { ThemeProvider } from '@mui/material';
export default {
    title: 'Molecules/Graph', 
    component: Graph,
} as ComponentMeta<typeof Graph>

const Template :ComponentStory<typeof Graph> = args => <ThemeProvider theme={theme}><Graph {...args}></Graph></ThemeProvider>

export const Bitcoin = Template.bind({})
Bitcoin.args= {
    id:'Bitcoin',
    colors:['#FFA74F','#0052FF'],
    opacity: 0.1,
    series:[
            {
                name:'Bitcoin',
                data:[18,36,33,50,40,45]
            },
            {
                name:'Total Investment',
                data:[18,30,27,35,34,36]
            }
    ],
    width:"780px",
    height:"300px"
}