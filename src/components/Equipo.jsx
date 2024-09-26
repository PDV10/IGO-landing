import { Element } from "react-scroll";
export default function Equipo() {
  return (
    <Element name="Conocenos" className="w-full p-3 bg-gray-400">
      <div className="flex flex-col md:flex-row gap-2 mb-8">
        <div className="grid grid-cols-2 gap-6 xl:gap-10 w-full md:w-1/2 md:p-[50px]">
          <div className="row-span-3 flex items-center justify-center w-auto h-auto rounded-2xl ">
            <img
              src="../../src/assets/profesores/PROFE (2).jpg"
              alt="#"
              className="w-full h-full object-cover rounded-2xl"
            />
          </div>

          <div className="flex items-center justify-center rounded-2xl ">
            <img
              src="../../src/assets/profesores/PROFE (1).jpg"
              alt="#"
              className="w-full h-full object-cover rounded-2xl"
            />
          </div>

          <div className="flex items-center justify-center rounded-2xl ">
            <img
              src="../../src/assets/profesores/PROFE (4).jpg"
              alt="#"
              className="w-full h-full object-cover rounded-2xl"
            />
          </div>

          <div className="col-span-2 flex items-center justify-center max-h-[100px] rounded-2xl ">
            <img
              src="../../src/assets/profesores/PROFE (3).jpg"
              alt="#"
              className="w-full h-full object-cover rounded-2xl"
            />
          </div>
        </div>

        <div className="flex items-center justify-center w-full md:w-1/2">
          <div className="text-center p-6">
            <h2 className=" font-kabrio uppercase md:pb-[50px] text-2xl md:text-3xl lg:text-4xl xl:text-8xl font-bold mb-4">
              Nuestro equipo docente
            </h2>
            <p className="opacity-60 font-boring text-lg md:text-xl lg:text-2xl xl:text-3xl xl:mt-20">
              En IGO, contamos con un equipo docente de excelencia, integrado
              por profesionales de la gastronomía con amplia experiencia y una
              verdadera vocación. Cada uno de nuestros docentes se dedica a
              transmitir sus conocimientos con pasión, formando a nuestros
              estudiantes como profesionales.
            </p>
          </div>
        </div>
      </div>
    </Element>
  );
}
