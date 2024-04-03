import React, { useState } from 'react';
import emailjs from 'emailjs-com';

function FormContacto() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Envía el formulario usando email.js
    emailjs.sendForm('service_zgeafsm', 'template_3kpjj5b', e.target, 'fs03VkmdnlxTsiTdO')
      .then((result) => {
        console.log(result.text);
        // Agrega aquí cualquier lógica adicional después de enviar el formulario
      }, (error) => {
        console.log(error.text);
        // Maneja el error si la solicitud de envío falla
      });
  };

  return (
    <div className="flex justify-end">
      <div className="w-full lg:w-1/2 px-4 flex justify-end">
        <form onSubmit={handleSubmit} className="w-full md:w-3/4 lg:w-4/5 xl:w-3/4">
          <div className="mb-4">
            <label htmlFor="name" className="block text-gray-700 text-2x1 font-bold mb-2"> Name</label>
            <input
              type="text"
              id="name"
              name="name"
              value={formData.name}
              onChange={handleChange}
              required
              className="appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            />
          </div>
          <div className="mb-4">
            <label htmlFor="email" className="block text-gray-700 text-2x1 font-bold mb-2"> Email</label>
            <input
              type="email"
              id="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              required
              className="appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            />
          </div>
          <div className="mb-6">
            <label htmlFor="message" className="block text-gray-700 text-2x1 font-bold mb-2"> Message</label>
            <textarea
              id="message"
              name="message"
              value={formData.message}
              onChange={handleChange}
              rows="5"
              required
              className="appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            ></textarea>
          </div>
          <div className="flex justify-end">
            <button type="submit" className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline">
              Send
            </button>
          </div>
        </form>
      </div>
      
      </div>
  
  );
}

export default FormContacto;
