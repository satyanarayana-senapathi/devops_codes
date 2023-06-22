import {render, screen, fireEvent} from '@testing-library/react'
import { Provider } from 'react-redux'
import {store} from '../../../../public/store'
import { AmountDetails } from '.'
describe('Amount Details', () => {
    test('renderd correctly', () => {
        render(<Provider store={store}>
            <AmountDetails/>
        </Provider>)

        const text = screen.getByText('Amount Details')
        expect(text).toBeInTheDocument()
    })
    test('click function', () => {
        render(<Provider store={store}>
            <AmountDetails/>
        </Provider>)

        const button = screen.getByRole('button', { name:'Buy max'})
        fireEvent.click(button)
    })
    test('change function', () => {
        render(<Provider store={store}>
            <AmountDetails/>
        </Provider>)
        const change = screen.getByRole('slider')
        fireEvent.change(change, {target:{value:6667}} )
        const state = store.getState();
        console.log(state.maxValue.value.max)
        expect(state.maxValue.value.max).toBe(6667);
    })
    
})