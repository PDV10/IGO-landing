import { Element } from "react-scroll";
export default function Equipo() {
  return (
    <Element name="Conocenos" className="w-full p-3 bg-gray-300">
      <div className="min-h-[880px] overflow-hidden">
        <div className="flex flex-col md:flex-row gap-4 h-full">
          <div className="flex flex-col items-center justify-center rounded-md p-6 md:w-1/2">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-center uppercase">
              Nuestro equipo docente!
            </h1>

            <p className="hidden md:block text-center text-xl md:text-2xl lg:text-3xl pt-20">
              En IGO, contamos con un equipo docente de excelencia, integrado
              por profesionales de la gastronomía con amplia experiencia y una
              verdadera vocación. Cada uno de nuestros docentes se dedica a
              transmitir sus conocimientos con pasión, formando a nuestros
              estudiantes como profesionales.
            </p>
          </div>

          <div className="flex flex-col md:flex-row gap-2 mb-8 h-full md:w-1/2">
            <div className="grid grid-cols-2 gap-2 w-full md:p-[50px]">
              <div className="row-span-3 flex items-center justify-center w-full h-auto rounded-md shadow-[0px_0px_6px_rgba(0,0,0,8)]">
                <img
                  src="../../src/assets/profesores/IMG-PROFE (2).jpg"
                  alt="#"
                  className="w-full h-full object-cover rounded-md"
                />
              </div>

              <div className="flex items-center justify-center rounded-md shadow-[0px_0px_6px_rgba(0,0,0,8)]">
                <img
                  src="../../src/assets/profesores/IMG-PROFE (1).jpg"
                  alt="#"
                  className="w-full h-full object-cover rounded-md"
                />
              </div>

              <div className="flex items-center justify-center max-h-[100vh] rounded-md shadow-[0px_0px_6px_rgba(0,0,0,8)]">
                <img
                  src="../../src/assets/profesores/IMG-PROFE (4).jpg"
                  alt="#"
                  className="w-full h-full object-cover rounded-md"
                />
              </div>

              <div className="col-span-2 flex items-center justify-center max-h-[200px] rounded-md shadow-[0px_0px_6px_rgba(0,0,0,8)]">
                <img
                  src="../../src/assets/profesores/IMG-PROFE (3).jpg"
                  alt="#"
                  className="w-full h-full object-cover rounded-md"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </Element>
  );
}
