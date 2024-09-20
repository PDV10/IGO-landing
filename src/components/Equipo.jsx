export default function Equipo() {
  return (
    <section className="w-full p-3 bg-gray-100">
      <div className="grid grid-cols-2 gap-2 mb-8">
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

      <div className="text-center p-6">
        <h2 className="text-2xl font-bold mb-4">¡Nuestro equipo docente!</h2>
        <p className="text-lg">
          En IGO, contamos con un equipo docente de excelencia, integrado por
          profesionales de la gastronomía con amplia experiencia y una verdadera
          vocación. Cada uno de nuestros docentes se dedica a transmitir sus
          conocimientos con pasión, formando a nuestros estudiantes como
          profesionales
        </p>
      </div>

      <div className="p-2 bg-transparent border-2 border-black rounded-2xl">
        <div className="grid grid-rows-3 gap-4">
          <div className="flex items-center justify-center  p-4 rounded-md">
            <p className="text-lg font-semibold">+300 alumnos</p>
          </div>
          <div className="flex items-center justify-center  p-4 rounded-md">
            <p className="text-lg font-semibold">Equipos de alta tecnología</p>
          </div>
          <div className="flex items-center justify-center p-4 rounded-md">
            <p className="text-lg font-semibold">Titulación oficial</p>
          </div>
        </div>
      </div>
    </section>
  );
}
