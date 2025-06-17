// main.js
import { Movie } from './movie.js';

// Simulated async fetch function (returns a movie object after 2 seconds)
const fetchMovieDetails = (id) => {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve({
        title: "Inception",
        director: "Christopher Nolan",
        year: 2010,
        genre: "Sci-Fi",
        rating: 8.8
      });
    }, 2000);
  });
};

// Main function to fetch and display movie
const displayMovie = async (id) => {
  const movieData = await fetchMovieDetails(id);

  // Destructure key movie properties, rest goes to extraDetails
  const { title, director, year, ...extraDetails } = movieData;

  // Create a Movie instance
  const movie = new Movie(title, director, year);

  // Print formatted movie details
  console.log(`🎬 "${movie.title}" was directed by ${movie.director} and released in ${movie.year}.`);

  // Print any extra details
  if (Object.keys(extraDetails).length > 0) {
    console.log("Additional Info:", extraDetails);
  }
};

// Call the main function
const movieId = 101;
displayMovie(movieId);
