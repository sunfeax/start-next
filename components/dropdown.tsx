'use client';

import React from "react";
import { useState } from "react";
import Link from "next/link";

const list = [
    {href: '/', label: 'Home'},
    {href: '/prueba1', label: 'Prueba 1'},
    {href: '/prueba2', label: 'Prueba 2'},
]

const Dropdown = ({menuText}: {menuText: string}) => {
    const [isOpen, setIsOpen] = useState(false);
    
    return (
        <div className="mx-auto md:mx-28 relative flex flex-col items-center">
            <button
                className="bg-purple-700 p-4 flex items-center font-bold text-xl rounded-xl tracking-wider border-4 border-transparent active:border-white active:text-white duration-300 w-[200px] justify-center hover:bg-purple-500"
                onClick={() => setIsOpen(prev => !prev)}
                type="button"
            >
                {menuText}
                <svg width="24" height="24" fill="white" clip-rule="evenodd" fill-rule="evenodd" stroke-linejoin="round" stroke-miterlimit="2" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path d="m16.843 10.211c.108-.141.157-.3.157-.456 0-.389-.306-.755-.749-.755h-8.501c-.445 0-.75.367-.75.755 0 .157.05.316.159.457 1.203 1.554 3.252 4.199 4.258 5.498.142.184.36.29.592.29.23 0 .449-.107.591-.291 1.002-1.299 3.044-3.945 4.243-5.498z"/></svg>
            </button>
            
            {isOpen && (
                <div className="absolute top-20 bg-purple-950 p-4 rounded-lg z-10">
                    {list.map(item => (
                        <div
                        key={item.label}
                        className="flex w-full justify-between hover:bg-blue-400 cursor-pointer rounded-r-lg border-l-transparent hover:border-l-white border-l-4">
                            <Link
                            href={item.href}
                            className="flex-1 text-xl text-white rounded-md px-3 py-2"
                            onClick={() => console.log("Click")}
                            >
                            {item.label}
                            </Link>
                        </div>
                    ))}
                </div>
            )}
        </div>
    )
}

export default Dropdown