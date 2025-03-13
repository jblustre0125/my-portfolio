import Image from "next/image";
import { 
    FaHtml5, FaCss3Alt, FaJs, FaReact, 
    FaAndroid, FaGitAlt, FaJava, FaCuttlefish 
} from "react-icons/fa";
import { SiTailwindcss } from "react-icons/si";

export default function AboutSection() {
    return (
        <section
            id="about"
            className="w-full bg-gray-900 text-white px-8 md:px-20 lg:px-32 py-23"
        >
            <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center gap-20 w-full">

                {/* About Image */}
                <div className="relative w-48 md:w-72 aspect-square rounded-full overflow-hidden border-4 border-blue-400 shadow-2xl">
                    <Image 
                        src="/image2.png"
                        alt="About Me Image"
                        layout="fill"
                        objectFit="cover"
                    />
                </div>

                {/* About Content */}
                <div className="space-y-10 max-w-3xl">
                    <h1 className="text-5xl font-extrabold text-center md:text-left">
                        About <span className="text-blue-400">Me</span>
                    </h1>

                    <p className="text-lg leading-relaxed text-gray-300">
                        I am <span className="font-semibold text-white">JB Lustre</span>, a passionate 
                        <span className="font-semibold text-blue-400"> Front-end Web Developer </span>
                        dedicated to building engaging and interactive web experiences.
                        My expertise lies in creating intuitive, responsive, and dynamic user interfaces.
                    </p>

                    {/* Technical Skills */}
                    <div className="space-y-6">
                        <h2 className="text-3xl font-bold text-blue-400">Technical Skills</h2>
                        <div className="grid grid-cols-3 sm:grid-cols-3 gap-6 text-center">
                            <div className="flex flex-col items-center space-y-2">
                                <FaHtml5 size={50} className="text-orange-500" />
                                <span>HTML5</span>
                            </div>
                            <div className="flex flex-col items-center space-y-2">
                                <FaCss3Alt size={50} className="text-blue-500" />
                                <span>CSS3</span>
                            </div>
                            <div className="flex flex-col items-center space-y-2">
                                <FaJs size={50} className="text-yellow-400" />
                                <span>JavaScript</span>
                            </div>
                            <div className="flex flex-col items-center space-y-2">
                                <FaReact size={50} className="text-blue-400" />
                                <span>ReactJS</span>
                            </div>
                            <div className="flex flex-col items-center space-y-2">
                                <SiTailwindcss size={50} className="text-cyan-400" />
                                <span>TailwindCSS</span>
                            </div>
                            <div className="flex flex-col items-center space-y-2">
                                <FaAndroid size={50} className="text-green-500" />
                                <span>Android Development</span>
                            </div>
                            <div className="flex flex-col items-center space-y-2">
                                <FaCuttlefish size={50} className="text-purple-500" />
                                <span>C#</span>
                            </div>
                            <div className="flex flex-col items-center space-y-2">
                                <FaJava size={50} className="text-red-500" />
                                <span>Java</span>
                            </div>
                            <div className="flex flex-col items-center space-y-2">
                                <FaGitAlt size={50} className="text-red-500" />
                                <span>Git & GitHub</span>
                            </div>
                        </div>
                    </div>

                    {/* Experience and Education */}
                    <div className="space-y-4">
                        <h2 className="text-3xl font-bold text-blue-400">Experience & Education</h2>
                        <div className="border-l-4 border-blue-400 pl-4 space-y-2">
                            <p className="text-lg">
                                🎓 <span className="font-semibold">Bachelor&apos;s Degree in Information Technology </span>  
                                | STI College
                            </p>
                            <p className="text-lg">
                                💻 <span className="font-semibold">Front-end Developer Intern </span>  
                                | Developed dynamic UI components for web applications.
                            </p>
                            <p className="text-lg">
                                🧑‍🏫 <span className="font-semibold">IT Instructor </span>  
                                | Conducted engaging lessons on programming concepts, web development, and software engineering.
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
