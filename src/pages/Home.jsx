import Sidebar from "../layout/Sidebar";
import MovieGrid from "../layout/MovieGrid";
import Navbar from "../layout/Navbar";

const Home = () => {
  const movies = [
    {
      title: "Avengers: Endgame",
      genre: ["Action", "Sci-fi"],
      duration: "3h 1m",
      year: 2019,
      img: "https://m.media-amazon.com/images/M/MV5BMTc5MDE2ODcwNV5BMl5BanBnXkFtZTgwMzI2NzQ2NzM@._V1_.jpg",
      pg: 13,
      description:
        "After Thanos, an intergalactic warlord, disintegrates half of the universe, the Avengers must reunite and assemble again to reinvigorate their trounced allies and restore balance.",
    },
    {
      title: "Avengers: Endgame",
      genre: ["Action", "Sci-fi"],
      duration: "3h 1m",
      year: 2019,
      img: "https://m.media-amazon.com/images/M/MV5BMTc5MDE2ODcwNV5BMl5BanBnXkFtZTgwMzI2NzQ2NzM@._V1_.jpg",
      pg: 13,
      description:
        "After Thanos, an intergalactic warlord, disintegrates half of the universe, the Avengers must reunite and assemble again to reinvigorate their trounced allies and restore balance.",
    },
    {
      title: "Avengers: Endgame",
      genre: ["Action", "Sci-fi"],
      duration: "3h 1m",
      year: 2019,
      img: "https://m.media-amazon.com/images/M/MV5BMTc5MDE2ODcwNV5BMl5BanBnXkFtZTgwMzI2NzQ2NzM@._V1_.jpg",
      pg: 13,
      description:
        "After Thanos, an intergalactic warlord, disintegrates half of the universe, the Avengers must reunite and assemble again to reinvigorate their trounced allies and restore balance.",
    },
    {
      title: "Avengers: Endgame",
      genre: ["Action", "Sci-fi"],
      duration: "3h 1m",
      year: 2019,
      img: "https://m.media-amazon.com/images/M/MV5BMTc5MDE2ODcwNV5BMl5BanBnXkFtZTgwMzI2NzQ2NzM@._V1_.jpg",
      pg: 13,
      description:
        "After Thanos, an intergalactic warlord, disintegrates half of the universe, the Avengers must reunite and assemble again to reinvigorate their trounced allies and restore balance.",
    },
    {
      title: "Avengers: Endgame",
      genre: ["Action", "Sci-fi"],
      duration: "3h 1m",
      year: 2019,
      img: "https://m.media-amazon.com/images/M/MV5BMTc5MDE2ODcwNV5BMl5BanBnXkFtZTgwMzI2NzQ2NzM@._V1_.jpg",
      pg: 13,
      description:
        "After Thanos, an intergalactic warlord, disintegrates half of the universe, the Avengers must reunite and assemble again to reinvigorate their trounced allies and restore balance.",
    },
    {
      title: "Avengers: Endgame",
      genre: ["Action", "Sci-fi"],
      duration: "3h 1m",
      year: 2019,
      img: "https://m.media-amazon.com/images/M/MV5BMTc5MDE2ODcwNV5BMl5BanBnXkFtZTgwMzI2NzQ2NzM@._V1_.jpg",
      pg: 13,
      description:
        "After Thanos, an intergalactic warlord, disintegrates half of the universe, the Avengers must reunite and assemble again to reinvigorate their trounced allies and restore balance.",
    },
    {
      title: "Avengers: Endgame",
      genre: ["Action", "Sci-fi"],
      duration: "3h 1m",
      year: 2019,
      img: "https://m.media-amazon.com/images/M/MV5BMTc5MDE2ODcwNV5BMl5BanBnXkFtZTgwMzI2NzQ2NzM@._V1_.jpg",
      pg: 13,
      description:
        "After Thanos, an intergalactic warlord, disintegrates half of the universe, the Avengers must reunite and assemble again to reinvigorate their trounced allies and restore balance.",
    },
    {
      title: "Avengers: Endgame",
      genre: ["Action", "Sci-fi"],
      duration: "3h 1m",
      year: 2019,
      img: "https://m.media-amazon.com/images/M/MV5BMTc5MDE2ODcwNV5BMl5BanBnXkFtZTgwMzI2NzQ2NzM@._V1_.jpg",
      pg: 13,
      description:
        "After Thanos, an intergalactic warlord, disintegrates half of the universe, the Avengers must reunite and assemble again to reinvigorate their trounced allies and restore balance.",
    },
    {
      title: "Avengers: Endgame",
      genre: ["Action", "Sci-fi"],
      duration: "3h 1m",
      year: 2019,
      img: "https://m.media-amazon.com/images/M/MV5BMTc5MDE2ODcwNV5BMl5BanBnXkFtZTgwMzI2NzQ2NzM@._V1_.jpg",
      pg: 13,
      description:
        "After Thanos, an intergalactic warlord, disintegrates half of the universe, the Avengers must reunite and assemble again to reinvigorate their trounced allies and restore balance.",
    },
    {
      title: "Avengers: Endgame",
      genre: ["Action", "Sci-fi"],
      duration: "3h 1m",
      year: 2019,
      img: "https://m.media-amazon.com/images/M/MV5BMTc5MDE2ODcwNV5BMl5BanBnXkFtZTgwMzI2NzQ2NzM@._V1_.jpg",
      pg: 13,
      description:
        "After Thanos, an intergalactic warlord, disintegrates half of the universe, the Avengers must reunite and assemble again to reinvigorate their trounced allies and restore balance.",
    },
    {
      title: "Avengers: Endgame",
      genre: ["Action", "Sci-fi"],
      duration: "3h 1m",
      year: 2019,
      img: "https://m.media-amazon.com/images/M/MV5BMTc5MDE2ODcwNV5BMl5BanBnXkFtZTgwMzI2NzQ2NzM@._V1_.jpg",
      pg: 13,
      description:
        "After Thanos, an intergalactic warlord, disintegrates half of the universe, the Avengers must reunite and assemble again to reinvigorate their trounced allies and restore balance.",
    },
    {
      title: "Avengers: Endgame",
      genre: ["Action", "Sci-fi"],
      duration: "3h 1m",
      year: 2019,
      img: "https://m.media-amazon.com/images/M/MV5BMTc5MDE2ODcwNV5BMl5BanBnXkFtZTgwMzI2NzQ2NzM@._V1_.jpg",
      pg: 13,
      description:
        "After Thanos, an intergalactic warlord, disintegrates half of the universe, the Avengers must reunite and assemble again to reinvigorate their trounced allies and restore balance.",
    },
  ];

  return (
    <div className="grid h-screen w-full grid-cols-[1fr_auto] gap-8 bg-zinc-800 p-8">
      <div className="overflow-y-auto rounded-2xl bg-zinc-900 p-8">
        <Navbar />

        <div className="mt-8 mb-12 flex justify-center">
          <h1 className="text-5xl font-extrabold text-amber-700 uppercase">
            All Movies
          </h1>
        </div>

        <MovieGrid movies={movies} />
      </div>
      <div className="rounded-2xl bg-zinc-900 p-8">
        <Sidebar />
      </div>
    </div>
  );
};

export default Home;
