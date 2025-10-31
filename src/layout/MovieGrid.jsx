import MovieCard from "../components/MovieCard";

const MovieGrid = ({ movies }) => {
  return (
    <div className="mt-8 grid grid-cols-1 justify-items-center gap-8 min-[847px]:grid-cols-2 min-[1142px]:grid-cols-3 min-[1437px]:grid-cols-4">
      <MovieCard movie={movies[0]} />
      <MovieCard movie={movies[0]} />
      <MovieCard movie={movies[0]} />
      <MovieCard movie={movies[0]} />
    </div>
  );
};

export default MovieGrid;
