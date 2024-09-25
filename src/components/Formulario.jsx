export default function Formulario() {
  return (
    <div className="p-8 msm:p-10 msm:py-20 bg-gray-900">
      <div className="max-w-sm mx-auto p-4 bg-white shadow-centrada rounded-lg mt-5 sm:max-w-md md:max-w-lg lg:max-w-xl">
        <h1 className="text-xl font-bold mb-4 text-center text-gray-800 sm:text-2xl">
          Formulario de Contacto
        </h1>
        <p className="text-gray-600 mb-6 text-center sm:text-lg">
          Completa el formulario para ponerte en contacto con nosotros
        </p>
        <form className="space-y-4">
          <div>
            <label
              htmlFor="nombreApellido"
              className="block text-sm font-medium text-gray-700"
            ></label>
            <input
              type="text"
              id="nombreApellido"
              name="nombreApellido"
              className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:ring-gray-500 focus:border-gray-500 sm:px-4"
              placeholder="Nombre y apellido"
            />
          </div>

          <div>
            <label
              htmlFor="email"
              className="block text-sm font-medium text-gray-700"
            ></label>
            <input
              type="email"
              id="email"
              name="email"
              className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:ring-gray-500 focus:border-gray-500 sm:px-4"
              placeholder="Correo Electrónico"
            />
          </div>

          <div>
            <label
              htmlFor="telefono"
              className="block text-sm font-medium text-gray-700"
            ></label>
            <input
              type="tel"
              id="telefono"
              name="telefono"
              className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:ring-gray-500 focus:border-gray-500 sm:px-4"
              placeholder="Número de Teléfono"
            />
          </div>

          <div>
            <label
              htmlFor="carrera"
              className="block text-sm font-medium text-gray-700"
            ></label>
            <select
              id="carrera"
              name="carrera"
              className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:ring-gray-500 focus:border-gray-500 sm:px-4
                    sm:text-sm sm:rounded-b-md"
            >
              <option value="">Selecciona una carrera</option>
              <option value="carrera1" className="sm:text-xs sm:rounded-b-md">
                Carrera 1
              </option>
              <option value="carrera2" className="sm:text-xs sm:rounded-b-md">
                Carrera 2
              </option>
            </select>
          </div>

          <div>
            <label
              htmlFor="mensaje"
              className="block text-sm font-medium text-gray-700"
            ></label>
            <textarea
              id="mensaje"
              name="mensaje"
              className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:ring-gray-500 focus:border-gray-500 sm:px-4"
              rows="4"
              placeholder="Escribe tu mensaje aquí"
            ></textarea>
          </div>

          <div className="text-center">
            <button
              type="submit"
              className="w-32 py-2 px-4 bg-gray-700 text-white font-bold rounded-md hover:bg-gray-900 focus:outline-none focus:ring-2 focus:ring-black"
            >
              Enviar
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}
