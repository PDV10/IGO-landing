export default function Home() {
  return (
    <section className="relative min-h-screen bg-[url('./src/assets/IMG-MAIN-HOME-FONDO.jpg')] bg-cover bg-center flex justify-center items-center">
      <div className="absolute bottom-0 left-0 w-full h-2/4 bg-gradient-to-t from-gray-100 to-transparent"></div>

      <h1 className="text-6xl text-center sm:text-5xl md:text-6xl md:text-left md:pr-8 md:py-4 font-bold text-black absolute top-[20%] md:left-0 md:top-[20%] md:pl-[150px] lg:text-[70px] lg:top-[30%]">
        <span>Descubre el arte culinario</span>
      </h1>

      <p className="text-2xl text-center sm:text-xl md:text-2xl md:text-left md:pr-8 md:py-4 md:mt-10 font-bold text-black absolute top-[33%] md:left-0 md:top-[33%] md:pl-[150px] whitespace-normal lg:text-[28px] lg:top-[45%]">
        <span>Donde la tradición</span>
        <br />
        <span>se fusiona con la innovación</span>
      </p>

      <button className="absolute left-1/2 top-[60%] md:left-[220px] md:top-[55%] lg:top-[65%] transform -translate-x-1/2 bg-black text-white font-bold py-[10px] px-4 text-lg md:text-[24px] rounded-lg transition-all duration-300 hover:bg-gray-800 hover:scale-105">
        Ver más
      </button>
    </section>
  );
}
