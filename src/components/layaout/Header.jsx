import {
  Navbar,
  Collapse,
  Typography,
  IconButton,
} from "@material-tailwind/react";
import { Bars3Icon, XMarkIcon } from "@heroicons/react/24/outline";
import { useState, useEffect } from "react";

import { Link } from "react-scroll";

export default function Header() {
  const [openNav, setOpenNav] = useState(false);

  const handleWindowResize = () =>
    window.innerWidth >= 960 && setOpenNav(false);

  useEffect(() => {
    window.addEventListener("resize", handleWindowResize);

    return () => {
      window.removeEventListener("resize", handleWindowResize);
    };
  }, []);

  return (
    <Navbar className="mx-auto mt-2 lg:mt-5  w-[95%] max-w-screen-xl px-6 py-3 shadow-[0px_10px_30px_rgba(0,0,0,0.7)] bg-black  bg-opacity-85 border-none fixed left-1/2 transform -translate-x-1/2 z-10">
      <div className="flex items-center justify-between text-white">
        <Link
          to="Home"
          smooth={true}
          duration={500}
          className="flex items-center text-white hover:text-gray-500 transition-transform duration-50 hover:scale-125"
        >
          <img
            className="flex items-center justify-center m-0  w-10 h-auto"
            src="../public/img/IGO-logo.png.png"
            alt="IGO-logo"
          />
        </Link>
        <div className="hidden lg:block">
          <NavList setOpenNav={setOpenNav} openNav={openNav} />
        </div>
        <IconButton
          variant="text"
          className="ml-auto h-6 w-6 text-inherit hover:bg-transparent focus:bg-transparent active:bg-transparent lg:hidden"
          ripple={false}
          onClick={() => setOpenNav(!openNav)}
        >
          {openNav ? (
            <XMarkIcon className="h-6 w-6" strokeWidth={2} />
          ) : (
            <Bars3Icon className="h-6 w-6" strokeWidth={2} />
          )}
        </IconButton>
      </div>
      <Collapse open={openNav}>
        <NavList setOpenNav={setOpenNav} openNav={openNav} />
      </Collapse>
    </Navbar>
  );
}
function NavList({ setOpenNav, openNav }) {
  return (
    <ul className="my-2 flex flex-col gap-2 lg:mb-0 lg:mt-0 lg:flex-row lg:items-center lg:gap-6">
      <Typography
        as="li"
        variant="small"
        color="blue-gray"
        className="p-1 font-medium"
      >
        <Link
          to="Carrera"
          smooth={true}
          duration={500}
          className="flex items-center text-white hover:text-gray-500 transition-transform duration-50 hover:scale-125"
          onClick={() => setOpenNav(false)}
        >
          Cursos y carreras
        </Link>
      </Typography>
      <Typography
        as="li"
        variant="small"
        color="blue-gray"
        className="p-1 font-medium"
      >
        <Link
          to="Conocenos"
          smooth={true}
          duration={500}
          className="flex items-center text-white hover:text-gray-500 transition-transform duration-50 hover:scale-125"
          onClick={() => setOpenNav(false)}
        >
          Conocenos
        </Link>
      </Typography>
      <Typography
        as="li"
        variant="small"
        color="blue-gray"
        className="p-1 font-medium"
      >
        <Link
          to="Inscríbete"
          smooth={true}
          duration={500}
          className="flex items-center text-white hover:text-gray-500 transition-transform duration-50 hover:scale-125"
          onClick={() => setOpenNav(false)}
        >
          Inscríbete
        </Link>
      </Typography>
    </ul>
  );
}
