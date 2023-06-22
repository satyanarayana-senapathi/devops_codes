import { screen, render, fireEvent} from "@testing-library/react";
import { Footer } from ".";
describe('render correctly', () => {
    test('typography', () => {
        render(<Footer mock={(args)=>{}}/>)
        const text =  screen.getByText('Dashboard') 
        expect(text).toBeInTheDocument()
    })  
    test('button', () => {
        render(<Footer mock={(args)=>{}}/>)
        const helpButton= screen.getByRole('button',{
            name:'NEED HELP'
        })
        expect(helpButton).toBeInTheDocument()
    })
    test('function',()=>{
        render(<Footer mock={(args)=>{}}/>)

        const dropdown = screen.getByRole('button', {name:'Without label'})
        fireEvent.click(dropdown)

        const item = screen.getByText("English")
        fireEvent.click(item)
        expect(item).toBeInTheDocument()
    })
})
