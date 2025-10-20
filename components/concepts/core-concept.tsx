import React from "react";
import Image, { StaticImageData } from "next/image";

type CoreConceptProps = {
    title: string;
    description: string;
    image: StaticImageData;
};

const CoreConcept = ({ title, description, image }: CoreConceptProps) => {
    return (
        <li className="flex flex-col items-center justify-center">
            <Image src={image} alt={title} className="w-32 h-auto" />
            <h2 className="text-2xl font-extrabold text-slate-100 p-3 mx-auto mb-6 overflow-clip">{title}</h2>
            <p className="p-3 mt-2 text-slate-200">{description}</p>
        </li>
    );
}

export default CoreConcept;