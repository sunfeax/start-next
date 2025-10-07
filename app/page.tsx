import Header from "@/components/header";

export default function Home() {
  return (
  <>
    <Header/>
    <section
      id="conceptos"
      className="m-12 flex flex-col justify-center bg-violet-800 min-w-44"
    >
      <h1 className="classname text-2x1 font-extrabold text-slate-100 p-3 mx-auto mb-6 overflow-clip">Conceptos básicos de React</h1>
      <ul className="m-3 md:m-8 flex flex-col md:flex-row space-y-16 md:space-y-0">
        <li className="flex flex-col items-center justify-center">
          
        </li>
      </ul>
    </section>
  </>
  );
}
