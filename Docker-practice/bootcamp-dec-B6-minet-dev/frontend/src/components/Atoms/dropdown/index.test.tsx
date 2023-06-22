import {fireEvent, render, screen, within} from '@testing-library/react'
import { Dropdown } from '.'
const Items=["English", "Hindi", "Telugu"]
describe('Dropdown renders correctly', () => {
    test('dropdown check using testid', () => {
        render(<Dropdown Menu={Items} mock={(args)=>{}} />)
        const select= screen.getByTestId('select')
        expect(select).toBeInTheDocument();
    })
    test('dropdown functionality', () => {
        render(<Dropdown Menu={Items} mock={(args)=>{}}/>)

        const selectButton = screen.getByRole('button')
        fireEvent.mouseDown(selectButton);

        const listbox = screen.getByRole('listbox')
        const list = within(listbox);

        fireEvent.click(list.getByText(/Hindi/i));
        expect(selectButton).toHaveTextContent(/Hindi/i);
    })
})