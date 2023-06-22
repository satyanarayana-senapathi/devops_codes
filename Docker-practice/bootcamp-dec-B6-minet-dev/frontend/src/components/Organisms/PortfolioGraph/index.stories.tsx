import { PortfolioGraph } from '.';
import { ComponentMeta, ComponentStory }  from '@storybook/react';
import { theme } from '../../../theme/theme';
import { ThemeProvider } from '@mui/material';
export default {
    title: 'Organisms/EmptyStatePortfolio',
    component:PortfolioGraph,
} as ComponentMeta<typeof PortfolioGraph>

const Template :ComponentStory<typeof PortfolioGraph> = args => <ThemeProvider theme={theme}><PortfolioGraph ></PortfolioGraph></ThemeProvider>

export const graph = Template.bind({})
graph.args= {
}