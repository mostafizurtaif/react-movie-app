import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";
import FavoriteIcon from "@mui/icons-material/Favorite";

const MovieCard = ({ movie }) => {
  return (
    <div className="relative h-120 w-80 overflow-hidden rounded-2xl">
      <img
        className="h-full w-full object-cover object-center"
        src={movie.img}
        alt={movie.title}
      />

      <div className="absolute bottom-0 flex h-full w-full flex-col justify-between bg-linear-to-b from-[#000000] from-0% via-[#00000010] via-15% to-black to-70% p-3.5 text-slate-50">
        <div className="text-right">
          <FavoriteBorderIcon />
          {/* <FavoriteIcon /> */}
        </div>
        <div>
          <h2 className="mb-2 text-xl font-semibold">{movie.title}</h2>
          <ul className="mb-4 flex gap-2.5 text-sm leading-none font-semibold">
            <li className="border-r pr-2.5">{movie.pg}</li>
            <li className="border-r pr-2.5">{movie.duration}</li>
            <li className="border-r pr-2.5">{movie.genre.join(", ")}</li>
            <li>{movie.year}</li>
          </ul>
          <p className="text-sm">
            After Thanos, an intergalactic warlord, disintegrates half of the
            universe, the Avengers must reunite and assemble again to
            reinvigorate their trounced allies and restore balance.
          </p>
        </div>
      </div>
    </div>
  );
};

export default MovieCard;
