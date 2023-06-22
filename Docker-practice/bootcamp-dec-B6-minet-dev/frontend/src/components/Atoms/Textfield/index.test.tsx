import React from "react";
import { render, fireEvent } from "@testing-library/react";
import TextFieldComponent, { Props } from "../Textfield";

describe("TextFieldComponent", () => {
  const defaultProps: Props = {
    id: "test",
    label: "Test",
    type: "email",
    value: "",
    onChange: () => {},
  };

  it("renders with default props", () => {
    const { getByLabelText } = render(<TextFieldComponent {...defaultProps} />);
    expect(getByLabelText(defaultProps.label)).toBeInTheDocument();
  });

  it("renders with password type", () => {
    const { getByLabelText } = render(
      <TextFieldComponent {...defaultProps} type="password" />
    );
    expect(getByLabelText(defaultProps.label)).toHaveAttribute(
      "type",
      "password"
    );
  });

  it("handles change event", () => {
    const handleChange = jest.fn();
    const { getByLabelText } = render(
      <TextFieldComponent {...defaultProps} onChange={handleChange} />
    );
    const input = getByLabelText(defaultProps.label);
    fireEvent.change(input, { target: { value: "test" } });
    expect(handleChange).toHaveBeenCalledTimes(1);
  });

  it("toggles password visibility", () => {
    const { getByLabelText, getByRole } = render(
      <TextFieldComponent {...defaultProps} type="password" />
    );
    const input = getByLabelText(defaultProps.label);
    const toggleButton = getByRole("button");
    fireEvent.click(toggleButton);
    expect(input).toHaveAttribute("type", "text");
    fireEvent.click(toggleButton);
    expect(input).toHaveAttribute("type", "password");
  });
});
