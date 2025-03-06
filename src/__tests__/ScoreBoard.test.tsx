import { test, describe, expect } from "vitest";
import { render, screen } from "@testing-library/react";
import ScoreBoard from "../components/ScoreBoard";

describe("ScoreBoard Component", () => {
  test("renders ScoreBoard component", () => {
    render(<ScoreBoard scores={{ X: 0, O: 0 }} />);
    expect(screen.getByTestId("score-board")).toBeInTheDocument();
  });
});

