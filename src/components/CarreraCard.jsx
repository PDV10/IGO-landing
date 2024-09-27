export default function CarreraCard({
  carrera,
  titulo,
  descripcion,
  descripcionMobile,
  img,
}) {
  return (
    <div className="card flex flex-col md:flex-row justify-between w-full lg:w-[95%] bg-white bg-gradient-to-t from-gray-400 to-transparent rounded-2xl pt-5 px-5 md:px-10 md:pt-10 ">
      <div className="card-body items-center text-center md:max-w-[45%] ">
        <h2 className="card-title text-start uppercase text-sm font-boring font-light md:font-semibold ">
          {carrera}
        </h2>
        <h1 className="card-title text-start py-3 md:pt-10 mx-5 md:mx-0 text-lg md:text-3xl lg:text-5xl 2xl:text-6xl font-kabrio font-bold uppercase">
          {titulo}
        </h1>
        <p className="text-start text-md md:text-lg text-gray-800 font-boring font-light md:font-normal">
          {window.innerWidth < 960 ? descripcionMobile : descripcion}
        </p>
      </div>
      <figure className="pt-3 md:pt-0 flex justify-center md:max-w-[50%] max-h-[600px]">
        <img
          src={img}
          alt="Descripción de la imagen"
          className="rounded-xl md:rounded-2xl object-cover"
        />
      </figure>
    </div>
  );
}
