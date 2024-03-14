/**
 * @jest-environment jsdom
 */
import { fireEvent, render, screen } from "@testing-library/react";
import Page from "./page";

it("App Router: Works with Server Components", () => {
  render(<Page />);
  expect(screen.getByTestId("h1")).toHaveTextContent("App Router");
  expect(screen.getByTestId("count-value")).toHaveTextContent("Count: 0");
  fireEvent.click(screen.getByTestId("increment"));
  expect(screen.getByTestId("count-value")).toHaveTextContent("Count: 1");
  fireEvent.click(screen.getByTestId("decrement"));
  expect(screen.getByTestId("count-value")).toHaveTextContent("Count: 0");
});
