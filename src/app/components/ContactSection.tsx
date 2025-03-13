'use client'
import { useState } from "react";
import { FaGithub, FaLinkedin } from "react-icons/fa";

export default function ContactPage() {
    const [formData, setFormData] = useState({
        name: "",
        email: "",
        message: ""
    });

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData((prevData) => ({
            ...prevData,
            [name]: value
        }));
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log(formData);
    };

    return (
        <section id="contact" className="min-h-screen bg-gray-900 text-white w-full px-4 py-20 flex items-center">
            <div className="max-w-4xl w-full mx-auto">
                <h1 className="text-4xl font-bold text-center text-blue-400 mb-12">
                    Contact <span className="text-white">Me</span>
                </h1>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
                    <div className="bg-gray-800 rounded-lg shadow-md p-6 space-y-4 border border-blue-400 flex flex-col">
                        <h2 className="text-xl font-semibold text-blue-400">Get in Touch</h2>
                        <p className="text-gray-300">Feel free to reach out if you have any questions or opportunities.</p>
                        <div className="text-gray-400 space-y-2">
                            <p><strong>Email:</strong> jblustre0025@gmail.com</p>
                            <p><strong>Phone:</strong> +639949167357</p>
                            <p><strong>Location:</strong> Calamba, Laguna</p>
                        </div>
                        <div className="flex space-x-4 mt-4">
                            <a href="https://github.com/jblustre0125" target="_blank" rel="noopener noreferrer" className="text-blue-400 hover:text-blue-300">
                                <FaGithub size={28} />
                            </a>
                            <a href="https://www.linkedin.com/in/jovelyn-lustre-9704a0278/" target="_blank" rel="noopener noreferrer" className="text-blue-400 hover:text-blue-300">
                                <FaLinkedin size={28} />
                            </a>
                        </div>
                    </div>

                    <form 
                        onSubmit={handleSubmit} 
                        className="bg-gray-800 rounded-lg shadow-md p-6 space-y-4 border border-blue-400 flex flex-col"
                    >
                        <div className="space-y-4">
                            <input
                                type="text"
                                name="name"
                                placeholder="Your Name"
                                value={formData.name}
                                onChange={handleChange}
                                className="w-full p-3 rounded-md bg-gray-700 text-white border border-blue-400 focus:outline-none focus:ring-2 focus:ring-blue-400"
                            />

                            <input
                                type="email"
                                name="email"
                                placeholder="Your Email"
                                value={formData.email}
                                onChange={handleChange}
                                className="w-full p-3 rounded-md bg-gray-700 text-white border border-blue-400 focus:outline-none focus:ring-2 focus:ring-blue-400"
                            />

                            <textarea
                                name="message"
                                placeholder="Your Message"
                                value={formData.message}
                                onChange={handleChange}
                                className="w-full p-3 rounded-md bg-gray-700 text-white border border-blue-400 focus:outline-none focus:ring-2 focus:ring-blue-400"
                                rows={5}
                            />
                        </div>

                        <button 
                            type="submit" 
                            className="w-full py-3 bg-blue-600 text-white rounded-md hover:bg-blue-500 transition-all"
                        >
                            Send Message
                        </button>
                    </form>
                </div>
            </div>
        </section>
    );
}
