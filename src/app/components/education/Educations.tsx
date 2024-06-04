export function Educations() {
  return (
    <div className="bg-[#f2f0df] rounded-tl-3xl rounded-br-3xl p-8 pb-[2.25rem] mb-4">
      <h3 className="relative text-2xl font-semibold py-4 tracking-[4px] before:absolute before:w-10 before:h-[2px] before:bg-gray-900 before:left-0 before:bottom-0 mb-6">
        Educación
      </h3>
      <div className="flex flex-col md:flex-row gap-8 w-full mb-4">
        <div className="text-gray-500 w-full md:w-[34%]">
          <p className="font-semibold text-gray-600">Colegio Lújan</p>
          <p>2017</p>
        </div>
        <div className="w-full md:w-[66%]">
          <h4 className="font-semibold text-lg">Bachillerato Académico</h4>
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
  );
}
