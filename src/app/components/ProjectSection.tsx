import Link from "next/link";
import Image from "next/image";
import { FaGithub } from "react-icons/fa";

const projects = [
    {
        title: "EasyBus Booking System",
        description: "A front-end web application for booking bus tickets online.",
        technologies: ["Next.js", "TailwindCSS", "TypeScript"],
        previewImage: "/easybus-preview.png",
        repo: "#"
    },
    {
        title: "STI Event Hub",
        description: "A front-end Android app for event registration and management.",
        technologies: ["Java", "SQLite", "Material UI"],
        previewImage: "/sti-event-hub-preview.png",
        repo: "#"
    },
    {
        title: "Library Management System",
        description: "A mobile app for borrowing of books using Java.",
        technologies: ["Java", "Android Studio"],
        previewImage: "/library-preview.png",
        repo: "#"
    }
];

export default function ProjectPage() {
    return (
        <section id="projects" className="min-h-screen bg-gray-900 text-white px-8 md:px-20 py-20 w-full">
            <h1 className="text-5xl font-extrabold text-center text-blue-400 mb-12">
                My <span className="text-white">Projects</span>
            </h1>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
                {projects.map((project, index) => (
                    <div
                        key={index}
                        className="bg-gray-800 rounded-2xl shadow-lg p-6 space-y-4 border border-blue-400 hover:scale-105 transition-transform flex flex-col"
                    >
                        <div className="w-full h-48 relative">
                            <Image 
                                src={project.previewImage} 
                                alt={`${project.title} Preview`} 
                                layout="fill" 
                                objectFit="cover" 
                                className="rounded-lg"
                            />
                        </div>
                        <h2 className="text-2xl font-bold text-blue-400">{project.title}</h2>
                        <p className="text-gray-300">{project.description}</p>
                        <div className="flex flex-wrap gap-2">
                            {project.technologies.map((tech, i) => (
                                <span key={i} className="bg-blue-600 text-white px-3 py-1 rounded-md text-sm">
                                    {tech}
                                </span>
                            ))}
                        </div>

                        <div className="mt-auto">
                            <Link href={project.repo} target="_blank" className="block text-center text-blue-400 hover:underline py-2 border-t border-blue-400">
                                <FaGithub className="inline mr-2" /> Repository
                            </Link>
                        </div>
                    </div>
                ))}
            </div>
        </section>
    );
}
