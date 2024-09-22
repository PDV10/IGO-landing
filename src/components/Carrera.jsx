import { useState } from "react";
import CarreraCard from "./CarreraCard";
import { Element } from "react-scroll";

export default function Carrera() {
  let [carreraActual, setCarreraActual] = useState("Cocinero");

  const toggleCarrera = (carrera) => {
    setCarreraActual(carrera);
  };

  return (
    <>
      <Element
        name="Carrera"
        className="pt-14 pb-10 md:pb-5 w-full bg-gray-400 min-h-screen flex flex-col items-center"
      >
        <h1 className="text-white text-2xl text-center">Conoce nuestras</h1>
        <h2 className="font-black italic text-white text-2xl text-center pb-5">
          Carreras profesionales
        </h2>
        <div className="bg-gray-300 bg-opacity-80 w-[90%] md:w-[85%] lg:w-[80%] h-14 rounded-t-xl ">
          <ul className="flex justify-evenly h-full">
            <li className="flex items-center justify-center text-sm font-bold">
              <button
                className={`px-2 py-1 cursor-pointer rounded-lg ${
                  carreraActual === "Cocinero"
                    ? "bg-black text-white"
                    : "bg-transparent text-black"
                }`}
                onClick={() => toggleCarrera("Cocinero")}
              >
                Cocinero profesional
              </button>
            </li>
            <li className="flex items-center justify-center text-sm font-boldr">
              <button
                className={`px-2 py-1 cursor-pointer rounded-lg ${
                  carreraActual === "Pastelero"
                    ? "bg-black text-white"
                    : "bg-transparent text-black"
                }`}
                onClick={() => toggleCarrera("Pastelero")}
              >
                Pastelero profesional
              </button>
            </li>
          </ul>
        </div>
        {carreraActual === "Cocinero" ? (
          <CarreraCard
            carrera={`${carreraActual} profesional`}
            titulo="Tu futuro en la cocina comienza aquí"
            descripcion="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer nec odio.
Praesent libero. Sed cursus ante dapibus diam."
            img="./src/assets/fotos/cocinero.jpg"
          />
        ) : (
          <CarreraCard
            carrera={`${carreraActual} profesional`}
            titulo="Sumérgete en el mundo creativo de la pasteleria"
            descripcion="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer nec odio.
Praesent libero. Sed cursus ante dapibus diam."
            img="./src/assets/fotos/pastelero.jpg"
          />
        )}
      </Element>
    </>
  );
}
