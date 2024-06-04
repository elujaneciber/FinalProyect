import Image from "next/image";

export function Photo({ src }: { src: string }) {
  return (
    <section className="col-span-12 md:col-span-4 xl:col-span-3 h-[38rem]">
      <Image
        src={src}
        alt="Emanuel Luján Escobar"
        width={500}
        height={500}
        className="w-full h-full object-cover rounded-tr-3xl rounded-bl-3xl"
      />
    </section>
  );
}
