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
        className="pt-5 w-full bg-gray-400 min-h-screen flex flex-col items-center "
      >
        <section className="flex flex-col lg:flex-row lg:gap-2 ">
          <h1 className="font-kabrio  text-black text-2xl text-center">
            Conoce nuestras
          </h1>
          <h2 className="font-kabrio font-bold italic text-black text-3xl text-center pb-5">
            Carreras profesionales
          </h2>
        </section>
        <div className="bg-gray-300 bg-opacity-80 w-[90%] md:w-[85%] lg:w-[80%] h-14 rounded-t-xl ">
          <ul className="flex justify-evenly h-full font-boring font-medium">
            <li className="flex items-center justify-center text-sm ">
              <button
                className={`px-2 py-1 cursor-pointer rounded-lg  ${
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
            descripcion="La carrera de Cocinero Profesional te formará para preparar, presentar y conservar todo tipo de alimentos, garantizando calidad y cumpliendo con objetivos económicos optimizando los recursos y materias primas utilizadas. También aprenderás a respetar todas las normas de seguridad e higiene en la manipulación de alimentos.
Nuestros estudiantes adquieren las habilidades necesarias para sobresalir en el mundo de la gastronomía, permitiéndoles trabajar en todo tipo de establecimientos gastronómicos, desde restaurantes y bares hasta áreas gastronómicas en servicios de alojamiento, instituciones educativas, comedores públicos o privados, e incluso en plantas productoras de alimentos.
No solo aprenderás a producir cualquier tipo de preparación culinaria, sino que también estarás preparado para supervisar y coordinar un área de producción gastronómica, asegurando su correcto funcionamiento y gestión.
"
            descripcionMobile="La carrera de Cocinero Profesional te formará para preparar, presentar y conservar todo tipo de alimento, garantizando calidad y cumpliendo con objetivos económicos. También aprenderás a respetar todas las normas de seguridad e higiene en la manipulación de alimentos.
Nuestros estudiantes adquieren las habilidades para sobresalir en el mundo de la gastronomía y trabajar en todo tipo de establecimientos gastronómicos, desde restaurantes hasta instituciones educativas, comedores públicos o privados, e incluso en plantas productoras de alimentos.
No solo aprenderás a elaborar cualquier plato, sino que también estarás preparado para supervisar y coordinar un área de producción gastronómica.
"
            img="./src/assets/fotos/cocinero.jpg"
          />
        ) : (
          <CarreraCard
            carrera={`${carreraActual} profesional`}
            titulo="Sumérgete en el mundo creativo de la pasteleria"
            descripcion="La carrera de Pastelero Profesional te ofrece una formación que combina tradición y modernidad, donde trabajarás con precisión, creatividad y dedicación en cada paso del proceso. Aprenderás a preelaborar, preparar, presentar y conservar una amplia gama de productos de pastelería, dominando las técnicas que te permitirán destacar en el mundo de la repostería.
Como estudiante, adquirirás un extenso conocimiento que abarca la elaboración y producción de productos de chocolatería, panadería y heladería. Al finalizar la carrera, tendrás las competencias necesarias para desempeñarte en espacios gastronómicos como confiterías, panaderías, bares, restaurantes y plantas productoras de alimentos. Además, estarás preparado para coordinar, dirigir y supervisar áreas relacionadas con la pastelería y la panadería, desarrollando una visión única que elevará tus habilidades a un nivel profesional.
"
            descripcionMobile="La carrera de Pastelero Profesional te ofrece una formación que combina tradición y modernidad, donde trabajarás con precisión, creatividad y dedicación. Aprenderás a preelaborar, preparar, presentar y conservar gran variedad de productos, dominando las técnicas que te permitirán destacar en el mundo de la repostería.
Adquirirás un conocimiento que abarca la elaboración de productos de chocolatería, panadería y heladería. Al finalizar la carrera, tendrás las competencias necesarias para desempeñarte en espacios gastronómicos como confiterías, panaderías, restaurantes y plantas productoras de alimentos. Además, estarás preparado para coordinar, dirigir y supervisar áreas relacionadas con la pastelería y la panadería, desarrollando una visión única que elevará tus habilidades a un nivel profesional.
"
            img="./src/assets/fotos/pastelero.jpg"
          />
        )}
      </Element>
    </>
  );
}
