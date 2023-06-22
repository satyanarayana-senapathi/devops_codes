import {render, screen} from '@testing-library/react'
import { BuyCheckout } from '.'
import {store} from '../../../../public/store'
import { Provider } from 'react-redux'
import * as router from "react-router"
import { MemoryRouter, Route, Routes } from 'react-router-dom'
const navigate=jest.fn()
beforeEach(()=>{jest.spyOn(router,"useNavigate").mockImplementation(()=>navigate);})
describe('Buy Checkout screen', () => {
    test('rendered correctly', () => {
        render(
        <MemoryRouter>
         <Provider store={store}>
             <Routes>
                <Route path ="/" element={<BuyCheckout />}/>
            </Routes>
        </Provider>
        </MemoryRouter>
            )
        const div = screen.getByTestId('buy/checkout')
        expect(div).toBeInTheDocument()
    })
    
})