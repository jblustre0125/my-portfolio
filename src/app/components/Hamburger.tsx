import { useState } from "react";
import { FaBars, FaTimes } from "react-icons/fa";
import { NAV_LINKS } from "../constants/NAV_LINKS";
import Link from "next/link";

const Hamburger = () => {
    const [isOpen, setIsOpen] = useState(false);

    // Smooth Scroll Function
    const handleScroll = (e: React.MouseEvent<HTMLAnchorElement, MouseEvent>, href: string) => {
        e.preventDefault();
        const targetElement = document.querySelector(href);

        if (targetElement) {
            window.scrollTo({
                top: targetElement.getBoundingClientRect().top + window.scrollY - 50, // Adjust for spacing
                behavior: "smooth",
            });
        }

        setIsOpen(false); // Close the menu after clicking a link
    };

    return (
        <nav className="fixed top-0 left-0 w-full bg-gray-900 text-white p-3 md:p-1 md:px-4 z-50">
            <div className="flex justify-between items-center">
                <h1 className="text-xl font-bold">Logo</h1>

                <div 
                    className="cursor-pointer md:hidden" 
                    onClick={() => setIsOpen(!isOpen)}
                >
                    {isOpen ? <FaTimes size={25} /> : <FaBars size={25}/>}
                </div>

                <ul className={`${isOpen ? "block z-30" : "hidden"} absolute top-14 left-0 w-full
                bg-gray-900 md:flex md:static md:w-auto`}>
                    {NAV_LINKS.map((link) => (
                        <li 
                            key={link.key} 
                            className="p-4 text-center border-b border-white md:border-none"
                        >
                            <Link 
                                href={link.href}
                                scroll={false} 
                                onClick={(e) => handleScroll(e, link.href)}
                                className="hover:text-blue-400 duration-300"
                            >
                                {link.label}
                            </Link>
                        </li>
                    ))}
                </ul>
            </div>
        </nav>
    );
};

export default Hamburger;
