import {render, screen} from '@testing-library/react'
import { Provider } from 'react-redux'
import { PaymentMethod } from '.'
import {store} from '../../../../public/store'
describe('payment method component', () => {
    test('renders correctly', () => {
        render(
        <Provider store={store}>
            <PaymentMethod/>
        </Provider>
        )

        const text =screen.getByText('USD Coin (Cash)')
        expect(text).toBeInTheDocument()
    })
    test('Image rendering', () => {
        render(
            <Provider store={store}>
                <PaymentMethod/>
            </Provider>
        )
        const Image = screen.getByAltText('USD coin')
        expect(Image).toBeInTheDocument()
        expect(Image).toHaveAttribute('height','32px')
        expect(Image).toHaveAttribute('width','32px')
    })
})