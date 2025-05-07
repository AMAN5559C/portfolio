import { Button } from "@/components/ui/button";
import { Github, Linkedin } from "lucide-react";
import { motion } from "framer-motion";
import { Link } from "react-scroll";
import { useState } from "react";
import emailjs from "emailjs-com";
import { DiPython, DiReact, DiJavascript1, DiGit } from "react-icons/di";
import { SiTensorflow } from "react-icons/si";
import { Cpu, Code, Database } from "lucide-react";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css"; // optional for notifications




export default function Portfolio() {
  const [showForm, setShowForm] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
  
    emailjs.sendForm(
      import.meta.env.VITE_EMAILJS_SERVICE_ID,
      import.meta.env.VITE_EMAILJS_TEMPLATE_ID,
      e.target,
      import.meta.env.VITE_EMAILJS_PUBLIC_KEY
    )
    
      .then(
        (result) => {
          console.log("SUCCESS:", result.text);
          alert("🎉 Message sent successfully!");
          e.target.reset(); // Clear form after sending
        },
        (error) => {
          console.error("FAILED:", error.text);
          alert("🚫 Failed to send message. Check console for details.");
        }
      );
  };  

  return (
    <main className="min-h-screen bg-gradient-to-b from-black via-zinc-900 to-black text-white px-6 py-10 font-sans">
      {/* Hero Section */}
      <section className="text-center space-y-4">
        <motion.h1
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-4xl md:text-6xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-blue-500"
        >
          Aman Bind
        </motion.h1>
        <p className="text-zinc-400">
          AI Engineer | Deep Learning Enthusiast | CSE @ 2026
        </p>

        {/* Social Links */}
        <div className="flex justify-center gap-4">
          <a href="https://github.com/AMAN5559C" target="_blank" rel="noopener noreferrer" title="GitHub">
            <Github className="hover:text-purple-400 transition" />
          </a>
          <a href="https://linkedin.com/in/amanbind795" target="_blank" rel="noopener noreferrer" title="LinkedIn">
            <Linkedin className="hover:text-blue-400 transition" />
          </a>
        </div>

        {/* Resume Button */}
       <a href="https://drive.google.com/file/d/13qkjCmc46RM59zwVamH2MwVLJ0P_LWeF/view" target="_blank" rel="noopener noreferrer"> <Button
          className="mt-4 bg-purple-600 hover:bg-purple-700 text-white"
          type="button"
          onClick={() => {
            // Add resume download logic here
          }}
        >
          Resume
        </Button></a>
      </section>

      {/* Navigation
      <nav className="fixed top-0 w-full bg-transparent z-10">
        <div className="flex justify-center gap-8 py-4">
          <Link to="about" smooth={true} duration={500} className="text-white hover:text-purple-400 cursor-pointer">
            About
          </Link>
          <Link to="projects" smooth={true} duration={500} className="text-white hover:text-purple-400 cursor-pointer">
            Projects
          </Link>
          <Link to="contact" smooth={true} duration={500} className="text-white hover:text-purple-400 cursor-pointer">
            Contact
          </Link>
        </div>
      </nav> */}

{/* 👇🏽 Add this below your Projects Section, above Contact Section*/}

<section id="skills" className="mt-20 max-w-4xl mx-auto text-center">
  <h2 className="text-3xl font-semibold text-purple-400 mb-6">Skills</h2>
  <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-6 justify-items-center text-white text-5xl">
    <div className="flex flex-col items-center space-y-2">
      <DiPython title="Python" className="hover:text-yellow-300 transition" />
      <span className="text-sm text-zinc-400">Python</span>
    </div>
    <div className="flex flex-col items-center space-y-2">
      <DiReact title="React" className="hover:text-cyan-400 transition" />
      <span className="text-sm text-zinc-400">React</span>
    </div>
    <div className="flex flex-col items-center space-y-2">
      <DiJavascript1 title="JavaScript" className="hover:text-yellow-400 transition" />
      <span className="text-sm text-zinc-400">JavaScript</span>
    </div>
    <div className="flex flex-col items-center space-y-2">
      <SiTensorflow title="TensorFlow" className="hover:text-orange-500 transition" />
      <span className="text-sm text-zinc-400">TensorFlow</span>
    </div>
    <div className="flex flex-col items-center space-y-2">
      <DiGit title="Git" className="hover:text-red-500 transition" />
      <span className="text-sm text-zinc-400">Git</span>
    </div>
  </div>
</section>



      {/* About Section */}
      <section id="about" className="mt-20 max-w-3xl mx-auto text-center">
        <h2 className="text-3xl font-semibold text-purple-400 mb-4">About Me</h2>
        <p className="text-zinc-300">
          I'm a passionate computer science student driven to build intelligent systems with real-world impact. I specialize in deep learning, computer vision, and Python backend development.
        </p>
      </section>

      {/* Projects Section */}
      <section id="projects" className="mt-20 max-w-5xl mx-auto">
        <h2 className="text-3xl font-semibold text-purple-400 mb-6 text-center">Projects</h2>
        <div className="grid md:grid-cols-2 gap-6">
          {/* Project Card */}
          <div className="bg-zinc-800 rounded-2xl p-6 shadow-md backdrop-blur-sm border border-zinc-700">
            <h3 className="text-xl font-bold text-white">Deepfake Detection System</h3>
            <p className="text-zinc-400 mt-2">
              A full-stack AI project using PyTorch, Flask, and Cloudinary to detect deepfakes with XceptionNet.
            </p>
            <div className="mt-4 flex gap-4">
              <a
                href="https://github.com/AMAN5559C/DeepFake-Detection"
                target="_blank"
                rel="noopener noreferrer"
                className="text-sm text-blue-400"
                title="View on GitHub"
              >
                GitHub
              </a>
              <a
                href="https://deepfake-detection-beryl.vercel.app/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-sm text-purple-400"
                title="Live Demo"
              >
                Live Demo
              </a>
            </div>
          </div>

          <div className="bg-zinc-800 rounded-2xl p-6 shadow-md backdrop-blur-sm border border-zinc-700">
            <h3 className="text-xl font-bold text-white">KALLEN Gen AI</h3>
            <p className="text-zinc-400 mt-2">
              Ongoing Project...
              <br />
              <br />
            </p>
            <div className="mt-4 flex gap-4">
              <a
                href="https://github.com/AMAN5559C"
                target="_blank"
                rel="noopener noreferrer"
                className="text-sm text-blue-400"
                title="View on GitHub"
              >
                GitHub
              </a>
              <a
                href="#"
                target="_blank"
                rel="noopener noreferrer"
                className="text-sm text-purple-400"
                title="Live Demo"
              >
                Live Demo
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="mt-20 text-center">
        <h2 className="text-3xl font-semibold text-purple-400 mb-4">Contact Me</h2>

        {/* Button to show the form */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.6 }}
        >
          <Button
            className="mt-4 bg-purple-600 hover:bg-purple-700 text-white"
            type="button"
            onClick={() => setShowForm(!showForm)}
          >
            {showForm ? "Hide Form" : "Send Message"}
          </Button>
        </motion.div>

        {/* Conditional rendering of the contact form with motion */}
        {showForm && (
          <motion.form
            onSubmit={handleSubmit}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 20 }}
            transition={{ duration: 0.5 }}
            className="max-w-xl mx-auto bg-zinc-800 p-6 rounded-lg mt-6"
          >
            <div className="mb-4">
              <input
                type="text"
                name="name"
                placeholder="Your Name"
                className="w-full px-4 py-2 text-white bg-zinc-700 rounded-md focus:outline-none focus:ring-2 focus:ring-purple-500"
                required
              />
            </div>
            <div className="mb-4">
              <input
                type="email"
                name="email"
                placeholder="Your Email"
                className="w-full px-4 py-2 text-white bg-zinc-700 rounded-md focus:outline-none focus:ring-2 focus:ring-purple-500"
                required
              />
            </div>
            <div className="mb-4">
              <textarea
                name="message"
                placeholder="Your Message"
                className="w-full px-4 py-2 text-white bg-zinc-700 rounded-md focus:outline-none focus:ring-2 focus:ring-purple-500"
                required
              ></textarea>
            </div>
            <button type="submit" className="w-full bg-purple-600 hover:bg-purple-700 text-white py-2 rounded-md">
              Send Message
            </button>
          </motion.form>
        )}

        <p className="text-zinc-300 mt-4">
          Or reach out via email:{" "}
          <a
            href="mailto:shriamanbind795@gmail.com"
            className="text-blue-400 underline"
            title="Email Aman"
          >
            shriamanbind795@gmail.com
          </a>
        </p>
      </section>
    </main>
  );
}
