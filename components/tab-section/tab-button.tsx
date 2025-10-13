import React from "react";

type TabButtonProps = {
    children: React.ReactNode;
    onClick: () => void;
    isSelected: boolean;
    className?: string;
}

export default function TabButton({ children, onClick, isSelected, className }: TabButtonProps) {
    let baseClasses = "inline-block m-2 p-3 text-slate-300 rounded-md hover:bg-slate-900 hover:text-white";
    
    if (isSelected) {
        baseClasses += " bg-blue-500 text-white";
    }
    
    if (className) {
        baseClasses += ` ${className}`;
    }

    function handleClick() {
        console.log("Han apretado un clic.");
        onClick();
    }

    return (
        <button className={baseClasses} onClick={handleClick}>
            {children}
        </button>
    )
}