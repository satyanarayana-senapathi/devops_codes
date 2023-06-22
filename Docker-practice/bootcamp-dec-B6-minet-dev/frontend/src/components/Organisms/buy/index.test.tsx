import {render, screen, fireEvent} from '@testing-library/react'
import { Provider } from 'react-redux'
import {store} from '../../../../public/store'
import { Buy } from '.'
import {AmountDetails} from "../amountDetails"
import { Crypto } from '../coins'
import * as router from 'react-router'
import { MemoryRouter, Route, Routes } from 'react-router-dom'
const mockFunction: jest.Mock = jest.fn((callback) => {
});
const navigate=jest.fn()
beforeEach(()=>{jest.spyOn(router,"useNavigate").mockImplementation(()=>navigate);})
describe('crypto page', () => {
    test('renderd correctly', () => {
        render(<Provider store={store}>
            <Buy />
        </Provider>)

        const text = screen.getByText('You are Buying')
        expect(text).toBeInTheDocument()
    })
    test('click function', () => {
        render(
        <MemoryRouter initialEntries={[`/`]}>
        <Provider store={store}>
           <Routes>
            <Route path="/" element={<Buy/>}/>
            </Routes> 
        </Provider>
        </MemoryRouter>)
        const button = screen.getByRole('button', { name:'BUY NOW'})
        fireEvent.click(button)
                
     })
    
    test('renders the value from global store initial state', async () => {
      render(
        <MemoryRouter>
        <Provider store={store} >
          <Routes>
            <Route path="/" element ={
            <>
            <Crypto/><Buy /><AmountDetails/>
            </>
          }/>
            </Routes>
        </Provider>
        </MemoryRouter>
      );
      const data= await screen.findAllByTestId('mockServerData')
      expect(data).toHaveLength(2)
      const ethereum = screen.getByTestId('mockserver-Ethereum')
      fireEvent.click(ethereum) 

      const slider = screen.getByRole('slider')
      fireEvent.change(slider, {target:{value:10000}} )
      const button = screen.getByRole('button', { name:'BUY NOW'})
      fireEvent.click(button)

      fireEvent.change(slider, {target:{value:32900}} )
      fireEvent.click(button)

      fireEvent.change(slider, {target:{value:1000}} )
      fireEvent.click(button)
    })
    
    
})