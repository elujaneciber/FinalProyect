import { DescriptionEntity } from "@domain/models/DescriptionEntity";

export async function Description({ content }: { content: DescriptionEntity }) {
  return (
    <section className="col-span-12 md:col-span-8 xl:col-span-9 py-4 md:px-10">
      <div>
        <h1 className="text-4xl md:text-7xl">Luján Escobar</h1>
        <h1 className="text-5xl md:text-8xl font-bold">Emanuel</h1>
        <p className="md:text-3xl text-gray-500 pt-6">
          Tecnico de audio y sonido, Jugador de tenis de campo y Aprendiz de
          desarrollo de software
        </p>
      </div>
      <h3 className="relative text-2xl font-semibold pb-4 pt-6 tracking-[4px] before:absolute before:w-10 before:h-[2px] before:bg-gray-900 before:left-0 before:bottom-0 mb-2">
        Sobre mi
      </h3>
      <p className="text-gray-500 text-xl">
        Tengo 24 años y vivo en Medellín, Colombia. Soy una persona creativa,
        proactiva, responsable y perfeccionista, con una gran pasión por el
        sonido y la tecnología. Actualmente, estoy cursando una doble titulación
        en Ingeniería de Sistemas e Ingeniería Industrial en la Universidad de
        Antioquia, y me encuentro en proceso de aprendizaje como desarrollador
        de software.<br></br>
        Además, juego tenis de campo de alto rendimiento y formo parte del
        equipo de la universidad, donde también soy monitor de tenis. Hablo
        inglés a nivel A2 e italiano a nivel A1.<br></br>
        Estoy siempre dispuesto a aprender y a enfrentar nuevos desafíos que me
        permitan crecer profesional y personalmente.
      </p>
    </section>
  );
}
