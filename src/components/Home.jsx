import { Element } from "react-scroll";
export default function Home() {
  return (
    <Element
      name="Home"
      className="relative min-h-screen bg-[url('./src/assets/IMG-HOME-PRINCIPAL-MOBILE.png')] bg-cover bg-center flex justify-center items-center md:bg-[url('./src/assets/IMG-HOME-PRINCIPAL.jpg')]"
    >
      <div className="absolute bottom-0 left-0 w-full h-3/4 bg-gradient-to-t from-gray-400 to-transparent"></div>

      <div className="relative flex flex-col items-start w-full pl-1 msm:pl-10">
        <div className="mb-44">
          <h1 className="text-black cursor-default sm:text-5xl md:text-6xl lg:pt-10 xl:pt-10 xl:pl-32 lg:text-8xl text-left uppercase font-kabrio font-bold">
            <span className="block mb-2 hover:opacity-100 transition-opacity duration-500 opacity-50">
              Descubre
            </span>
            <span className="block mb-2 hover:opacity-100 transition-opacity duration-500 opacity-50">
              el arte
            </span>
            <span className="block hover:opacity-100 transition-opacity duration-500 opacity-50">
              culinario
            </span>
          </h1>
        </div>

        <div className="mx-auto -ml-1/2 -mr-1/2 translate-y-35 xl:translate-y-20">
          <button className="bg-black text-white  p-4 xl:p-6 xl:text-xl sm:translate-y-24 xl:translate-y-2 rounded-3xl transition-all duration-300 hover:animate-gray-scale hover:scale-110 flex items-center">
            <p className="text-xl xl:text-4xl mr-4 font-boring">
              Inscripciones <span className="font-sans">2025</span>
            </p>
            <img
              src="../../src/assets/iconos/ICON-CHECK.png"
              alt="icon-check"
              className="xl:w-[60px] w-[40px] h-auto"
            />
          </button>
        </div>
      </div>
    </Element>
  );
}
