import { test, describe, expect } from "vitest";  // ✅ Ensure expect is imported
import { render, screen } from "@testing-library/react";
import Board from "../components/Board";

describe("Board Component", () => {
  test("renders Board component", () => {
    render(<Board squares={Array(9).fill(null)} onClick={() => {}} winningLine={null} />);
    expect(screen.getByTestId("board")).toBeInTheDocument();  // ✅ expect should work now
  });
});

