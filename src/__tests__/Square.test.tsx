import { test, describe, expect } from "vitest";
import { render, screen, fireEvent } from "@testing-library/react";
import Square from "../components/Square";

describe("Square Component", () => {
  test("renders Square component and handles click", () => {
    const mockClick = vi.fn();
    render(<Square value="X" onClick={mockClick} isWinningSquare={false} />);

    const square = screen.getByTestId("square");
    expect(square).toBeInTheDocument();

    fireEvent.click(square);
    expect(mockClick).toHaveBeenCalledTimes(1);
  });
});

