import {
  render,
  screen,
  fireEvent,
  waitForElementToBeRemoved,
} from "@testing-library/react";
import { Provider } from "react-redux";
import { store } from "../../../../public/store";
import RecentTransactions from "../recentTransaction";
import { server } from "../../../server/server";
import { rest } from "msw";
describe("crypto page", () => {
  test("renderd correctly", async () => {
    render(
      <Provider store={store}>
        <RecentTransactions />
      </Provider>
    );
    await waitForElementToBeRemoved(screen.queryByText("Loading..."));
    const text = screen.getByText("Recent Transactions");
    expect(text).toBeInTheDocument();
  });
  test("mock data fetched", async () => {
    render(
      <Provider store={store}>
        <RecentTransactions />
      </Provider>
    );
    await waitForElementToBeRemoved(screen.queryByText("Loading..."));

    const button = screen.getByRole("button", { name: "View All" });
    fireEvent.click(button);
    expect(screen.getByTestId("transactions")).toBeInTheDocument();
    const transaction = screen.getAllByTestId("Bitcoin")[0];
    expect(transaction).toBeInTheDocument();
  });
  test("error handling", async () => {
    server.use(
      rest.get("http://localhost:5000/data", (req, res, ctx) => {
        return res(ctx.status(500));
      })
    );
    render(
      <Provider store={store}>
        <RecentTransactions />
      </Provider>
    );
    await waitForElementToBeRemoved(screen.queryByText("Loading..."));

    const error = await screen.findByText("Data is not fetched");
    expect(error).toBeInTheDocument();
  });
});
