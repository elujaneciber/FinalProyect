import Link from "next/link";
import Punto from "./Punto";
import Image from "next/image";

export default function Page() {
  return (
    <article className="max-w-[1400px] mx-auto py-6">
      <div className="grid grid-cols-12 gap-4 mb-5">
        <section className="col-span-12 md:col-span-4 xl:col-span-3 h-[38rem]">
          <Image
            src="/emanuel.png"
            alt="Emanuel Luján Escobar"
            width={500}
            height={500}
            className="w-full h-full object-cover rounded-tr-3xl rounded-bl-3xl"
          />
        </section>
        <section className="col-span-12 md:col-span-8 xl:col-span-9 py-4 md:px-10">
          <div>
            <h1 className="text-4xl md:text-7xl">Luján Escobar</h1>
            <h1 className="text-5xl md:text-8xl font-bold">Emanuel</h1>
            <p className="md:text-3xl text-gray-500 pt-6">
              Tecnico de audio y sonido, Jugador de tenis de campo y Aprendiz de desarrollo de software
            </p>
          </div>
          <h3 className="relative text-2xl font-semibold pb-4 pt-6 tracking-[4px] before:absolute before:w-10 before:h-[2px] before:bg-gray-900 before:left-0 before:bottom-0 mb-2">
            Sobre mi
          </h3>
          <p className="text-gray-500 text-xl">
          Tengo 24 años y vivo en Medellín, Colombia. Soy una persona creativa, proactiva, responsable 
          y perfeccionista, con una gran pasión por el sonido y la tecnología. Actualmente, estoy cursando una doble 
          titulación en Ingeniería de Sistemas e Ingeniería Industrial en la Universidad de Antioquia, y me encuentro 
          en proceso de aprendizaje como desarrollador de software.<br></br>

          Además, juego tenis de campo de alto rendimiento y formo parte del equipo de la universidad, donde también soy monitor 
          de tenis. Hablo inglés a nivel A2 e italiano a nivel A1.<br></br>

          Estoy siempre dispuesto a aprender y a enfrentar nuevos desafíos que me permitan crecer profesional y personalmente.
          </p>
        </section>
      </div>
      <div className="grid grid-cols-12 gap-4 mb-5">
        <section className="col-span-12 md:col-span-4 xl:col-span-3">
          <div className="bg-[#f2f0df] rounded-tl-3xl p-8 mb-5">
            <h3 className="relative text-2xl font-semibold py-4 tracking-[4px] before:absolute before:w-10 before:h-[2px] before:bg-gray-900 before:left-0 before:bottom-0 mb-6">
              Información
            </h3>
            <div className="mb-6">
              <h4 className="font-medium text-lg">LinkedIn</h4>
              <Link
                target="_blank"
                href="https://www.linkedin.com/in/emasound/"
                className="text-gray-500 text-base"
              >
                /in/emasound/
              </Link>
            </div>
            <div className="mb-6">
              <h4 className="font-medium text-lg">Celular</h4>
              <p className="text-gray-500">+57 (300) 447 8129</p>
            </div>
            <div className="mb-6">
              <h4 className="font-medium text-lg">Email</h4>
              <p className="text-gray-500">emanuel.lujan@udea.edu.co</p>
            </div>
            <div>
              <h4 className="font-medium text-lg">Recidencia</h4>
              <p className="text-gray-500 ">Medellín, Antioquia, Colombia</p>
            </div>
          </div>
          <div className="bg-[#7c9a9262] rounded-tr-3xl p-8 mb-5">
            <h3 className="relative text-xl font-semibold py-4 tracking-[4px] before:absolute before:w-10 before:h-[2px] before:bg-gray-900 before:left-0 before:bottom-0 mb-6">
              Referencias
            </h3>
            <div className="mb-6">
              <h4 className="font-medium text-lg">Leonardo Higuita</h4>
              <p className="text-gray-500 ">
                Albatros Music Staff, Productor Musical
              </p>
              <p className="text-gray-500 ">+57 (310) 441 9201</p>
            </div>
            <div className="mb-6">
              <h4 className="font-medium text-lg">Willer Taborda</h4>
              <p className="text-gray-500 ">
                Itagüí Ciudad Gospel, Presidente
              </p>
              <p className="text-gray-500 ">+57 (310) 332 5379</p>
            </div>
            <div className="mb-6">
              <h4 className="font-medium text-lg">Fredy Luján Valencia</h4>
              <p className="text-gray-500 ">Ingeniero de Sistemas</p>
              <p className="text-gray-500 ">+57 3226317881</p>
            </div>
            <div>
              <h4 className="font-medium text-lg">
                Cesar Arteaga
              </h4>
              <p className="text-gray-500 ">Musical Cedar, Presidente</p>
              <p className="text-gray-500 ">+57 (310) 448 6766</p>
            </div>
          </div>
          <div className="bg-[#caccb65e]  rounded-tl-3xl p-8">
            <h3 className="relative text-2xl font-semibold py-4 tracking-[4px] before:absolute before:w-10 before:h-[2px] before:bg-gray-900 before:left-0 before:bottom-0 mb-6">
              Idiomas
            </h3>
            <div className="mb-1">
              <p className="font-medium text-lg">Español</p>
              <div className="flex items-center gap-1">
                <svg
                  stroke="currentColor"
                  fill="currentColor"
                  strokeWidth="0"
                  viewBox="0 0 24 24"
                  height="1em"
                  width="1em"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <g>
                    <path fill="none" d="M0 0h24v24H0z"></path>
                    <circle cx="12" cy="12" r="10"></circle>
                  </g>
                </svg>
                <svg
                  stroke="currentColor"
                  fill="currentColor"
                  strokeWidth="0"
                  viewBox="0 0 24 24"
                  height="1em"
                  width="1em"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <g>
                    <path fill="none" d="M0 0h24v24H0z"></path>
                    <circle cx="12" cy="12" r="10"></circle>
                  </g>
                </svg>
                <svg
                  stroke="currentColor"
                  fill="currentColor"
                  strokeWidth="0"
                  viewBox="0 0 24 24"
                  height="1em"
                  width="1em"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <g>
                    <path fill="none" d="M0 0h24v24H0z"></path>
                    <circle cx="12" cy="12" r="10"></circle>
                  </g>
                </svg>
                <svg
                  stroke="currentColor"
                  fill="currentColor"
                  strokeWidth="0"
                  viewBox="0 0 24 24"
                  height="1em"
                  width="1em"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <g>
                    <path fill="none" d="M0 0h24v24H0z"></path>
                    <circle cx="12" cy="12" r="10"></circle>
                  </g>
                </svg>
                <svg
                  stroke="currentColor"
                  fill="currentColor"
                  strokeWidth="0"
                  viewBox="0 0 24 24"
                  height="1em"
                  width="1em"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <g>
                    <path fill="none" d="M0 0h24v24H0z"></path>
                    <circle cx="12" cy="12" r="10"></circle>
                  </g>
                </svg>
              </div>
            </div>
            <div className="mb-6">
              <h4 className="font-medium">Inglés</h4>
              <div className="flex items-center gap-1">
                <svg
                  stroke="currentColor"
                  fill="currentColor"
                  strokeWidth="0"
                  viewBox="0 0 24 24"
                  height="1em"
                  width="1em"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <g>
                    <path fill="none" d="M0 0h24v24H0z"></path>
                    <circle cx="12" cy="12" r="10"></circle>
                  </g>
                </svg>
                <svg
                  stroke="currentColor"
                  fill="currentColor"
                  strokeWidth="0"
                  viewBox="0 0 24 24"
                  height="1em"
                  width="1em"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <g>
                    <path fill="none" d="M0 0h24v24H0z"></path>
                    <circle cx="12" cy="12" r="10"></circle>
                  </g>
                </svg>
                <svg
                  stroke="currentColor"
                  fill="currentColor"
                  strokeWidth="0"
                  viewBox="0 0 24 24"
                  height="1em"
                  width="1em"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <defs>
                    <linearGradient id="half-opacity">
                      <stop offset="0%" stopColor="currentColor" />
                      <stop offset="50%" stopColor="currentColor" />
                      <stop offset="50%" stopColor="rgba(0,0,0,.2)" />
                      <stop offset="100%" stopColor="rgba(0,0,0,.2)" />
                    </linearGradient>
                  </defs>
                  <circle cx="12" cy="12" r="10" fill="url(#half-opacity)" />
                </svg>
                <svg
                  stroke="currentColor"
                  fill="currentColor"
                  strokeWidth="0"
                  viewBox="0 0 24 24"
                  className="opacity-[.2]"
                  height="1em"
                  width="1em"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <g>
                    <path fill="none" d="M0 0h24v24H0z"></path>
                    <circle cx="12" cy="12" r="10"></circle>
                  </g>
                </svg>
                <svg
                  stroke="currentColor"
                  fill="currentColor"
                  strokeWidth="0"
                  viewBox="0 0 24 24"
                  className="opacity-[.2]"
                  height="1em"
                  width="1em"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <g>
                    <path fill="none" d="M0 0h24v24H0z"></path>
                    <circle cx="12" cy="12" r="10"></circle>
                  </g>
                </svg>
              </div>
            </div>
            <div className="mb-6">
              <h4 className="font-medium">Italiano</h4>
              <div className="flex items-center gap-1">
                <svg
                  stroke="currentColor"
                  fill="currentColor"
                  strokeWidth="0"
                  viewBox="0 0 24 24"
                  height="1em"
                  width="1em"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <g>
                    <path fill="none" d="M0 0h24v24H0z"></path>
                    <circle cx="12" cy="12" r="10"></circle>
                  </g>
                </svg>
                <svg
                  stroke="currentColor"
                  fill="currentColor"
                  strokeWidth="0"
                  viewBox="0 0 24 24"
                  className="opacity-[.2]"
                  height="1em"
                  width="1em"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <g>
                    <path fill="none" d="M0 0h24v24H0z"></path>
                    <circle cx="12" cy="12" r="10"></circle>
                  </g>
                </svg>
                <svg
                  stroke="currentColor"
                  fill="currentColor"
                  strokeWidth="0"
                  viewBox="0 0 24 24"
                  className="opacity-[.2]"
                  height="1em"
                  width="1em"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <g>
                    <path fill="none" d="M0 0h24v24H0z"></path>
                    <circle cx="12" cy="12" r="10"></circle>
                  </g>
                </svg>
                <svg
                  stroke="currentColor"
                  fill="currentColor"
                  strokeWidth="0"
                  viewBox="0 0 24 24"
                  className="opacity-[.2]"
                  height="1em"
                  width="1em"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <g>
                    <path fill="none" d="M0 0h24v24H0z"></path>
                    <circle cx="12" cy="12" r="10"></circle>
                  </g>
                </svg>
                <svg
                  stroke="currentColor"
                  fill="currentColor"
                  strokeWidth="0"
                  viewBox="0 0 24 24"
                  className="opacity-[.2]"
                  height="1em"
                  width="1em"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <g>
                    <path fill="none" d="M0 0h24v24H0z"></path>
                    <circle cx="12" cy="12" r="10"></circle>
                  </g>
                </svg>
              </div>
            </div>
          </div>
        </section>
        <section className="col-span-12 md:col-span-8 xl:col-span-9">
          <div className="bg-[#caccb65e] rounded-tl-3xl rounded-br-3xl p-8 pb-[5.5rem]">
            <h3 className="relative text-2xl font-semibold py-4 tracking-[4px] before:absolute before:w-10 before:h-[2px] before:bg-gray-900 before:left-0 before:bottom-0 mb-6">
              Experiencia
            </h3>
            <div className="flex flex-col md:flex-row gap-8 w-full mb-6">
              <div className="text-gray-500 w-full md:w-[34%]">
                <p className="font-semibold text-gray-600">
                  Corporación Cultural Te Creo
                </p>
                <p>ene. 2019 - presente</p>
              </div>
              <div className="w-full md:w-[66%]">
                <h4 className="font-semibold text-lg">
                  Técnico de sonido y luces
                </h4>
                <p className="text-gray-500">
                  Mi evolución en la Corporación Cultural Te Creo como técnico de sonido, audio y luces, 
                  soy responsable de coordinar todos los aspectos técnicos de las presentaciones de teatro, musica, baile, canto, 
                  garantizando una calidad óptima en cada espectáculo.<br></br>
                  Tambien me desempeño como técnico principal para el popular espectáculo de 
                  SUSO El Paspi, lo que implica viajar con el equipo y asegurar la consistencia y calidad
                  técnica en cada una de sus presentaciones en distintas ciudades. Mi responsabilidad 
                  incluyó la coordinación y ejecución de pruebas de sonido y luces antes de cada evento, 
                  asegurando una experiencia impecable para el público.<br></br>
                  Además de mis responsabilidades técnicas, desarrollé habilidades de liderazgo y gestión, 
                  supervisando el mantenimiento y funcionamiento de todo el equipo de sonido y luces. Esto no 
                  solo mejoró la eficiencia operativa, sino que también elevó el estándar de calidad técnica 
                  en nuestras producciones, contribuyendo significativamente al éxito de los eventos y al prestigio de 
                  la Corporación Cultural Te Creo.
                </p>
              </div>
            </div>
            <div className="flex flex-col md:flex-row gap-8 w-full mb-6">
              <div className="text-gray-500 w-full md:w-[34%]">
                <p className="font-semibold text-gray-600">Universidad de Antioquia</p>
                <p>ene. 2022 - Presente</p>
              </div>
              <div className="w-full md:w-[66%]">
                <h4 className="font-semibold text-lg">
                  Profesor de Tenis de Campo
                </h4>
                <p className="text-gray-500">
                  Tuve la oportunidad de poner en práctica los conocimientos adquiridos durante mi formación 
                  en tenis de campo, tanto en el Itagüí Tenis Club como en la Universidad de Antioquia. 
                  En este rol, colaboré en la planificación y ejecución de programas de entrenamiento personalizados 
                  para estudiantes y atletas, participando en proyectos clave que me permitieron familiarizarme 
                  con diversas técnicas y estrategias de enseñanza del tenis.
                  Además, trabajé en la promoción del tenis de campo dentro de la comunidad universitaria y del 
                  club, fomentando el deporte y contribuyendo al desarrollo atlético de los participantes.
                  Mi responsabilidad incluyó la evaluación del progreso de los estudiantes, la organización de 
                  competencias internas y la creación de un ambiente positivo y motivador para los jugadores. 
                  Esta experiencia fortaleció mis habilidades de liderazgo, comunicación y gestión del tiempo, 
                  permitiéndome contribuir de manera significativa al crecimiento y éxito de los programas de tenis en ambas instituciones.
                </p>
              </div>
            </div>
            <div className="flex flex-col md:flex-row gap-8 w-full">
              <div className="text-gray-500 w-full md:w-[34%]">
                <p className="font-semibold text-gray-600">
                  Itagüí Ciudad Gospel
                </p>
                <p>2018, 2019, 2021, 2022, 2023</p>
                <p>5 años</p>
              </div>
              <div className="w-full md:w-[66%]">
                <h4 className="font-semibold text-lg">
                  Tecnico de audio y Stage Manager
                </h4>
                <p className="text-gray-500">
                  Desempeñé el rol de Stage Manager y técnico de audio en Itagüí Ciudad Gospel, donde tuve 
                  la oportunidad de contribuir activamente a la producción y ejecución de eventos musicales 
                  y religiosos. Generé un impacto significativo en la calidad del sonido y la organización 
                  del escenario, optimizando los procesos técnicos y mejorando la experiencia general del 
                  público y los participantes.
                  En equipo, logramos implementar soluciones técnicas innovadoras, como la mejora de la 
                  configuración y operación de equipos de audio y luces, y la planificación eficiente de 
                  pruebas de sonido. Mis responsabilidades incluían la coordinación de todos los aspectos
                  técnicos del escenario, asegurando que cada presentación se desarrollara de manera fluida y profesional.
                  Adquirí gran experiencia en la gestión de eventos en vivo, la resolución de problemas 
                  técnicos bajo presión y la colaboración estrecha con artistas y otros profesionales. 
                  Además, desarrollé habilidades avanzadas en el manejo de equipos de audio y luces, 
                  contribuyendo de manera significativa al éxito y crecimiento de Itagüí Ciudad Gospel.
                </p>
              </div>
            </div>
          </div>
        </section>
      </div>
      <div className="bg-[#f2f0df] rounded-tl-3xl rounded-br-3xl p-8 pb-[2.25rem] mb-4">
      <h3 className="relative text-2xl font-semibold py-4 tracking-[4px] before:absolute before:w-10 before:h-[2px] before:bg-gray-900 before:left-0 before:bottom-0 mb-6">
              Educación
            </h3>
            <div className="flex flex-col md:flex-row gap-8 w-full mb-4">
              <div className="text-gray-500 w-full md:w-[34%]">
                <p className="font-semibold text-gray-600">
                  Colegio Lújan
                </p>
                <p>2017</p>
              </div>
              <div className="w-full md:w-[66%]">
                <h4 className="font-semibold text-lg">
                  Bachillerato Académico
                </h4>
              </div>
            </div>
            <div className="flex flex-col md:flex-row gap-8 w-full mb-4">
              <div className="text-gray-500 w-full md:w-[34%]">
                <p className="font-semibold text-gray-600">EAS</p>
                <p>2019</p>
              </div>
              <div className="w-full md:w-[66%]">
                <h4 className="font-semibold text-lg">
                  Curso de Live Sound Engineer
                </h4>
              </div>
            </div>
            <div className="flex flex-col md:flex-row gap-8 w-full mb-2">
              <div className="text-gray-500 w-full md:w-[34%]">
                <p className="font-semibold text-gray-600">
                  Universidad de Antioquia
                </p>
                <p>2020 - presente</p>
              </div>
              <div className="w-full md:w-[66%]">
                <h4 className="font-semibold text-lg">
                Doble titulación en Ingeniería de Sistemas e Industrial
                </h4>
              </div>
            </div> 
      </div>
      <div className="bg-[#7c9a9262] rounded-tr-3xl rounded-bl-3xl p-8">
        <h3 className="relative text-2xl font-semibold py-4 tracking-[4px] before:absolute before:w-10 before:h-[2px] before:bg-gray-900 before:left-0 before:bottom-0 mb-6">
          Habilidades
        </h3>
        <div className="flex flex-col lg:flex-row lg:items-center gap-2 lg:gap-16 mb-2">
          <div className="flex flex-col gap-2 text-gray-900 text-lg">
            <div className="flex items-center gap-3">
              <Punto />
              <span>Planificación estratégica</span>
            </div>
            <div className="flex items-center gap-3">
              <Punto />
              <span>Trabajo en equipo</span>
            </div>
            <div className="flex items-center gap-3">
              <Punto />
              <span>Mentalidad Lean</span>
            </div>
            <div className="flex items-center gap-3">
              <Punto />
              <span>Pensamiento abstracto</span>
            </div>
            <div className="flex items-center gap-3">
              <Punto />
              <span>Adaptabilidad</span>
            </div>
          </div>
          <div className="flex flex-col gap-2 text-gray-900 text-lg">
            <div className="flex items-center gap-3">
              <Punto />
              <span>Resolución de problemas</span>
            </div>
            <div className="flex items-center gap-3">
              <Punto />
              <span>Rápido aprendizaje</span>
            </div>
            <div className="flex items-center gap-3">
              <Punto />
              <span>Actitud competitiva</span>
            </div>
            <div className="flex items-center gap-3">
              <Punto />
              <span>Pensamiento pragmático</span>
            </div>
            <div className="flex items-center gap-3">
              <Punto />
              <span>Principios agiles</span>
            </div>
          </div>
          <div className="flex flex-col gap-2 text-gray-900 text-lg">
            <div className="flex items-center gap-3">
              <Punto />
              <span>Manejo de consolas de audio</span>
            </div>
            <div className="flex items-center gap-3">
              <Punto />
              <span>Operación de sistemas de luces</span>
            </div>
            <div className="flex items-center gap-3">
              <Punto />
              <span>Implementación de soluciones tecnológicas</span>
            </div>
            <div className="flex items-center gap-3">
              <Punto />
              <span>Programación front-end y back-end (en formación)</span>
            </div>
          </div>
          <div className="flex flex-col gap-2 text-gray-900 text-lg">
            <div className="flex items-center gap-3">
              <Punto />
              <span>Programación orientada a objetos (POO)</span>
            </div>
            <div className="flex items-center gap-3">
              <Punto />
              <span>Python</span>
            </div>
            <div className="flex items-center gap-3">
              <Punto />
              <span>Java</span>
            </div>
            <div className="flex items-center gap-3">
              <Punto />
              <span>React</span>
            </div>
          </div>
        </div>
      </div>
    
    </article>
  );
}