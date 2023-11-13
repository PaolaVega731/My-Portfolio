import React from "react";

function SobreMi() {
  return (
    <div className="p-20 flex justify-center items-center">
      <img
        className="w-90 h-80 mr-4"
        src="../public/Perfil-foto.jpg"
        alt="Foto Perfil"
      />
      <div className="text-left">
        <p>
          Hola, mi nombre es Paola Vega , vivo en Costa Azul, Uruguay. Soy un
          persona proactiva,organizada y responsable. Capaz de formar parte de
          un equipo,disfruto mucho aprender cosas nuevas. Mi objetivo es formar
          parte de un equipo dinámico y desafiante donde poder compartir mi
          experiencia y a su vez adquirir nuevos conocimientos. Empecé mi
          trayectoria profesional como Administrativa Contable hace más de 15
          años; en éstos últimos 6 años adquirí también conocimientos en
          Analista en Comercio Exterior y Control de logística en una Planta
          Química. A finales del 2022 decidí darle un giro importante a mi
          carrera profesional y comencé con mis estudios de{" "}
          <strong>Programación Web</strong>. Actualmente sigo capacitandome en
          Programación Backend y busco ampliar mi campo laboral en el mundo del{" "}
          <strong>Desarrollo Web</strong>.
        </p>

        <h1 className="mt-8 text-lg">
          Mirá mi experiencia laboral en detalle en:
          <a
            href="https://www.linkedin.com/in/paola-vega-578093149/"
            className="bg-cyan-600 text-white px-1 py-0 rounded"
            target="_blank"
          >
            <button class="rounded-xs cursor-pointer hover:scale-110 hover:bg-cyan-600 duration-300 ...">
              Mi Linkedin
            </button>
          </a>
        </h1>
      </div>
    </div>
  );
}

export default SobreMi;
