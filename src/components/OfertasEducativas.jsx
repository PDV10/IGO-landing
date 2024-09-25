import { Carousel, IconButton } from "@material-tailwind/react";
export default function OfertasEducativas() {
  const ofertasEducativos = [
    {
      id: 0,
      titulo: "Seminarios",
      descripcion: "lorem ",
      img: "../../src/assets/fotos/pasteleria.jpg",
      altImg: "Imagen de Seminarios",
    },
    {
      id: 1,
      titulo: "Cursos",
      descripcion: "lorem ",
      img: "../../src/assets/fotos/cocina.jpg",
      altImg: "Imagen de Cursos",
    },
    {
      id: 2,
      titulo: "Cursos Intensivos",
      descripcion: "lorem ",
      img: "../../src/assets/fotos/pasteleria2.jpg",
      altImg: "Imagen de Curso Intensivos",
    },
    {
      id: 3,
      titulo: "Cocineritos",
      descripcion: "lorem ",
      img: "../../src/assets/fotos/cocineritos.jpg",
      altImg: "Imagen de Cocineritos",
    },
  ];

  return (
    <>
      <section className=" bg-gradient-to-b from-white to-gray-500 p-2 ">
        <div className="p-5">
          <h1 className="text-center font-medium text-xl">Explora nuestras</h1>
          <h2 className="text-center font-bold italic text-xl">
            Ofertas educativas
          </h2>
        </div>
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
              <div key={ofertas.id} className="relative flex justify-center ">
                <div className="absolute w-64 h-full flex flex-col justify-center items-start text-start text-black z-10 p-4">
                  <h2 className="text-2xl font-bold">{ofertas.titulo}</h2>
                  <p className=" text-start">{ofertas.descripcion}</p>
                </div>
                <img
                  src={ofertas.img}
                  alt={ofertas.altImg}
                  className="h-[350px] object-cover rounded-3xl opacity-40"
                />
              </div>
            );
          })}
        </Carousel>
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
          <div className="flex items-center justify-center rounded-md">
            <p className="lg:text-lg lg:font-semibold text-white">
              Titulación oficial
            </p>
          </div>
        </div>
      </section>
    </>
  );
}
