import Image from "next/image";
import Link from "next/link";

export default function HeroSection() {
    return (
        <section 
            id="home" 
            className="flex flex-col md:flex-row items-center justify-center min-h-screen w-full 
            bg-gradient-to-b from-gray-900 to-gray-700 text-white px-6 sm:px-8 md:px-16 py-12 gap-8 md:gap-12"
        >
            {/* Profile Image */}
            <div 
                className="relative w-48 h-48 sm:w-64 sm:h-64 md:w-96 md:h-96 rounded-full overflow-hidden 
                shadow-[0_4px_20px_rgba(0,180,255,0.5)] border-4 border-transparent 
                bg-gradient-to-r from-blue-400 to-blue-600 p-1 transition-transform 
                duration-300 hover:scale-105"
            >
                <div className="rounded-full overflow-hidden">
                    <Image 
                        src="/image2.png"
                        alt="My Photo"
                        layout="fill"
                        objectFit="cover"
                        className="rounded-full"
                    />
                </div>
            </div>

            {/* Content */}
            <div className="text-center md:text-left space-y-6 max-w-md">
                <h1 className="text-4xl sm:text-5xl font-extrabold leading-snug">
                    Hi, I am <span className="text-blue-400">JB Lustre</span>
                </h1>
                <p className="text-base sm:text-lg leading-relaxed">
                    A passionate <span className="font-semibold">Front-end Web Developer </span> 
                    dedicated to building engaging and interactive web experiences.
                </p>

                <div className="flex flex-col sm:flex-row gap-4 w-full">
                    <Link
                        href="#projects"
                        className="flex-1 sm:w-auto px-6 py-3 bg-gray-800 text-white 
                        border border-blue-400 rounded-lg shadow-md 
                        hover:bg-blue-600 transition duration-300 text-center"
                    >
                        View Projects
                    </Link>
                    <Link 
                        href="#contact"
                        className="flex-1 sm:w-auto px-6 py-3 bg-gray-800 text-white 
                        border border-blue-400 rounded-lg shadow-md 
                        hover:bg-blue-600 hover:border-transparent transition duration-300 text-center"
                    >
                        Contact Me
                    </Link>
                </div>
            </div>
        </section>
    )
}
