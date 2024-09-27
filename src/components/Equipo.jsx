import { Element } from "react-scroll";
export default function Equipo() {
  return (
    <Element name="Conocenos" className="w-full px-3 bg-gray-400 p-5">
      <div className="flex flex-col md:flex-row gap-2 mb-8">
        <div className="grid grid-cols-2 gap-2 xl:gap-10 w-full md:w-1/2 p-2 md:py-5 md:pl-5 lg:pl-10 lg:pt-0">
          <div className="row-span-3 flex items-center justify-center w-auto h-auto rounded-3xl">
            <img
              src="../../src/assets/equipo/PROFE (1).jpg"
              alt="#"
              className="w-full h-full object-cover rounded-3xl"
            />
          </div>

          <div className="flex items-center justify-center rounded-3xl">
            <img
              src="../../src/assets/equipo/PROFE (4).jpg"
              alt="#"
              className="w-full h-full object-cover rounded-3xl"
            />
          </div>

          <div className="flex items-center justify-center rounded-3xl">
            <img
              src="../../src/assets/equipo/PROFE (2).jpg"
              alt="#"
              className="w-full h-full object-cover rounded-3xl"
            />
          </div>

          <div className="col-span-2 flex items-center justify-center  rounded-3xl">
            <img
              src="../../src/assets/equipo/PROFE (3).jpg"
              alt="#"
              className="w-full max-h-[150px] xl:max-h-[200px] object-cover rounded-3xl"
            />
          </div>
        </div>

        <div className="flex items-center justify-center w-full md:w-1/2">
          <div className="text-center p-6 md:p8">
            <h2 className="uppercase md:pb-[50px] text-2xl md:text-3xl lg:text-4xl xl:text-7xl xl:pb-28 font-kabrio font-bold">
              Nuestro equipo docente
            </h2>
            <p className="text-lg md:text-xl lg:text-2xl font-boring font-light md:font-normal">
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
