import { Popcorn } from "lucide-react";
import SearchBar from "../components/SearchBar";

const Navbar = () => {
  return (
    <div className="flex items-center justify-between">
      <div className="flex gap-2">
        <Popcorn className="h-16 w-16 text-amber-700" />
        <h1 className="flex flex-col leading-none select-none">
          <span className="text-3xl font-extrabold text-slate-100">MOVIES</span>
          <span className="text-xl font-bold text-slate-100">ALL THE WAY</span>
        </h1>
      </div>

      <SearchBar />
    </div>
  );
};

export default Navbar;
