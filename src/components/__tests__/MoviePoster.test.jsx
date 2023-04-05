// import { render, screen } from "@testing-library/react";

// import { MoviePoster } from "../MoviePoster";

// describe("first test", () => {
//   let defaultProps;

//   beforeEach(() => {
//     defaultProps = {
//       movie: {},
//       setsingleMovieInfo: jest.fn(),
//       setFavorites: jest.fn(),
//       favorites,
//       updateLocalStorage,
//     };
//   });
//   it("makes sure true is really true", () => {
//     render(<MoviePoster {...defaultProps} />);

//     expect(screen.getByTestId("MoviePoster")).toEqual(true);
//   });

//   describe("when no movies exist", () => {
//     it("displays an empty list", () => {
//         const title = "something"
//       defaultProps.movies = {title};

//       render(<MoviePoster {...defaultProps} />);

//       expect(screen.getByTestId("MoviePoster").text()).toEqual(title);
//     });
//   });

//   it("makes sure true is really true", () => {
//     global.fetch = jest.fn(() => {})
//     render(<MoviePoster {...defaultProps} />);

//     screen.getByTestId("something").trigger("click")

//     expect(defaultProps.setFavorites).toHaveBeenCalledWith({});
//   });
// });
