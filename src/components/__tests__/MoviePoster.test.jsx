import { render, screen } from "@testing-library/react";
import SingleMoviePage from "../SingleMoviePage";
import { singleMovie } from "../sampleData/singleMovie";

describe("Single movie page tests", () => {
  it("Renders App component", () => {
    render(<SingleMoviePage singleMovie={singleMovie} />);
  });

  it("Expect to be Genres and Top cast (async)", async () => {
    render(<SingleMoviePage singleMovie={singleMovie} />);
    expect(screen.getByText("Genres")).toBeInTheDocument();
    expect(await screen.findByText("Top cast:")).toBeInTheDocument();
  });
});
