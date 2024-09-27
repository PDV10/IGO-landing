import { Element } from "react-scroll";
export default function Form() {
  return (
    <Element name="Form" className="w-full">
      <div className="flex justify-center items-center min-h-screen bg-black bg-[url('./src/assets/FORM-FONDO-MOVILE.png')] bg-cover bg-center pb-12 pt-12">
        <div className="bg-white shadow-centrada p-6 rounded-3xl w-full max-w-xs md:max-w-lg ">
          <h1 className="text-lg font-bold mb-4 text-center md:text-2xl font-kabrio">
            EL PRIMER PASO HACIA TU SUEÑO
          </h1>
          <p className="text-gray-600 mb-6 text-center text-sm md:text-base">
            Completa el formulario y te brindaremos toda la información sobre la
            inscripción a las carreras
          </p>
          <form className="space-y-4">
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1"></label>
              <input
                type="text"
                placeholder="Nombre y apellido"
                className="w-full px-4 py-2 border bg-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-gray-500"
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1"></label>
              <input
                type="email"
                placeholder="Ingresa tu correo"
                className="w-full px-4 py-2 border bg-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-gray-500"
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1"></label>
              <input
                type="tel"
                placeholder="Número de teléfono"
                className="w-full px-4 py-2 border bg-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-gray-500"
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1"></label>
              <select className="w-full px-4 py-2 border text-gray-500 bg-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-gray-500">
                <option value="">Carrera Profesional</option>
                <option value="Ingenieria">Ingeniería</option>
                <option value="Ciencias Sociales">Ciencias Sociales</option>
              </select>
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1"></label>
              <textarea
                placeholder="Escribe tu mensaje aquí..."
                className="w-full px-4 py-2 border bg-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-gray-500"
                rows="4"
              ></textarea>
            </div>
            <div>
              <div className="flex justify-center">
                <button
                  type="submit"
                  className="w-32 bg-gray-500 text-white px-4 py-2 rounded-2xl hover:bg-black transition"
                >
                  Enviar
                </button>
              </div>
            </div>
          </form>
        </div>
      </div>
    </Element>
  );
}
