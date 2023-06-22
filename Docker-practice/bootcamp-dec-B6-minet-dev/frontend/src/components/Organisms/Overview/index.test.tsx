import { render, screen } from "@testing-library/react";
import { rest } from "msw";
import OverView from ".";
import { server } from "../../../server/server";

jest.mock("react-apexcharts", () => ({
  __esModule: true,
  default: () => <div />,
}));

describe("OverView component", () => {
  describe("OverView component renders", () => {
  it("should render the current value of Bitcoin", () => {
    render(<OverView coinName={"Bitcoin"} />);
    expect(screen.getByText('About Bitcoin')).toBeInTheDocument();
  });

  it("should render the graph", async () => {
    render(<OverView coinName={"Bitcoin"} />);
    expect(await screen.findByTestId("area-graph")).toBeInTheDocument();
  });
  test("ternary operator", async ()=>{
    render(<OverView coinName={"Ethereum"} />)

    const element = await screen.findByTestId("indicatorOverview")
    expect(element).toBeInTheDocument()
  })
  it("should render the 'About Bitcoin' section", () => {
    render(<OverView coinName={"Bitcoin"} />);
    expect(screen.getByText('Price correlation with')).toBeInTheDocument();
  });
});

    test("error handling", async () => {
      server.use(
        rest.get("http://localhost:5000/data", (req, res, ctx) => {
          return res(ctx.status(500));
        })
      );
      render(<OverView coinName={"Bitcoin"}/>);
      const error = await screen.findAllByText("Error while fetching data");
      expect(error).not.toHaveLength(0);
    });
});
