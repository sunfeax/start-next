import logoHeader from "@public/react-core-concepts.png";
import Image from "next/image";

export default function Header() {
  return (
    <header className="w-full flex items-center justify-center p-4">
      <Image
        src={logoHeader}
        alt="React Concepts"
        width={150}
        height={100}
      />
      <div>Header</div>
    </header>
  );
}