import { Typography } from "@material-tailwind/react";

export default function Footer() {
  return (
    <>
      <footer className="mx-auto max-w-screen-2xl px-1 md:px-6 py-3 bg-black ">
        <div className="flex flex-row flex-wrap items-center  justify-evenly lg:justify-between gap-y-6 gap-x-4 md:gap-x-12 bg-black text-center">
          <div className="flex flex-col h-100 border-r-2 pr-5 md:pr-20">
            <Typography
              color="blue-gray"
              className=" text-gris-claro flex items-center font-semibold"
            >
              Sede
            </Typography>
            <Typography
              color="blue-gray"
              className=" text-gris-claro font-norma flex items-center"
            >
              Vicente López 2471
            </Typography>
            <Typography
              color="blue-gray"
              className=" text-gris-claro font-norma flex items-center"
            >
              Olavarría, Buenos Aires
            </Typography>
          </div>

          <ul className="flex items-start flex-col 2xl:flex-row  gap-x-4 ">
            <div className="flex flex-col md:flex-row gap-x-2">
              <li>
                <div className="flex items-center">
                  <img
                    className="h-5 w-5 rounded-full object-cover object-center mr-2 mb-1"
                    src="src/assets/iconos/icono-facebook.png"
                    alt="Facebook icono"
                  />

                  <Typography
                    as="a"
                    href="#"
                    color="blue-gray"
                    className="hidden lg:block font-normal transition-colors text-gris-claro hover:text-blue-500 focus:text-blue-500"
                  >
                    instituto Gastronómico Olavarría
                  </Typography>
                </div>
              </li>

              <li>
                <div className="flex items-center">
                  <img
                    className="h-5 w-5 rounded-full object-cover object-center mr-2 mb-1 "
                    src="src/assets/iconos/icono-instagram.png"
                    alt="Instagram icono"
                  />
                  <Typography
                    as="a"
                    href="#"
                    color="blue-gray"
                    className="hidden lg:block font-normal transition-colors text-gris-claro hover:text-blue-500 focus:text-blue-500"
                  >
                    igo.gastronomia
                  </Typography>
                </div>
              </li>
            </div>

            <div className="flex flex-col md:flex-row  xl:flex-row gap-x-2">
              <li>
                <div className="flex items-center">
                  <img
                    className="h-5 w-5 rounded-full object-cover object-center mr-2 mb-1"
                    src="src/assets/iconos/icono-mail.png"
                    alt="Facebook icono"
                  />
                  <Typography
                    as="a"
                    href="#"
                    color="blue-gray"
                    className="hidden lg:block font-normal transition-colors text-gris-claro hover:text-blue-500 focus:text-blue-500"
                  >
                    institutogastronomicoolavarria@gmail.com
                  </Typography>
                </div>
              </li>

              <li>
                <div className="flex items-center">
                  <img
                    className="h-5 w-5 rounded-full object-cover object-center mr-2 mb-1"
                    src="src/assets/iconos/icono-wsp.png"
                    alt="Facebook icono"
                  />
                  <Typography
                    as="a"
                    href="#"
                    color="blue-gray"
                    className="hidden lg:block font-normal transition-colors text-gris-claro hover:text-blue-500 focus:text-blue-500"
                  >
                    +54 9 2284 62 0662
                  </Typography>
                </div>
              </li>
            </div>
          </ul>
          <img
            src="https://docs.material-tailwind.com/img/logo-ct-dark.png"
            alt="logo-ct"
            className="w-10"
          />
        </div>
      </footer>
    </>
  );
}
