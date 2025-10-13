import { CORE_CONCEPTS } from "@/scripts/data";
import CoreConcept from "./core-concept";

export default function CoreConceptList() {
    return (
    <section id="conceptos" className="m-12 flex flex-col justify-center bg-violet-800 min-w-44">
      <h1 className="text-2xl font-extrabold text-slate-100 p-3 mx-auto mb-6 overflow-clip">Conceptos básicos de React</h1>
      <ul className="m-3 md:m-8 flex flex-col md:flex-row space-y-16 md:space-y-0 md:space-x-6 justify-center">
        
        {CORE_CONCEPTS.map((cc) => <CoreConcept key={cc.title} {...cc}/>)}

        {/* lo mismo como que esta comentado */}
        {/* {CORE_CONCEPTS.map((cc) => <CoreConcept key={cc.title} title={cc.title} image={cc.image} description={cc.description}/>)} */}

      </ul>
    </section>
    )
}