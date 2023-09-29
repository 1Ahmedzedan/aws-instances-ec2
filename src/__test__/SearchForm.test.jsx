import { render, screen } from "@testing-library/react";
import SearchForm from "../components/SearchForm";

test("render select in search form", () => {
  render(<SearchForm />);

  const selectRegion = screen.getByTestId("select region");
  const selectCpu = screen.getByTestId("select Cpu");
  const selectOs = screen.getByTestId("select Os");
  const buttonSearch = screen.getByRole("button", { name: "SEARCH" });

  expect(selectRegion).toBeInTheDocument();
  expect(selectCpu).toBeInTheDocument();
  expect(selectOs).toBeInTheDocument();
  expect(buttonSearch).toBeInTheDocument();
});
