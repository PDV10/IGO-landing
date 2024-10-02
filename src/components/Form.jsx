import { Element } from "react-scroll";
import React, { useRef } from "react";
import emailjs from "@emailjs/browser";
import { useState } from "react";

export default function Form() {
  const serviceId = import.meta.env.VITE_SERVICE_ID;
  const templateId = import.meta.env.VITE_TEMPLATE_ID;
  const publicKey = import.meta.env.VITE_PUBLIC_KEY;

  const [userNameAndLastName, setUserNameAndLastName] = useState("");
  const [userEmail, setUserEmail] = useState("");
  const [userPhone, setUserPhone] = useState("");
  const [userMessage, setUserMessage] = useState("");
  const [career, setCareer] = useState("");

  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    const templateParams = {
      user_name: userNameAndLastName,
      user_email: userEmail,
      user_phone: userPhone,
      message: userMessage,
      career: career,
    };
    console.log(templateParams);

    emailjs
      .send(serviceId, templateId, templateParams, publicKey)
      .then(() => {
        console.log("SUCCESS!");
      })
      .catch((error) => {
        console.log("FAILED...", error.text);
      });
  };

  return (
    <Element name="Form" className="w-full">
      <div className="flex justify-center items-center min-h-screen bg-black bg-[url('./src/assets/FORM-FONDO-MOVILE.png')] bg-cover bg-center pb-12 pt-12">
        <div className="bg-white shadow-centrada p-6 rounded-3xl w-full max-w-xs md:max-w-lg">
          <h1 className="text-lg font-bold mb-4 text-center md:text-2xl font-kabrio">
            EL PRIMER PASO HACIA TU SUEÑO
          </h1>
          <p className="text-gray-600 mb-6 text-center text-sm md:text-base">
            Completa el formulario y te brindaremos toda la información sobre la
            inscripción a las carreras
          </p>
          <form onSubmit={sendEmail} ref={form} className="space-y-4">
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">
                <input
                  type="text"
                  name="user_name"
                  value={userNameAndLastName}
                  onChange={(e) => setUserNameAndLastName(e.target.value)}
                  placeholder="Nombre y apellido"
                  className="w-full px-4 py-2 border bg-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-gray-500"
                />
              </label>
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">
                <input
                  type="email"
                  name="user_email"
                  value={userEmail}
                  onChange={(e) => setUserEmail(e.target.value)}
                  placeholder="Ingresa tu correo"
                  className="w-full px-4 py-2 border bg-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-gray-500"
                />
              </label>
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">
                <input
                  type="tel"
                  name="user_phone"
                  value={userPhone}
                  onChange={(e) => setUserPhone(e.target.value)}
                  placeholder="Número de teléfono"
                  className="w-full px-4 py-2 border bg-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-gray-500"
                />
              </label>
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">
                <select
                  name="career"
                  value={career}
                  onChange={(e) => setCareer(e.target.value)}
                  className="w-full px-4 py-2 border text-gray-500 bg-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-gray-500"
                >
                  <option value="">Carrera Profesional</option>
                  <option value="Ingenieria">Ingeniería</option>
                  <option value="Ciencias Sociales">Ciencias Sociales</option>
                </select>
              </label>
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">
                <textarea
                  placeholder="Escribe tu mensaje aquí..."
                  name="message"
                  value={userMessage}
                  onChange={(e) => setUserMessage(e.target.value)}
                  className="w-full px-4 py-2 border bg-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-gray-500"
                  rows="4"
                />
              </label>
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
