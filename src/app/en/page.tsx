import Link from "next/link";
import { Punto } from "@components/utils/Punto";
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
            <p className="md:text-3xl text-gray-500 pt-6">Software Developer</p>
          </div>
          <h3 className="relative text-2xl font-semibold pb-4 pt-6 tracking-[4px] before:absolute before:w-10 before:h-[2px] before:bg-gray-900 before:left-0 before:bottom-0 mb-2">
            Profile
          </h3>
          <p className="text-gray-500 text-xl">
            +4 years of experience as a Software Developer. Track record
            high-performing teams that deliver innovative customer-centered
            products that exceed business needs. Entrepreneurial and Lean
            mindset backed by my experience in established multinationals.
          </p>
        </section>
      </div>
      <div className="grid grid-cols-12 gap-4 mb-5">
        <section className="col-span-12 md:col-span-4 xl:col-span-3">
          <div className="bg-[#f2f0df] rounded-tl-3xl p-8 mb-5">
            <h3 className="relative text-2xl font-semibold py-4 tracking-[4px] before:absolute before:w-10 before:h-[2px] before:bg-gray-900 before:left-0 before:bottom-0 mb-6">
              Information
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
              <h4 className="font-medium text-lg">Phone Number</h4>
              <p className="text-gray-500">+57 3504995540</p>
            </div>
            <div className="mb-6">
              <h4 className="font-medium text-lg">Email</h4>
              <p className="text-gray-500">ezelujan114@gmail.com</p>
            </div>
            <div>
              <h4 className="font-medium text-lg">Address</h4>
              <p className="text-gray-500 ">Medellín, Antioquia, Colombia</p>
            </div>
          </div>
          <div className="bg-[#7c9a9262] rounded-tr-3xl p-8 mb-5">
            <h3 className="relative text-xl font-semibold py-4 tracking-[4px] before:absolute before:w-10 before:h-[2px] before:bg-gray-900 before:left-0 before:bottom-0 mb-6">
              References
            </h3>
            <div className="mb-6">
              <h4 className="font-medium text-lg">Manuel Posada</h4>
              <p className="text-gray-500 ">
                Globant, Senior Software Developer
              </p>
              <p className="text-gray-500 ">+57 3207097347</p>
            </div>
            <div className="mb-6">
              <h4 className="font-medium text-lg">Kevin Tobón Ramirez</h4>
              <p className="text-gray-500 ">
                Coordinadora Mercantil, Senior Software Developer
              </p>
              <p className="text-gray-500 ">+57 3012341770</p>
            </div>
            <div className="mb-6">
              <h4 className="font-medium text-lg">Fredy Luján Valencia</h4>
              <p className="text-gray-500 ">Computer Engineer</p>
              <p className="text-gray-500 ">+57 3226317881</p>
            </div>
            <div>
              <h4 className="font-medium text-lg">
                Isabela Restrepo del Valle
              </h4>
              <p className="text-gray-500 ">Corbeta, UX/UI Designer</p>
              <p className="text-gray-500 ">+57 3012905560</p>
            </div>
          </div>
          <div className="bg-[#caccb65e]  rounded-tl-3xl p-8">
            <h3 className="relative text-2xl font-semibold py-4 tracking-[4px] before:absolute before:w-10 before:h-[2px] before:bg-gray-900 before:left-0 before:bottom-0 mb-6">
              Languages
            </h3>
            <div className="mb-6">
              <p className="font-medium text-lg">Spanish</p>
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
            <div className="mb-0">
              <h4 className="font-medium">English</h4>
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
                {/* <svg
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
                </svg> */}
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
              Work Experience
            </h3>
            <div className="flex flex-col md:flex-row gap-8 w-full mb-6">
              <div className="text-gray-500 w-full md:w-[34%]">
                <p className="font-semibold text-gray-600">
                  Coordinadora Mercantil S.A.
                </p>
                <p>Aug. 2022 - Present</p>
                <p>1 year 9 months</p>
              </div>
              <div className="w-full md:w-[66%]">
                <h4 className="font-semibold text-lg">
                  Ssr Programmer Analyst | Tech Lead
                </h4>
                <p className="text-gray-500">
                  My evolution at Coordinadora Mercantil led me to assume roles
                  of greater responsibility and leadership. As a Semi Senior
                  Programmer Analyst and simultaneously as a Technical Leader, I
                  was responsible for coordinating development teams, managing
                  innovation projects, ensuring software quality, and exceeding
                  business expectations. I successfully collaborated with a team
                  to build a resilient app for the last mile of operations,
                  bringing the customer closer and providing reassurance to the
                  delivery person in remote areas where signal is weak, and
                  processes need to be transparent to secure information. In
                  addition to my technical responsibilities, I developed
                  leadership, communication, and time management skills, which
                  allowed me to contribute significantly to project success and
                  company growth.
                </p>
              </div>
            </div>
            <div className="flex flex-col md:flex-row gap-8 w-full mb-6">
              <div className="text-gray-500 w-full md:w-[34%]">
                <p className="font-semibold text-gray-600">
                  Coordinadora Mercantil S.A.
                </p>
                <p>Oct. 2020 - Aug. 2022</p>
                <p>1 year 11 months</p>
              </div>
              <div className="w-full md:w-[66%]">
                <h4 className="font-semibold text-lg">Jr Programmer Analyst</h4>
                <p className="text-gray-500">
                  I had the opportunity to actively contribute to the
                  development and maintenance of critical applications for the
                  company, making an impact on software quality, maximizing
                  product value, and minimizing unnecessary processes. Achieving
                  significant changes as a team, such as the creation of the
                  Digital Guide (Guía Digital), completely eliminating the use
                  of paper, or georeferencing and zoning addresses. I gained
                  extensive experience in requirement analysis, solution design,
                  and the implementation of efficient and scalable code.
                </p>
              </div>
            </div>
            <div className="flex flex-col md:flex-row gap-8 w-full">
              <div className="text-gray-500 w-full md:w-[34%]">
                <p className="font-semibold text-gray-600">PCsNET</p>
                <p>Jan. 2020 - Jun. 2020</p>
                <p>6 months</p>
              </div>
              <div className="w-full md:w-[66%]">
                <h4 className="font-semibold text-lg">Jr Software Developer</h4>
                <p className="text-gray-500">
                  I had the opportunity to put into practice the knowledge
                  acquired during my technical studies. I collaborated in the
                  development of front and back-end software, participating in
                  key projects that allowed me to become familiar with various
                  development technologies and methodologies. This experience
                  provided me with a solid foundation for my future professional
                  career, where I developed skills in problem-solving and
                  teamwork in a business environment.
                </p>
              </div>
            </div>
          </div>
          <div className="bg-[#f2f0df] rounded-tl-3xl rounded-br-3xl p-8 pb-[2.25rem]">
            <h3 className="relative text-2xl font-semibold py-4 tracking-[4px] before:absolute before:w-10 before:h-[2px] before:bg-gray-900 before:left-0 before:bottom-0 mb-6">
              Education
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
                  Computer Software Engineer
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
                  Backend Software Developer
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
                  Technologist in Analysis and Development of Information
                  Systems
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
                  Software Programming Technician
                </h4>
              </div>
            </div>
          </div>
        </section>
      </div>
      <div className="bg-[#7c9a9262] rounded-tr-3xl rounded-bl-3xl p-8">
        <h3 className="relative text-2xl font-semibold py-4 tracking-[4px] before:absolute before:w-10 before:h-[2px] before:bg-gray-900 before:left-0 before:bottom-0 mb-6">
          Skills
        </h3>
        <div className="flex flex-col lg:flex-row lg:items-center gap-2 lg:gap-16 mb-2">
          <div className="flex flex-col gap-2 text-gray-900 text-lg">
            <div className="flex items-center gap-3">
              <Punto />
              <span>Strategic planning</span>
            </div>
            <div className="flex items-center gap-3">
              <Punto />
              <span>Teamwork</span>
            </div>
            <div className="flex items-center gap-3">
              <Punto />
              <span>Lean mindset</span>
            </div>
            <div className="flex items-center gap-3">
              <Punto />
              <span>Abstract thinking</span>
            </div>
            <div className="flex items-center gap-3">
              <Punto />
              <span>Adaptability</span>
            </div>
          </div>
          <div className="flex flex-col gap-2 text-gray-900 text-lg">
            <div className="flex items-center gap-3">
              <Punto />
              <span>Problem-solving</span>
            </div>
            <div className="flex items-center gap-3">
              <Punto />
              <span>Fast learner</span>
            </div>
            <div className="flex items-center gap-3">
              <Punto />
              <span>Team leadership</span>
            </div>
            <div className="flex items-center gap-3">
              <Punto />
              <span>Pragmatic thinking</span>
            </div>
            <div className="flex items-center gap-3">
              <Punto />
              <span>Agile principles</span>
            </div>
          </div>
          <div className="flex flex-col gap-2 text-gray-900 text-lg">
            <div className="flex items-center gap-3">
              <Punto />
              <span>Go</span>
            </div>
            <div className="flex items-center gap-3">
              <Punto />
              <span>Node.js</span>
            </div>
            <div className="flex items-center gap-3">
              <Punto />
              <span>Python</span>
            </div>
            <div className="flex items-center gap-3">
              <Punto />
              <span>React</span>
            </div>
            <div className="flex items-center gap-3">
              <Punto />
              <span>SQL</span>
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
              <span>Object-oriented programming (OOP)</span>
            </div>
            <div className="flex items-center gap-3">
              <Punto />
              <span>
                Continuous integration and continuous delivery (CI/CD)
              </span>
            </div>
            <div className="flex items-center gap-3">
              <Punto />
              <span>Test-driven development (TDD)</span>
            </div>
            <div className="flex items-center gap-3">
              <Punto />
              <span>Behavior-driven development (BDD)</span>
            </div>
          </div>
        </div>
      </div>
    </article>
  );
}
