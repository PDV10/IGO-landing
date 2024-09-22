import { Element } from "react-scroll";
export default function Home() {
  return (
    <Element
      name="Home"
      className="relative min-h-screen bg-[url('./src/assets/IMG-MAIN-HOME-FONDO.jpg')] bg-cover bg-center flex justify-center md:justify-start items-center"
    >
      <div className="absolute bottom-0 left-0 w-full h-2/4 bg-gradient-to-t from-gray-100 to-transparent"></div>

      <div className="relative flex flex-col items-center md:items-start text-center md:text-left md:pl-[9rem]">
        <h1 className="sm:py-10 text-6xl sm:text-5xl md:text-6xl font-bold text-black md:py-4 lg:text-[4.375rem]">
          <span>Descubre el arte culinario</span>
        </h1>

        <p className="text-2xl sm:text-xl md:text-3xl font-bold text-black whitespace-normal md:mt-10 lg:text-[1.75rem]">
          <span>Donde la tradición</span>
          <br />
          <span>se fusiona con la innovación</span>
        </p>

        <button className="mt-36 bg-black text-white font-bold py-[0.625rem] px-4 text-lg md:text-[1.5rem] rounded-lg transition-all duration-300 hover:bg-gray-800 hover:scale-105">
          Ver más
        </button>
      </div>
    </Element>
  );
}
