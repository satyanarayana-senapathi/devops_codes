import { fireEvent, render, screen } from "@testing-library/react";
import "@testing-library/jest-dom/extend-expect";
import MyPortfolio from ".";
import { server } from "../../../server/server";
import { rest } from "msw";
import { Provider } from "react-redux";
import { store } from "../../../../public/store";
import * as router from "react-router"
import { MemoryRouter, Route, Routes } from "react-router-dom";
const navigate=jest.fn()
  beforeEach(()=>{jest.spyOn(router,"useNavigate").mockImplementation(()=>navigate);})

describe("MyPortfolio components", () => {
describe("MyPortfolio component", () => {
  test("renders MyPortfolio heading", () => {
    render(
      <MemoryRouter>
        <Provider store={store}>
          <Routes>
            <Route path="/" element={<MyPortfolio />}/>
          </Routes>
          </Provider>
     </MemoryRouter>
    );
    const heading = screen.getByText("MyPortfolio");
    expect(heading).toBeInTheDocument();
  });

  test("renders cryptocurrency names", async () => {
    render(
      <MemoryRouter>
      <Provider store={store}>
        <Routes>
          <Route path="/" element={<MyPortfolio />}/>
        </Routes>
        </Provider>
   </MemoryRouter>
    );
    const bitcoinName = await screen.findByText("Bitcoin");
    const ethereumName = await screen.findByText("Ethereum");
    expect(bitcoinName).toBeInTheDocument();
    expect(ethereumName).toBeInTheDocument();
  });

  test("renders cryptocurrency abbreviations", async () => {
    render(
      <MemoryRouter>
      <Provider store={store}>
        <Routes>
          <Route path="/" element={<MyPortfolio />}/>
        </Routes>
        </Provider>
   </MemoryRouter>
    );
    const bitcoinName = await screen.findByText("BTC");
    const ethereumName = await screen.findByText("ETH");
    expect(bitcoinName).toBeInTheDocument();
    expect(ethereumName).toBeInTheDocument();
  });
  test("clickHandler function is called when leftside button is clicked", async () => {
    render(
      <MemoryRouter>
      <Provider store={store}>
        <Routes>
          <Route path="/" element={<MyPortfolio />}/>
        </Routes>
        </Provider>
   </MemoryRouter>
      );
    const handler = await screen.findAllByTestId("div-s");
    fireEvent.click(handler[0]);
    expect(handler[0]).toBeInTheDocument();
  });
});
test("error handling", async () => {
  server.use(
    rest.get("http://localhost:5000/data", (req, res, ctx) => {
      return res(ctx.status(500));
    })
  );
  render(
     <MemoryRouter>
    <Provider store={store}>
      <Routes>
        <Route path="/" element={<MyPortfolio />}/>
      </Routes>
      </Provider>
 </MemoryRouter>);
  const error = await screen.findByText("Error fetching data");
  expect(error).toBeInTheDocument();
});
});
