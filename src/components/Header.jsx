import { useState } from "react";
import { FaTimes, FaBars } from "react-icons/fa";

const links = [
  {
    id: 1,
    title: "Home",
  },
  {
    id: 2,
    title: "For Students",
  },
  {
    id: 3,
    title: "For Lecturers",
  },
  {
    id: 4,
    title: "Testimonials",
  },
];
const Header = ({}) => {
  const [nav, setNav] = useState(false);
  return (
    <>
      <div className="container flex gap-2 justify-between items-center h-20 sticky top-0 w-full ">
        <div className="flex gap-2">
          <img src="./src/assets/images/logo.png" alt="" className="mt-1" />
          <h1 className="mt-4 text-3xl font-medium">Kwarapoly</h1>
        </div>
        <ul className="hidden md:flex cursor-pointer">
          {links.map(({ id, title }) => (
            <li key={id} className="px-4 cursor-pointer py-4">
              <a href>{title}</a>
            </li>
          ))}
        </ul>
        <div
          onClick={() => setNav(!nav)}
          className="cursor-pointer z-10 md:hidden"
        >
          {nav ? <FaTimes size={20} /> : <FaBars size={20} />}
        </div>
        {nav && (
          <ul className="flex md:hidden flex-col justify-center absolute top-0 h-screen w-full items-center ">
            {links.map(({id, title}) => (
              <li key={id} className="text-xl font-sm cursor-pointer py-4">
                <a href>{title}</a>
              </li>
            ))}
          </ul>
        )}
      </div>
    </>
  );
};

export default Header;
