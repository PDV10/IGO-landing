import { Carousel, IconButton } from "@material-tailwind/react";
export default function OfertasEducativas() {
  return (
    <>
      <section className="bg-gradient-to-b from-white to-gray-500 p-2">
        <Carousel
          className=" h-full rounded-xl"
          navigation={({ setActiveIndex, activeIndex, length }) => (
            <div className="absolute bottom-4 left-2/4 z-50 flex -translate-x-2/4 gap-2">
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
              className="!absolute top-2/4 left-1 -translate-y-2/4"
            >
              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24">
                <path d="M15.293 3.293 6.586 12l8.707 8.707 1.414-1.414L9.414 12l7.293-7.293-1.414-1.414z" />
              </svg>
            </IconButton>
          )}
          nextArrow={({ handleNext }) => (
            <IconButton
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
          <div className="w-[70%] flex justify-center mx-auto">
            <img
              src="../../src/assets/fotos/pasteleria.jpg"
              alt="imagen pasteleria"
              className="h-full object-cover rounded-md "
            />
          </div>
          <div className="w-[70%] flex justify-center mx-auto">
            <img
              src="../../src/assets/fotos/cocina.jpg"
              alt="imagen cocina"
              className="h-full object-cover rounded-md "
            />
          </div>
          <div className="w-[70%] flex justify-center mx-auto">
            <img
              src="../../src/assets/fotos/pasteleria2.jpg"
              alt="imagen pasteleria2"
              className="h-full object-cover rounded-md "
            />
          </div>
          <div className="w-[70%] flex justify-center mx-auto">
            <img
              src="../../src/assets/fotos/cocineritos.jpg"
              alt="imagen pasteleria2"
              className="h-full object-cover rounded-md "
            />
          </div>
        </Carousel>
      </section>
    </>
  );
}
