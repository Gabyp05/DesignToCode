import { NavLinks } from "../constants";

const Navbar = () => {
  return (
    <header className="fixed top-0 left-0 right-0 z-50  backdrop-blur-md">
      <nav className="w-full h-24 flex justify-center px-8 font-inter border-b border-white/15">
        <div className="flex items-center justify-between py-5 px-[109px] w-full">
          <a href="/">
            <img src="Logo.png" alt="Logo" className="object-cover size-7" />
          </a>

          <ul className="flex flex-row gap-11 border border-white/15 rounded-full px-14 py-3">
            {NavLinks.map((link) => (
              <li key={link.id} className="inline-block">
                <a
                  href={link.url}
                  className="text-white text-lg font-normal hover:text-white/80 flex flex-row items-center gap-x-2"
                >
                  {link.title}
                  {link.icon && (
                    <img
                      src={link.icon}
                      alt="arrow down icon"
                      className="w-auto h-2 object-cover"
                    />
                  )}
                </a>
              </li>
            ))}
          </ul>

          <button className="text-white text-xl font-normal bg-black border-2 border-white/15 px-6 py-3 rounded-full">
            Join waitlist
          </button>
        </div>
      </nav>
    </header>
  );
};

export default Navbar;
