import { render, screen, fireEvent } from "@testing-library/react";
import Button from "./index";

describe("Button", () => {
  it("renders with children", () => {
    render(<Button variant="contained">Click me</Button>);
    const buttonElement = screen.getByText(/click me/i);
    expect(buttonElement).toBeInTheDocument();
  });

  it("renders in different variants", () => {
    render(
      <>
        <Button variant="contained">Contained</Button>
        <Button variant="outlined">Outlined</Button>
        <Button variant="text">Text</Button>
        <Button variant="contained" color="primary">
          Primary
        </Button>
        <Button variant="outlined" color="secondary">
          Secondary
        </Button>
        <Button variant="text">Default</Button>
      </>
    );
    const containedButton = screen.getByText(/contained/i);
    const outlinedButton = screen.getByText(/outlined/i);
    const textButton = screen.getByText(/text/i);
    const primaryButton = screen.getByText(/primary/i);
    const secondaryButton = screen.getByText(/secondary/i);
    const defaultButton = screen.getByText(/default/i);
    expect(containedButton).toBeInTheDocument();
    expect(outlinedButton).toBeInTheDocument();
    expect(textButton).toBeInTheDocument();
    expect(primaryButton).toBeInTheDocument();
    expect(secondaryButton).toBeInTheDocument();
    expect(defaultButton).toBeInTheDocument();
  });

  it("calls onClick prop when clicked", () => {
    const handleClick = jest.fn();
    render(
      <Button variant="contained" onClick={handleClick}>
        Click me
      </Button>
    );
    const buttonElement = screen.getByText(/click me/i);
    fireEvent.click(buttonElement);
    expect(handleClick).toHaveBeenCalled();
  });

  it("renders with text variant", () => {
    render(<Button variant="text">Text</Button>);
    const buttonElement = screen.getByText(/text/i);
    expect(buttonElement).toBeInTheDocument();
  });

  it("renders with primary color", () => {
    render(
      <Button variant="contained" color="primary">
        Primary
      </Button>
    );
    const buttonElement = screen.getByText(/primary/i);
    expect(buttonElement).toBeInTheDocument();
  });

  it("renders with secondary color", () => {
    render(
      <Button variant="outlined" color="secondary">
        Secondary
      </Button>
    );
    const buttonElement = screen.getByText(/secondary/i);
    expect(buttonElement).toBeInTheDocument();
  });
});
