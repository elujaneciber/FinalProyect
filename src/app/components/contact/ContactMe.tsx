import Link from "next/link";

export function ContactMe() {
  return (
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
  );
}
