"use client";
import TabExample from "./tab-example";

const TabExampleSection = () => {
    return (
        <section id="tab-section" className="my-12 md:mx-12 mx-4 flex flex-col">
            <h2 className="text-2xl font-bold mb-4">Ejemplos de Conceptos</h2>
            <TabExample />
        </section>
    )
}

export default TabExampleSection;