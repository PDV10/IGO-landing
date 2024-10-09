import { Element } from "react-scroll";
import React, { useEffect, useRef } from "react";
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

  const [isSending, setIsSending] = useState(false);
  const [toast, setToast] = useState(null);

  // Estados para manejar validaciones
  const [isValidName, setIsValidName] = useState(null);
  const [isValidEmail, setIsValidEmail] = useState(null);
  const [isValidPhone, setIsValidPhone] = useState(null);
  const [isValidMessage, setIsValidMessage] = useState(null);
  const [isValidCareer, setIsValidCareer] = useState(null);

  const form = useRef();

  const validateEmail = (email) => {
    const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return regex.test(email);
  };

  const validatePhone = (phone) => {
    const regex = /^[0-9]{7,14}$/; // Acepta entre 7 y 14 dígitos
    return regex.test(phone);
  };

  const handleNameChange = (e) => {
    const value = e.target.value;
    setUserNameAndLastName(value);
    setIsValidName(value.trim() !== "");
  };

  const handleEmailChange = (e) => {
    const value = e.target.value;
    setUserEmail(value);
    setIsValidEmail(validateEmail(value));
  };

  const handlePhoneChange = (e) => {
    const value = e.target.value;
    setUserPhone(value);
    setIsValidPhone(validatePhone(value));
  };

  // Validar el textarea para que no esté vacío
  const handleMessageChange = (e) => {
    const value = e.target.value;
    setUserMessage(value);
    setIsValidMessage(value.trim() !== ""); // El campo es válido si no está vacío
  };

  // Validar el select para que tenga una opción seleccionada
  const handleCareerChange = (e) => {
    const value = e.target.value;
    setCareer(value);
    setIsValidCareer(value !== ""); // El select es válido si tiene una opción seleccionada
  };

  const sendEmail = (e) => {
    e.preventDefault();

    // Verificar si algún campo es inválido
    if (
      !isValidName ||
      !isValidEmail ||
      !isValidPhone ||
      !isValidMessage ||
      !isValidCareer
    ) {
      setToast({
        type: "error",
        message: "Por favor, completa todos los campos correctamente.",
      });
      return;
    }

    // Si todos los campos son válidos, proceder con el envío
    setIsSending(true);
    setToast({
      type: "success",
      message: "Consulta enviada satisfactoriamente.",
    });
    setTimeout(() => {
      setToast(null); // Oculta el toast después de 5 segundos
    }, 3000);
    const templateParams = {
      user_name: userNameAndLastName,
      user_email: userEmail,
      user_phone: userPhone,
      message: userMessage,
      career: career,
    };

    emailjs
      .send(serviceId, templateId, templateParams, publicKey)
      .then(() => {
        setToast({
          type: "success",
          message: "Consulta enviada satisfactoriamente.",
        });
        setIsSending(false);
        setTimeout(() => {
          setToast(null); // Oculta el toast después de 5 segundos
        }, 5000);
      })
      .catch((error) => {
        console.log("FAILED...", error.text);
        setToast({ type: "error", message: "Error al enviar el correo." });
        setIsSending(false);
      });
  };

  return (
    <Element name="form-consulta" className="w-full">
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
            {/* Nombre y apellido */}
            <div className="relative">
              <input
                type="text"
                name="user_name"
                id="user_name"
                value={userNameAndLastName}
                onChange={handleNameChange}
                className={`block px-2.5 pb-2.5 pt-4 w-full text-sm text-gray-900 bg-transparent rounded-lg border-2 
                ${
                  isValidName === null
                    ? "border-gray-300"
                    : isValidName
                    ? "border-green-600 "
                    : "border-red-600 "
                } 
                appearance-none focus:outline-none focus:ring-0 peer 
                focus:border-blue-600`} // Esto aplica el borde azul en el estado de focus
                placeholder=" "
                required
              />

              <label
                htmlFor="user_name"
                className={`absolute text-sm duration-300 transform -translate-y-4 scale-75 top-2 z-10 origin-[0] bg-white px-2 peer-focus:px-2 peer-focus:text-blue-600 peer-placeholder-shown:scale-100 peer-placeholder-shown:top-1/2 peer-placeholder-shown:-translate-y-1/2 peer-focus:top-2 peer-focus:scale-75 peer-focus:-translate-y-4
                  ${
                    isValidName === null
                      ? "text-gray-500"
                      : isValidName
                      ? "text-green-600 "
                      : "text-red-600 "
                  } 
                  `}
              >
                Nombre y apellido
              </label>
            </div>

            {/* Correo electrónico */}
            <div className="relative">
              <input
                type="email"
                name="user_email"
                id="user_email"
                value={userEmail}
                onChange={handleEmailChange}
                className={`block px-2.5 pb-2.5 pt-4 w-full text-sm text-gray-900 bg-transparent rounded-lg border-2 ${
                  isValidEmail === null
                    ? "border-gray-300"
                    : isValidEmail
                    ? "border-green-600"
                    : "border-red-600"
                } appearance-none focus:outline-none focus:ring-0 peer focus:border-blue-600`}
                placeholder=" "
                required
              />
              <label
                htmlFor="user_email"
                className={`absolute text-sm duration-300 transform -translate-y-4 scale-75 top-2 z-10 origin-[0] bg-white px-2 peer-focus:px-2 peer-focus:text-blue-600 peer-placeholder-shown:scale-100 peer-placeholder-shown:top-1/2 peer-placeholder-shown:-translate-y-1/2 peer-focus:top-2 peer-focus:scale-75 peer-focus:-translate-y-4
                  ${
                    isValidEmail === null
                      ? "text-gray-500"
                      : isValidEmail
                      ? "text-green-600 "
                      : "text-red-600 "
                  } 
                  `}
              >
                Ingresa tu correo
              </label>
            </div>

            {/* Número de teléfono */}
            <div className="relative">
              <input
                type="tel"
                name="user_phone"
                id="user_phone"
                value={userPhone}
                onChange={handlePhoneChange}
                className={`block px-2.5 pb-2.5 pt-4 w-full text-sm text-gray-900 bg-transparent rounded-lg border-2 ${
                  isValidPhone === null
                    ? "border-gray-300"
                    : isValidPhone
                    ? "border-green-600"
                    : "border-red-600"
                } appearance-none focus:outline-none focus:ring-0 peer focus:border-blue-600`}
                placeholder=" "
                required
              />
              <label
                htmlFor="user_phone"
                className={`absolute text-sm duration-300 transform -translate-y-4 scale-75 top-2 z-10 origin-[0] bg-white px-2 peer-focus:px-2 peer-focus:text-blue-600 peer-placeholder-shown:scale-100 peer-placeholder-shown:top-1/2 peer-placeholder-shown:-translate-y-1/2 peer-focus:top-2 peer-focus:scale-75 peer-focus:-translate-y-4
                  ${
                    isValidPhone === null
                      ? "text-gray-500"
                      : isValidPhone
                      ? "text-green-600 "
                      : "text-red-600 "
                  } 
                  `}
              >
                Número de teléfono
              </label>
            </div>

            {/* Carrera Profesional */}
            <div className="relative">
              <select
                name="career"
                id="career"
                value={career}
                onChange={handleCareerChange}
                className={`block px-2.5 pb-2.5 pt-4 w-full text-sm text-gray-500 bg-transparent rounded-lg border-2 peer-focus:border-blue-600 ${
                  isValidCareer === null
                    ? "border-gray-300"
                    : isValidCareer
                    ? "border-green-600"
                    : "border-red-600"
                } appearance-none focus:outline-none focus:ring-0 peer`}
                required
              >
                <option value="">Carrera Profesional</option>
                <option value="Cocinero profesional">
                  Cocinero profesional
                </option>
                <option value="Pastelero profesional">
                  Pastelero profesional
                </option>
              </select>
              <label
                htmlFor="career"
                className={`absolute text-sm duration-300 transform -translate-y-4 scale-75 top-2 z-10 origin-[0] bg-white px-2 peer-focus:px-2 peer-focus:text-blue-600 peer-placeholder-shown:scale-100 peer-placeholder-shown:top-1/2 peer-placeholder-shown:-translate-y-1/2 peer-focus:top-2 peer-focus:scale-75 peer-focus:-translate-y-4
                  ${
                    isValidCareer === null
                      ? "text-gray-500"
                      : isValidCareer
                      ? "text-green-600 "
                      : "text-red-600 "
                  } 
                  `}
              >
                Carrera Profesional
              </label>
            </div>

            {/* Mensaje */}
            <div className="relative">
              <textarea
                name="message"
                id="message"
                value={userMessage}
                onChange={handleMessageChange}
                className={`block px-2.5 pb-2.5 pt-4 w-full text-sm text-gray-900 bg-transparent rounded-lg border-2 peer-focus:border-blue-600 ${
                  isValidMessage === null
                    ? "border-gray-300"
                    : isValidMessage
                    ? "border-green-600"
                    : "border-red-600"
                } appearance-none focus:outline-none focus:ring-0 peer`}
                placeholder=" "
                rows="4"
                required
              ></textarea>
              <label
                htmlFor="message"
                className={`absolute text-sm duration-300 transform -translate-y-4 scale-75 top-2 z-10 origin-[0] bg-white px-2 peer-focus:px-2 peer-focus:text-blue-600 peer-placeholder-shown:scale-100 peer-placeholder-shown:top-1/2 peer-placeholder-shown:-translate-y-1/2 peer-focus:top-2 peer-focus:scale-75 peer-focus:-translate-y-4
                  ${
                    isValidMessage === null
                      ? "text-gray-500"
                      : isValidMessage
                      ? "text-green-600 "
                      : "text-red-600 "
                  } 
                  `}
              >
                Escribe tu mensaje aquí...
              </label>
            </div>

            {/* Botón de enviar */}
            <div className="flex justify-center">
              <button
                type="submit"
                className={`w-32 bg-gray-500 text-white px-4 py-2 rounded-2xl hover:bg-black transition ${
                  isSending ? "bg-gray-400" : ""
                }`}
                disabled={isSending}
              >
                {isSending ? "Enviando..." : "Enviar"}
              </button>
            </div>
          </form>
        </div>
      </div>

      {toast && (
        <div
          id="toast-simple"
          className={`fixed top-7 left-1/2 transform -translate-x-1/2 z-50 flex items-center w-full max-w-md p-4 space-x-4 ${
            toast.type === "success"
              ? "text-green-600 bg-green-100"
              : "text-red-600 bg-red-100"
          } rounded-lg shadow`}
          role="alert"
        >
          <svg
            className="w-12 h-8 rotate-45"
            aria-hidden="true"
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 18 20"
          >
            <path
              stroke="currentColor"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="m9 17 8 2L9 1 1 19l8-2Zm0 0V9"
            />
          </svg>
          <div className="pl-4 text-sm font-normal">{toast.message}</div>
        </div>
      )}
    </Element>
  );
}
