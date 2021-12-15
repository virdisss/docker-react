import { render, screen } from "@testing-library/react";
import App from "./App";

test("renders learn react link", () => {
  render(<App />);
  const textEl = screen.getByText(/learn react/i);
  expect(textEl).toBeInTheDocument();
});
