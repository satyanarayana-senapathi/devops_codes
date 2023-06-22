import { render, screen, fireEvent } from "@testing-library/react";
import SearchBar from "../SearchBar";

describe("SearchBar", () => {
  it("renders the input placeholder", () => {
    render(<SearchBar placeholder="Search" />);
    const inputElement = screen.getByPlaceholderText("Search");
    expect(inputElement).toBeInTheDocument();
  });

  it("calls the callback function when a key is pressed", () => {
    const mockCallBack = jest.fn();
    render(<SearchBar placeholder="Search" callBack={mockCallBack} />);
    const inputElement = screen.getByPlaceholderText("Search");
    fireEvent.keyUp(inputElement, { target: { value: "Test" } });
    expect(mockCallBack).toHaveBeenCalledWith("Test");
  });

  it("renders the search icon when showSearchIcon prop is true", () => {
    render(<SearchBar placeholder="Search" showSearchIcon />);
    const searchIcon = screen.getByTestId("search-icon");
    expect(searchIcon).toBeInTheDocument();
  });

  it("does not render the search icon when showSearchIcon prop is false", () => {
    render(<SearchBar placeholder="Search" showSearchIcon={false} />);
    const searchIcon = screen.queryByTestId("search-icon");
    expect(searchIcon).not.toBeInTheDocument();
  });

  it("renders the filter icon when showFilterIcon prop is true", () => {
    render(<SearchBar placeholder="Search" showFilterIcon />);
    const filterIcon = screen.getByTestId("filter-icon");
    expect(filterIcon).toBeInTheDocument();
  });

  it("does not render the filter icon when showFilterIcon prop is false", () => {
    render(<SearchBar placeholder="Search" showFilterIcon={false} />);
    const filterIcon = screen.queryByTestId("filter-icon");
    expect(filterIcon).not.toBeInTheDocument();
  });
});
