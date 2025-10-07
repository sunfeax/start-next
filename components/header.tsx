import logoHeader from "@/public/react-core-concepts.png";
import Image from "next/image";

export default function Header() {
  return (
    <header className="flex-col w-full flex items-center justify-center p-4 gap-5">
      <Image
        id="cabecera"
        src={logoHeader}
        alt="React Concepts"
        width={150}
        height={100}
      />
      <h1 className="font-sixtyfour w-5/6 text-center text-3xl font-extrabold bg-gradient-to-r from-purple-600 to-violet-300 bg-clip-text и text-transparent">
      Conceptos básicos de React</h1>
      <h4>Cuatro conceptos fundamentales para entender React</h4>
    </header>
  );
}