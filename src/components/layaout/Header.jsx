import {
  Navbar,
  Collapse,
  Typography,
  IconButton,
} from "@material-tailwind/react";
import { Bars3Icon, XMarkIcon } from "@heroicons/react/24/outline";
import { useState, useEffect } from "react";

import { Link } from "react-scroll";
const opciones = [
  {
    id: 1,
    opcion: "Cursos y carreras",
    to: "Carrera",
    offset: -100,
  },
  {
    id: 2,
    opcion: "Conócenos",
    to: "Conocenos",
    offset: -20,
  },
  {
    id: 3,
    opcion: "Ofertas Educativas",
    to: "ofertas-educativas",
    offset: -110,
  },
  {
    id: 4,
    opcion: "Consúltanos ",
    to: "form-consulta",
    offset: 0,
  },
];

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
      <div className="flex items-center justify-between text-white hover:cursor-pointer">
        <Link
          to="Home"
          smooth={true}
          duration={500}
          className="flex items-center text-white hover:text-gray-500 transition-transform duration-50 hover:scale-125"
          onClick={() => setOpenNav(false)}
        >
          <img
            className="flex items-center justify-center m-0  w-10 'h-'auto"
            src="../public/img/IGO-logo.png.png"
            alt="IGO-logo"
          />
        </Link>
        <div className="hidden lg:block">
          <NavList setOpenNav={setOpenNav} openNav={openNav} />
        </div>
        <IconButton
          variant="text"
          className="ml-auto 'h-'6 w-6 text-inherit hover:bg-transparent focus:bg-transparent active:bg-transparent lg:hidden"
          ripple={false}
          onClick={() => setOpenNav(!openNav)}
        >
          {openNav ? (
            <XMarkIcon className="'h-'6 w-6" strokeWidth={2} />
          ) : (
            <Bars3Icon className="'h-'6 w-6" strokeWidth={2} />
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
      {opciones.map((op) => {
        return (
          <Typography
            as="li"
            variant="small"
            color="blue-gray"
            className="p-1 font-medium"
            key={op.id}
          >
            <Link
              to={op.to}
              smooth={true}
              duration={500}
              offset={op.offset}
              className="flex items-center text-white hover:text-gray-500 transition-transform duration-50 hover:scale-125"
              onClick={() => setOpenNav(false)}
            >
              {op.opcion}
            </Link>
          </Typography>
        );
      })}
    </ul>
  );
}
