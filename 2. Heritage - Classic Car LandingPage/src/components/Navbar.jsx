import { Navlinks } from "../constants";
import { ChevronDown } from "lucide-react";

const Navbar = () => {
  return (
    <header className="w-full border-b border-heritage-black">
      <div className="container mx-auto px-8 h-20 grid grid-cols-[1fr_auto_1fr] items-center">
        <nav className="flex items-center">
          <ul className="flex space-x-6">
            {Navlinks.map((link) => (
              <li key={link.id}>
                <a
                  href={link.url}
                  className="text-base font-medium hover:text-heritage-orange transition-colors"
                >
                  {link.title}
                </a>
              </li>
            ))}
          </ul>
        </nav>

        <a href="/" className="font-ultra font-bold text-3xl text-center">
          Heritage.
        </a>

        <div className="flex justify-end">
          <button className="flex flex-row items-center gap-x-2 bg-heritage-black text-white text-base px-6 py-2 rounded-lg">
            <img
              src="https://avatar.iran.liara.run/public"
              alt="Avatar"
              className="rounded-full size-7"
            />{" "}
            Gabriela <ChevronDown />
          </button>
        </div>
      </div>
    </header>
  );
};

export default Navbar;
