import { fireEvent, render, screen } from "@testing-library/react";
import { rest } from "msw";
import { Provider } from "react-redux";
import TradeScreen from ".";
import { store } from "../../../../public/store";
import { server } from "../../../server/server";

jest.mock("react-apexcharts", () => ({
  __esModule: true,
  default: () => <div />,
}));
describe("render the trade", () => {
  describe("render the trade screen", () => {
    test("renders transactions", async () => {
      render(<TradeScreen currency="Bitcoin" />);
      const bitcoin = await screen.findAllByText("Bitcoin");
      expect(bitcoin).not.toHaveLength(0);
    });
    it("should render the new tab' button", () => {
      render(<Provider store={store}><TradeScreen currency={"Bitcoin"} /></Provider>);
      const tabButton = screen.getByText("Wallet");
      fireEvent.click(tabButton);
      expect(tabButton).toBeInTheDocument();
    });
    test("testing the wallet component",async ()=>{
      render(<TradeScreen currency={"Bitcoin"}/>)
      const element =await screen.findByTestId("checkedstar")
      fireEvent.click(element)
      const element2= await screen.findByText("ADD TO WATCHLIST")
      expect(element2).toBeInTheDocument();
      fireEvent.click(element2)
      const element3= await screen.findByText("ADDED TO WATCHLIST")
      expect(element3).toBeInTheDocument();
  
  })
  test("ternary operator", async ()=>{
    render(<TradeScreen currency={"Ethereum"}/>)

    const element = await screen.findByTestId("indicator")
    expect(element).toBeInTheDocument()
  })
  });

  test("renders error", async () => {
    server.use(
      rest.get("http://localhost:5000/data", (req, res, ctx) => {
        return res(ctx.status(500));
      })
    );
    render(<TradeScreen currency="Bitcoin" />);
    const error = await screen.findAllByText("Error while fetching data");
    expect(error).not.toHaveLength(0);
  });
});
