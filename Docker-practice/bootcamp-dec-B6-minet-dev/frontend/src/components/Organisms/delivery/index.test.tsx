import {render, screen, fireEvent} from '@testing-library/react'
import { Provider } from 'react-redux'
import {store} from '../../../../public/store'
import { DeliveryDetails } from '.'
describe('crypto page', () => {
    test('renderd correctly', () => {
        render(<Provider store={store}>
            <DeliveryDetails/>
        </Provider>)

        const text = screen.getByText('Select speed Delivery')
        expect(text).toBeInTheDocument()
    })
    test('click function', ()=>{
        render(<Provider store={store}>
            <DeliveryDetails/>
        </Provider>)

        const button = screen.getByRole('button')
        fireEvent.click(button)
        const div = screen.getByTestId('instance')
        fireEvent.click(div)
    })
    test('click faster', ()=>{
        render(<Provider store={store}>
            <DeliveryDetails/>
        </Provider>)

        const button = screen.getByRole('button')
        fireEvent.click(button)
        const div = screen.getByTestId('faster')
        fireEvent.click(div)
    })
    test('click fast', ()=>{
        render(<Provider store={store}>
            <DeliveryDetails/>
        </Provider>)

        const button = screen.getByRole('button')
        fireEvent.click(button)
        const div = screen.getByTestId('fast')
        fireEvent.click(div)
    })
    test('click none', ()=>{
        render(<Provider store={store}>
            <DeliveryDetails/>
        </Provider>)

        const button = screen.getByRole('button')
        fireEvent.click(button)
        const div = screen.getByTestId('none')
        fireEvent.click(div)
    })
    
})