import { fireEvent, render, screen} from '@testing-library/react';
import { rest } from 'msw';
import { Provider } from 'react-redux';
import Wallet from '.';
import { store } from '../../../../public/store';
import { server } from '../../../server/server';

describe('Wallet component', () => {

  describe('Wallet component renders', () => {
    test('dropdown functionality', () => {
      render(<Provider store={store}><Wallet coinName={'Bitcoin'} mock={(args)=>{}}/></Provider>)

      const dropdown = screen.getByRole('button', {name:'Without label'})
        fireEvent.click(dropdown)
        const item = screen.getByText("1M")
        fireEvent.click(item)
        expect(item).toBeInTheDocument()
  })
});
  test("error handling", async () => {
    server.use(
      rest.get("http://localhost:5000/data", (req, res, ctx) => {
        return res(ctx.status(500));
      })
    );
    render(<Provider store={store}><Wallet coinName={'Bitcoin'} mock={(args)=>{}}/></Provider>);
    const error = await screen.findAllByText("Error while fetching data");
    expect(error).not.toHaveLength(0);
  });
});
