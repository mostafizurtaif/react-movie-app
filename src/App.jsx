import MovieCard from "./components/MovieCard";

const movies = [
  {
    title: "Avengers: Endgame",
    genre: ["Action", "Sci-fi"],
    duration: "3h 1m",
    year: 2019,
    img: "https://m.media-amazon.com/images/M/MV5BMTc5MDE2ODcwNV5BMl5BanBnXkFtZTgwMzI2NzQ2NzM@._V1_.jpg",
    pg: 13,
  },
];

const App = () => {
  return (
    <>
      <MovieCard movie={movies[0]} />
    </>
  );
};

export default App;
