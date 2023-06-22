import '@testing-library/jest-dom'
import { fireEvent, screen, render, waitForElementToBeRemoved} from "@testing-library/react";
import { PortfolioGraph } from ".";
import {server} from '../../../server/server'
import {rest} from 'msw'
import { BASE_URL } from '../../../utils/constants';

jest.mock('react-apexcharts', () => ({
    __esModule: true,
    default: () => <div/>,
}))

describe('Portfolio-value', () => {
    test('Image', async () => {
        render(<PortfolioGraph/>)
        await waitForElementToBeRemoved( 
            screen.queryByText("Loading...")
          );

        const alttext= screen.getByAltText('portfolio-value')
        expect(alttext).toBeInTheDocument()

        const arrow= screen.getByAltText('arrow')
        expect(arrow).toBeInTheDocument()

    })
    test('Text',async () => {
        render(<PortfolioGraph/>)
        await waitForElementToBeRemoved( 
            screen.queryByText("Loading...")
          );

        const heading= screen.getByText('My Portfolio Value')
        expect(heading).toBeInTheDocument()

        const Investment= screen.getByText('Total Investment')
        expect(Investment).toBeInTheDocument()

        const percentage = screen.getByText('+0.0%')
        expect(percentage).toBeInTheDocument()

        const value= screen.getByText('$0.00')
        expect(value).toBeInTheDocument()
    })
    test('Tab', async () => {
        render(<PortfolioGraph/>)
        await waitForElementToBeRemoved( 
            screen.queryByText("Loading...")
          );
        const tabs= screen.getByTestId('tabs')
        expect(tabs).toBeInTheDocument()

        const option= screen.getByTestId('tab-1M')
        expect(option).toBeInTheDocument()
    })
    test("switches tab", async ()=>{
        render(<PortfolioGraph/>)
        await waitForElementToBeRemoved( 
            screen.queryByText("Loading...")
          );
        fireEvent.click(screen.getByTestId('tab-1Y'));
        expect(screen.getByText('1Y')).toHaveClass('Mui-selected')
    })
    test("Graphs display", async () => {
        render(<PortfolioGraph/>)
        await waitForElementToBeRemoved( 
            screen.queryByText("Loading...")
          );

        const upArrow =  require("../../../../public/assets/images/upArrow.svg")
        const downArrow =  require("../../../../public/assets/images/downArrow.svg")

        const initial = screen.getByTestId('initialState')
        console.log(initial)
        expect(initial).toBeInTheDocument()

        const button= screen.getByRole('button',{name:'Bitcoin'})
        fireEvent.click(button);

        expect(screen.getByTestId('area-graph')).toBeInTheDocument()

        const investmentInfo =screen.getByTestId("investment");
        const coinArrow = screen.getByAltText("coinarrow");
        const coinRate = screen.getByTestId("coinRate");
        expect(investmentInfo).toBeInTheDocument();
        expect(coinArrow).toHaveAttribute("src",upArrow);
        expect(coinRate).toHaveTextContent("+7.40%");
        expect(coinRate).toHaveStyle({ color: "#20B03F" });


        const button2= screen.getByRole('button',{name:'Ethereum'})
        fireEvent.click(button2);
        const investmentInfo2 = screen.getByTestId("investment");
        const coinArrow2 = screen.getByAltText("coinarrow");
        const coinRate2 = screen.getByTestId("coinRate");
        expect(investmentInfo2).toBeInTheDocument();
        expect(coinArrow2).toHaveAttribute("src", downArrow);
        expect(coinRate2).toHaveTextContent("-4.20%");
        expect(coinRate2).toHaveStyle({ color: "#B71A33" });

    })
    test('error handling', async () => {
        server.use(
            rest.get(`${BASE_URL}/data`,
            (req,res,ctx)=>{
                return res(ctx.status(500))
            })
        )
        render(<PortfolioGraph/>)
        await waitForElementToBeRemoved( 
            screen.queryByText("Loading...")
        );   
        const error= await screen.findByText('Data of chips is not fetched')
        expect(error).toBeInTheDocument()
    })
    test('handling empty state', async () => {
        const items=[{
            name:'',
            totalInvestment:'$0.00',
            totalRate:'+0.0%',
            coinInvestment:'',
            coinRate:'',
        }]
        server.use(
            rest.get(`${BASE_URL}/data`,
            (req,res,ctx)=>{
                return res(ctx.json(items))
            })
        )
        render(<PortfolioGraph/>)
        await waitForElementToBeRemoved( 
            screen.queryByText("Loading...")
        );   
        const initial = screen.getByTestId('initialState')
        console.log(initial)
        expect(initial).toBeInTheDocument()
    })
})

