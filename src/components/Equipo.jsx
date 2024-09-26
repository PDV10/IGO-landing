import { Element } from "react-scroll";
export default function Equipo() {
  return (
    <Element name="Conocenos" className="w-full p-3 bg-gray-100">
      <div className="flex flex-col md:flex-row gap-2 mb-8">
        <div className="grid grid-cols-2 gap-2 w-full md:w-1/2 md:p-[50px]">
          <div className="row-span-3 flex items-center justify-center w-auto h-auto rounded-md shadow-[0px_0px_6px_rgba(0,0,0,8)]">
            <img
              src="../../public/img/IA-IMG (7).png"
              alt="#"
              className="w-full h-full object-cover rounded-md"
            />
          </div>

          <div className="flex items-center justify-center rounded-md shadow-[0px_0px_6px_rgba(0,0,0,8)]">
            <img
              src="../../public/img/IA-IMG (6).png"
              alt="#"
              className="w-full h-full object-cover rounded-md"
            />
          </div>

          <div className="flex items-center justify-center rounded-md shadow-[0px_0px_6px_rgba(0,0,0,8)]">
            <img
              src="../../public/img/IA-IMG (3).png"
              alt="#"
              className="w-full h-full object-cover rounded-md"
            />
          </div>

          <div className="col-span-2 flex items-center justify-center max-h-[100px] rounded-md shadow-[0px_0px_6px_rgba(0,0,0,8)]">
            <img
              src="../../public/img/IA-IMG (5).png"
              alt="#"
              className="w-full h-full object-cover rounded-md"
            />
          </div>
        </div>

        <div className="flex items-center justify-center w-full md:w-1/2">
          <div className="text-center p-6">
            <h2 className=" md:pb-[50px] text-2xl md:text-3xl lg:text-4xl xl:text-5xl font-bold mb-4">
              Nuestro equipo docente!
            </h2>
            <p className="text-lg md:text-xl lg:text-2xl xl:text-3xl">
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
