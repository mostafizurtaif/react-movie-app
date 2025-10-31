import { Heart } from "lucide-react";

const MovieCard = ({ movie }) => {
  return (
    <div className="relative overflow-hidden rounded-2xl">
      <img
        className="h-full w-full object-cover object-center"
        src={movie.img}
        alt={movie.title}
      />

      <div className="absolute bottom-0 flex h-full w-full flex-col justify-between bg-linear-to-b from-[#000000] from-0% via-[#00000000] via-15% to-black to-70% p-4 text-slate-50">
        <div className="flex justify-end">
          <Heart />
        </div>
        <div>
          <h2 className="mb-2 text-xl font-semibold">{movie.title}</h2>
          <ul className="mb-4 flex gap-2.5 text-sm leading-none font-semibold">
            <li className="border-r pr-2.5">{movie.pg}</li>
            <li className="border-r pr-2.5">{movie.duration}</li>
            <li className="border-r pr-2.5">{movie.genre.join(", ")}</li>
            <li>{movie.year}</li>
          </ul>
          <p className="text-sm">{movie.description}</p>
        </div>
      </div>
    </div>
  );
};

export default MovieCard;
