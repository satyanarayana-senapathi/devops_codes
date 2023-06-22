import { act, render, screen } from "@testing-library/react";
import "@testing-library/jest-dom/extend-expect";
import WatchList from ".";
import { fireEvent } from "@storybook/testing-library";
import { rest } from "msw";
import { server } from "../../../server/server";
import * as router from "react-router"
import {MemoryRouter, Route, Routes} from "react-router-dom"
const navigate=jest.fn()
beforeEach(()=>{jest.spyOn(router,"useNavigate").mockImplementation(()=>navigate);})
jest.mock("react-apexcharts", () => ({
  __esModule: true,
  default: () => <div />,
}));
describe("WatchList to render", () => {
  describe("WatchList", () => {
    it("should render the title 'Watchlist'", () => {
      render(
        <MemoryRouter>
          <Routes>
            <Route path="/" element={<WatchList />}/>
          </Routes>
        </MemoryRouter>
      );
      const title = screen.getByText("Watchlist");
      expect(title).toBeInTheDocument();
    });
    test("renders watchlist", async () => {
      act(() => {
        render(<MemoryRouter>
          <Routes>
            <Route path="/" element={<WatchList />}/>
          </Routes>
        </MemoryRouter>);
      });

      const bitcoin = await screen.findByText("Bitcoin");
      expect(bitcoin).toBeInTheDocument();
    });

    it("should render the 'Discover assets' button", () => {
      render(
        <MemoryRouter>
        <Routes>
          <Route path="/" element={<WatchList />}/>
        </Routes>
      </MemoryRouter>
        );
      const discoverAssetsButton = screen.getByText("Discover assets");
      fireEvent.click(discoverAssetsButton);
      expect(discoverAssetsButton).toBeInTheDocument();
    });

    it("should render the 'View Watchlist' button", () => {
      render(<MemoryRouter>
        <Routes>
          <Route path="/" element={<WatchList />}/>
        </Routes>
      </MemoryRouter>);
      const viewWatchlistButton = screen.getByText("View Watchlist");
      fireEvent.click(viewWatchlistButton);
      expect(viewWatchlistButton).toBeInTheDocument();
    });
    test("clickHandler function is called when grid button is clicked", async () => {
      render(<MemoryRouter>
        <Routes>
          <Route path="/" element={<WatchList />}/>
        </Routes>
      </MemoryRouter>);
      const handler = screen.getByAltText("grid");
      fireEvent.click(handler);
      expect(handler).toBeInTheDocument();
      const bitcoin = await screen.findByText("Bitcoin");
      fireEvent.click(bitcoin);
      expect(bitcoin).toBeInTheDocument();
      
    });
    test("clickHandler function is called when leftside button is clicked", () => {
      render(<MemoryRouter>
        <Routes>
          <Route path="/" element={<WatchList />}/>
        </Routes>
      </MemoryRouter>);
      const handler = screen.getByAltText("leftside");
      fireEvent.click(handler);
      expect(handler).toBeInTheDocument();
    });
    test("handleGrid toggles the value of open", () => {
      const { getByRole } = render(<MemoryRouter>
        <Routes>
          <Route path="/" element={<WatchList />}/>
        </Routes>
      </MemoryRouter>);
      const button = getByRole("button", { name: "grid" });
      const initialOpenValue = false;
      expect(initialOpenValue).toBe(false);
      fireEvent.click(button);
      const openValueAfterFirstClick = true;
      expect(openValueAfterFirstClick).toBe(true);
      fireEvent.click(button);
      const openValueAfterSecondClick = false;
      expect(openValueAfterSecondClick).toBe(false);
    });
    test("should render a green arrow and positive change value", async () => {
      render(<MemoryRouter>
        <Routes>
          <Route path="/" element={<WatchList />}/>
        </Routes>
      </MemoryRouter>);
      const arrow = await screen.findByAltText("uparrow");
      expect(arrow).toHaveAttribute("src", "");
      const changeValue = await screen.findByText("+6.45%");
      expect(changeValue).toBeInTheDocument();
      const  coin=await screen.getByTestId("card")
      fireEvent.click(coin)
      expect(changeValue).toHaveStyle({ color: "#20B03F" });
    });
  });
  test("error handling", async () => {
    server.use(
      rest.get("http://localhost:5000/data", (req, res, ctx) => {
        return res(ctx.status(500));
      })
    );
    render(<MemoryRouter>
      <Routes>
        <Route path="/" element={<WatchList />}/>
      </Routes>
    </MemoryRouter>);
    const error = await screen.findAllByText("Error while fetching data");
    expect(error).not.toHaveLength(0);
  });
});
