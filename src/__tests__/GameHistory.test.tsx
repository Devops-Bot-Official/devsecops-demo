import { test, describe, expect } from "vitest";
import { render, screen } from "@testing-library/react";
import GameHistory from "../components/GameHistory";

describe("GameHistory Component", () => {
  test("renders GameHistory component", () => {
    render(<GameHistory history={[]} onClick={() => {}} />);
    expect(screen.getByTestId("game-history")).toBeInTheDocument();
  });
});

