import Link from "next/link";
import Punto from "../Punto";
import Image from "next/image";

export default function Page() {
  return (
    <article className="max-w-[1400px] mx-auto py-6">
      <div className="grid grid-cols-12 gap-4 mb-5">
        <section className="col-span-12 md:col-span-4 xl:col-span-3 h-[28.5rem]">
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
              Desarrollador de software
            </p>
          </div>
          <h3 className="relative text-2xl font-semibold pb-4 pt-6 tracking-[4px] before:absolute before:w-10 before:h-[2px] before:bg-gray-900 before:left-0 before:bottom-0 mb-2">
            Perfil
          </h3>
          <p className="text-gray-500 text-xl">
            +4 años de experiencia como Desarrollador de Software. Experiencia
            en equipos de alto rendimiento que ofrecen productos innovadores
            centrados en el cliente que superan las necesidades del negocio.
            Mentalidad emprendedora y orientada hacia Lean respaldada por mi
            experiencia en multinacionales establecidas.
          </p>
          {/* +4 years experience as a Software Engineering Leader. Track record
          building high-performing teams that deliver innovative
          customer-centered products that exceed business needs Entrepreneurial
          and Lean mindset backed by my experience in both established
          multinationals and startups in hyper-growth stages. */}
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
                href="https://www.linkedin.com/in/ezedev/"
                className="text-gray-500 text-base"
              >
                /in/ezedev/
              </Link>
            </div>
            <div className="mb-6">
              <h4 className="font-medium text-lg">Celular</h4>
              <p className="text-gray-500">+57 3504995540</p>
            </div>
            <div className="mb-6">
              <h4 className="font-medium text-lg">Email</h4>
              <p className="text-gray-500">ezelujan114@gmail.com</p>
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
              <h4 className="font-medium text-lg">Oscar Torres Ramos</h4>
              <p className="text-gray-500 ">
                Coordinadora Mercantil, Coordinador de desarrollo
              </p>
              <p className="text-gray-500 ">+57 3012341770</p>
            </div>
            <div className="mb-6">
              <h4 className="font-medium text-lg">Kevin Tobón Ramirez</h4>
              <p className="text-gray-500 ">
                Coordinadora Mercantil, Programador Senior
              </p>
              <p className="text-gray-500 ">+57 3012341770</p>
            </div>
            <div className="mb-6">
              <h4 className="font-medium text-lg">Fredy Luján Valencia</h4>
              <p className="text-gray-500 ">Ingeniero de Sistemas</p>
              <p className="text-gray-500 ">+57 3226317881</p>
            </div>
            <div>
              <h4 className="font-medium text-lg">
                Isabela Restrepo del Valle
              </h4>
              <p className="text-gray-500 ">Corbeta, Diseñadora UX/UI</p>
              <p className="text-gray-500 ">+57 3012905560</p>
            </div>
          </div>
          <div className="bg-[#caccb65e]  rounded-tl-3xl p-8">
            <h3 className="relative text-2xl font-semibold py-4 tracking-[4px] before:absolute before:w-10 before:h-[2px] before:bg-gray-900 before:left-0 before:bottom-0 mb-6">
              Idiomas
            </h3>
            <div className="mb-6">
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
          </div>
        </section>
        <section className="col-span-12 md:col-span-8 xl:col-span-9">
          <div className="bg-[#caccb65e] rounded-tl-3xl rounded-br-3xl p-8 pb-9 mb-5">
            <h3 className="relative text-2xl font-semibold py-4 tracking-[4px] before:absolute before:w-10 before:h-[2px] before:bg-gray-900 before:left-0 before:bottom-0 mb-6">
              Experiencia
            </h3>
            <div className="flex flex-col md:flex-row gap-8 w-full mb-6">
              <div className="text-gray-500 w-full md:w-[34%]">
                <p className="font-semibold text-gray-600">
                  Coordinadora Mercantil S.A.
                </p>
                <p>ago. 2022 - presente</p>
                <p>1 año 9 meses</p>
              </div>
              <div className="w-full md:w-[66%]">
                <h4 className="font-semibold text-lg">
                  Analista Programador Ssr | Líder Técnico
                </h4>
                <p className="text-gray-500">
                  Mi evolución en Coordinadora Mercantil me llevó a asumir roles
                  de mayor responsabilidad y liderazgo. Como Analista
                  Programador Semi Senior y al mismo tiempo como Líder Técnico,
                  fui responsable de coordinar equipos de desarrollo, gestionar
                  proyectos de innovación garantizando la calidad del software y
                  superando las espectativas del negocio. Logré construir en
                  equipo una app resiliente para la ultima milla de la
                  operación, acercando más al ciente y dando tranquilidad al
                  repartidor en zonas remotas donde la señal no llega y los
                  procesos tienen que ser transparentes asegurando la
                  información. Además de mis responsabilidades técnicas,
                  desarrollé habilidades de liderazgo, comunicación y gestión
                  del tiempo, lo que me permitió contribuir de manera
                  significativa al éxito de los proyectos y al crecimiento de la
                  empresa.
                </p>
              </div>
            </div>
            <div className="flex flex-col md:flex-row gap-8 w-full mb-6">
              <div className="text-gray-500 w-full md:w-[34%]">
                <p className="font-semibold text-gray-600">
                  Coordinadora Mercantil S.A.
                </p>
                <p>oct. 2020 - ago. 2022</p>
                <p>1 año 11 meses</p>
              </div>
              <div className="w-full md:w-[66%]">
                <h4 className="font-semibold text-lg">
                  Analista Programador Jr
                </h4>
                <p className="text-gray-500">
                  Desempeñé el rol de Analista Programador Junior en
                  Coordinadora Mercantil donde tuve la oportunidad de contribuir
                  activamente al desarrollo y mantenimiento de aplicaciones
                  críticas para la empresa. Generando un impacto en la calidad
                  del software, maximizando el valor de los productos y
                  minimizando procesos innecesarios. Logrando cambios
                  significativos en equipo, como la creación de la Guía Digital,
                  eliminando el uso de papel en su totalidad o la
                  georeferenciación y zonificación de las direcciónes. Adquirí
                  gran experiencia en el análisis de requerimientos, el diseño
                  de soluciones y la implementación de código eficiente y
                  escalable.
                </p>
              </div>
            </div>
            <div className="flex flex-col md:flex-row gap-8 w-full">
              <div className="text-gray-500 w-full md:w-[34%]">
                <p className="font-semibold text-gray-600">PCsNET</p>
                <p>ene. 2020 - jun. 2020</p>
                <p>6 meses</p>
              </div>
              <div className="w-full md:w-[66%]">
                <h4 className="font-semibold text-lg">
                  Desarrollador de Software Jr
                </h4>
                <p className="text-gray-500">
                  Tuve la oportunidad de poner en práctica los conocimientos
                  adquiridos durante mis estudios técnicos. Colaboré en el
                  desarrollo de software front y back-end, participando en
                  proyectos clave que me permitieron familiarizarme con diversas
                  tecnologías y metodologías de desarrollo. Esta experiencia me
                  brindó una sólida base para mi futura carrera profesional,
                  donde desarrollé habilidades en la resolución de problemas y
                  el trabajo en equipo en un entorno empresarial.
                </p>
              </div>
            </div>
          </div>
          <div className="bg-[#f2f0df] rounded-tl-3xl rounded-br-3xl p-8 pb-[2.5rem]">
            <h3 className="relative text-2xl font-semibold py-4 tracking-[4px] before:absolute before:w-10 before:h-[2px] before:bg-gray-900 before:left-0 before:bottom-0 mb-6">
              Educación
            </h3>
            <div className="flex flex-col md:flex-row gap-8 w-full mb-4">
              <div className="text-gray-500 w-full md:w-[34%]">
                <p className="font-semibold text-gray-600">
                  Universidad Católica del Norte
                </p>
                <p>2023 - 2025</p>
              </div>
              <div className="w-full md:w-[66%]">
                <h4 className="font-semibold text-lg">
                  Ingeniería Informática
                </h4>
              </div>
            </div>
            <div className="flex flex-col md:flex-row gap-8 w-full mb-4">
              <div className="text-gray-500 w-full md:w-[34%]">
                <p className="font-semibold text-gray-600">Universidad EAFIT</p>
                <p>2023 - 2023</p>
              </div>
              <div className="w-full md:w-[66%]">
                <h4 className="font-semibold text-lg">
                  Diplomado desarrollador front y back-end de software
                </h4>
              </div>
            </div>
            <div className="flex flex-col md:flex-row gap-8 w-full mb-4">
              <div className="text-gray-500 w-full md:w-[34%]">
                <p className="font-semibold text-gray-600">
                  Servicio Nacional de Aprendizaje
                </p>
                <p>2021 - 2023</p>
              </div>
              <div className="w-full md:w-[66%]">
                <h4 className="font-semibold text-lg">
                  Tecnólogo en Análisis y Desarrollo de Sistemas de Información
                </h4>
              </div>
            </div>
            <div className="flex flex-col md:flex-row gap-8 w-full">
              <div className="text-gray-500 w-full md:w-[34%]">
                <p className="font-semibold text-gray-600">
                  Servicio Nacional de Aprendizaje
                </p>
                <p>2019 - 2020</p>
              </div>
              <div className="w-full md:w-[66%]">
                <h4 className="font-semibold text-lg">
                  Técnico en Programación de Software
                </h4>
              </div>
            </div>
          </div>
        </section>
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
              <span>Liderazgo de equipo</span>
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
              <span>Typescript</span>
            </div>
            <div className="flex items-center gap-3">
              <Punto />
              <span>Node.js</span>
            </div>
            <div className="flex items-center gap-3">
              <Punto />
              <span>SQL</span>
            </div>
            <div className="flex items-center gap-3">
              <Punto />
              <span>React</span>
            </div>
            <div className="flex items-center gap-3">
              <Punto />
              <span>GCP/Azure/AWS</span>
            </div>
          </div>
          <div className="flex flex-col gap-2 text-gray-900 text-lg">
            <div className="flex items-center gap-3">
              <Punto />
              <span>Infra as Code</span>
            </div>
            <div className="flex items-center gap-3">
              <Punto />
              <span>Programación orientada a objetos (POO)</span>
            </div>
            <div className="flex items-center gap-3">
              <Punto />
              <span>Integración continua y entrega continua (CI/CD)</span>
            </div>
            <div className="flex items-center gap-3">
              <Punto />
              <span>Desarrollo basado en pruebas (TDD)</span>
            </div>
            <div className="flex items-center gap-3">
              <Punto />
              <span>Desarrollo guiado por comportamiento (BDD)</span>
            </div>
          </div>
        </div>
      </div>
    </article>
  );
}
