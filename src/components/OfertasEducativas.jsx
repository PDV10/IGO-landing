import { Carousel, IconButton } from "@material-tailwind/react";
export default function OfertasEducativas() {
  const ofertasEducativos = [
    {
      id: 0,
      titulo: "Seminarios",
      descripcion:
        "Son experiencias educativas intensivas las cuales están idealmente diseñadas para quienes buscan profundizar en áreas específicas de la gastronomía y la pastelería perfeccionando técnicas y explorando nuevas tendencias. ",
      img: "../../src/assets/fotos/pasteleria.jpg",
      altImg: "Imagen de Seminarios",
    },
    {
      id: 1,
      titulo: "Cursos",
      descripcion:
        "Nuestros cursos están diseñados para quienes desean obtener una formación más profunda. Se basan en un programa que cubre desde los conocimientos básicos hasta técnicas avanzadas. ",
      img: "../../src/assets/fotos/cocina.jpg",
      altImg: "Imagen de Cursos",
    },
    {
      id: 2,
      titulo: "Cursos Intensivos",
      descripcion:
        "Para quienes buscan resultados aún más rápidos, los cursos intensivos se enfocan en proporcionar una formación acelerada y especializada. Son ideales para aquellas personas con poca disponibilidad horaria.  ",
      img: "../../src/assets/fotos/pasteleria2.jpg",
      altImg: "Imagen de Curso Intensivos",
    },
    {
      id: 3,
      titulo: "Cocineritos",
      descripcion:
        "Los más pequeños descubren el arte de la gastronomía mientras se divierten. A través de recetas creativas, aprenden técnicas básicas de cocina, fomentando su desarrollo y hábitos saludables. ",
      img: "../../src/assets/fotos/cocineritos.jpg",
      altImg: "Imagen de Cocineritos",
    },
  ];

  return (
    <>
      <section
        id="ofertas-educativas"
        className="bg-gradient-to-b from-white to-gray-500 p-2 rounded-3xl "
      >
        <div className="p-5 lg:flex justify-center gap-2">
          <h1 className="text-center font-medium text-xl lg:text-2xl xl:text-3xl">
            Explora nuestras
          </h1>
          <h2 className="text-center font-bold italic text-xl lg:text-2xl xl:text-3xl">
            Ofertas educativas
          </h2>
        </div>
        {window.innerWidth < 1024 ? (
          <Carousel
            className=" h-full rounded-xl"
            navigation={({ setActiveIndex, activeIndex, length }) => (
              <div className="absolute bottom-5 left-2/4 z-50 flex -translate-x-2/4 gap-2">
                {new Array(length).fill("").map((_, i) => (
                  <span
                    key={i}
                    className={`block h-1 cursor-pointer rounded-2xl transition-all content-[''] ${
                      activeIndex === i ? "w-8 bg-black" : "w-4 bg-black/50"
                    }`}
                    onClick={() => setActiveIndex(i)}
                  />
                ))}
              </div>
            )}
            prevArrow={({ handlePrev }) => (
              <IconButton
                variant="text"
                color="black"
                size="xl"
                onClick={handlePrev}
                className="!absolute top-2/4 left-1 -translate-y-2/4 "
              >
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24">
                  <path d="M15.293 3.293 6.586 12l8.707 8.707 1.414-1.414L9.414 12l7.293-7.293-1.414-1.414z" />
                </svg>
              </IconButton>
            )}
            nextArrow={({ handleNext }) => (
              <IconButton
                loop
                variant="text"
                color="black"
                size="xl"
                onClick={handleNext}
                className="!absolute top-2/4 !right-1 -translate-y-2/4"
              >
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24">
                  <path d="M7.293 4.707 14.586 12l-7.293 7.293 1.414 1.414L17.414 12 8.707 3.293 7.293 4.707z" />
                </svg>
              </IconButton>
            )}
          >
            {ofertasEducativos.map((ofertas) => {
              return (
                <div
                  key={ofertas.id}
                  className="relative flex justify-center mb-10 lg:mb-20"
                >
                  <div className="absolute w-[290px] h-full flex flex-col justify-end items-start text-start text-black z-10 p-8">
                    <h2 className="text-xl font-boring font-bold ">
                      {ofertas.titulo}
                    </h2>
                    <p className="text-[13px]  mt-3 text-start font-boring font-medium">
                      {ofertas.descripcion}
                    </p>
                  </div>

                  <div className="relative w-[290px] h-[450px] md:h-[370px] lg:h-[500px] lg:w-[500px]">
                    <img
                      src={ofertas.img}
                      alt={ofertas.altImg}
                      className="w-full h-full object-cover rounded-3xl"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-gray-300 to-transparent rounded-3xl"></div>
                  </div>
                </div>
              );
            })}
          </Carousel>
        ) : (
          <>
            <section className="flex flex-row gap-6 xl:gap-10 px-5 xl:px-10">
              {ofertasEducativos.map((ofertas) => {
                return (
                  <div
                    key={ofertas.id}
                    className="relative flex justify-center mb-10 lg:mb-20 group transition-transform duration-300 ease-in-out " // Agregar hover:scale-110
                  >
                    {/* Imagen de fondo */}
                    <img
                      src={ofertas.img}
                      alt={ofertas.altImg}
                      className="h-[350px] md:h-[370px] lg:h-[500px] lg:w-[500px] object-cover rounded-3xl transition-all duration-300 ease-in-out"
                    />
                    {/* Capa oscura que aparece al hacer hover */}
                    <div className="absolute inset-0 bg-black opacity-0 transition-opacity duration-300 ease-in-out group-hover:opacity-50 rounded-3xl" />
                    {/* Contenedor del texto, centrado */}
                    <div className="absolute inset-0 flex justify-center items-center text-center text-white z-20 p-4 opacity-0 transition-opacity duration-300 ease-in-out group-hover:opacity-100">
                      <div className="w-64 flex flex-col justify-center items-center">
                        <h2 className="text-2xl font-bold">{ofertas.titulo}</h2>
                        <p className="font-boring">{ofertas.descripcion}</p>
                      </div>
                    </div>
                  </div>
                );
              })}
            </section>
          </>
        )}
      </section>
      <section className="relative bg-[url('../../src/assets/fotos/pasteleria3.jpg')] bg-cover bg-center w-100 h-40 ">
        {/* Capa para oscurecer fondo  */}
        <div className="absolute inset-0 bg-black opacity-70"></div>

        <div className="absolute top-2/4 left-2/4 transform -translate-x-2/4 -translate-y-2/4 h-20 border-2 rounded-xl mx-auto text-center w-[95%] flex justify-evenly">
          <div className="flex items-center justify-center ">
            <p className="lg:text-lg lg:font-semibold text-white">
              +300 alumnos
            </p>
          </div>
          <div className="flex items-center justify-center border-x-white border-x-[1px] my-2 sm:px-2 md:px-10 lg:px-20 ">
            <p className="lg:text-lg lg:font-semibold text-white">
              Equipos de alta tecnología
            </p>
          </div>
          <div className="flex items-center justify-center rounded-xl">
            <p className="lg:text-lg lg:font-semibold text-white">
              Titulación oficial
            </p>
          </div>
        </div>
      </section>
    </>
  );
}
