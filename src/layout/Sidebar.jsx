import { Heart, House, LogOut } from "lucide-react";
import userProfile from "../../public/profile.jpg";

const Sidebar = () => {
  return (
    <ul className="flex h-full flex-col items-center gap-8">
      <li>
        <a href="/" className="text-slate-100 transition hover:text-amber-700">
          <House className="h-16 w-16" />
        </a>
      </li>

      <li>
        <a
          href="/favorites"
          className="text-slate-100 transition hover:text-amber-700"
        >
          <Heart className="h-16 w-16" />
        </a>
      </li>

      <li>
        <a
          href="/profile"
          className="block h-16 w-16 overflow-hidden rounded-full border-4 border-slate-100 transition hover:border-amber-700"
        >
          <img
            className="h-full w-full object-cover object-center"
            src={userProfile}
            alt="Profile Picture"
          />
        </a>
      </li>

      <li>
        <a
          href="/logout"
          className="text-slate-100 transition hover:text-amber-700"
        >
          <LogOut className="h-16 w-16" />
        </a>
      </li>
    </ul>
  );
};

export default Sidebar;
