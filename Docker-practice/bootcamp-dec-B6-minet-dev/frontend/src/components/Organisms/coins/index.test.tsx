import {render, screen, fireEvent} from '@testing-library/react'
import { Provider } from 'react-redux'
import {store} from '../../../../public/store'
import { Crypto } from '.'
import {server} from '../../../server/server'
import {rest} from 'msw'
import { BASE_URL } from '../../../utils/constants'
describe('crypto page', () => {
    test('renderd correctly', () => {
        render(<Provider store={store}>
            <Crypto/>
        </Provider>)

        const text = screen.getByText('Choose crypto')
        expect(text).toBeInTheDocument()
    })
    test('mock data fetched', async () => {
        render(<Provider store={store}><Crypto/></Provider>)
        const data= await screen.findAllByTestId('mockServerData')
        expect(data).toHaveLength(2)
        const bitcoin = screen.getByTestId('mockserver-Bitcoin')
        fireEvent.click(bitcoin)  

    })
    test('error handling', async () => {
        server.use(
            rest.get(`${BASE_URL}/data`,
            (req,res,ctx)=>{
                return res(ctx.status(500))
            })
        )
        render(<Provider store={store}>
            <Crypto/>
        </Provider>)

        const error= await screen.findByText('Data of crypto is not fetched')
        expect(error).toBeInTheDocument()
    })
})