import { useState } from "react";
import { motion } from "framer-motion";
import { Mail, Phone, MapPin, Globe } from "lucide-react";

export default function App() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <div className="bg-black text-white font-sans">
      {/* Navbar */}
      <nav className="flex justify-between items-center p-6 bg-black shadow-lg">
        <h1 className="text-2xl font-bold text-red-500">PALLETE CUSTOMS</h1>
        <button
          className="md:hidden"
          onClick={() => setMenuOpen(!menuOpen)}
        >
          ☰
        </button>
        <ul className={\`md:flex gap-6 \${menuOpen ? "block mt-4" : "hidden md:block"}\`}>
          <li><a href="#about" className="hover:text-red-500">About</a></li>
          <li><a href="#services" className="hover:text-red-500">Services</a></li>
          <li><a href="#portfolio" className="hover:text-red-500">Portfolio</a></li>
          <li><a href="#contact" className="hover:text-red-500">Contact</a></li>
        </ul>
      </nav>

      {/* Hero Section */}
      <section className="h-screen flex flex-col justify-center items-center text-center bg-gradient-to-r from-red-600 to-black">
        <motion.h1 
          initial={{ opacity: 0, y: -50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          className="text-5xl font-bold mb-4"
        >
          Pallete Customs
        </motion.h1>
        <p className="text-lg mb-6">Design Creations That Speak Loudly</p>
        <a href="#portfolio" className="bg-red-500 px-6 py-3 rounded-2xl font-semibold hover:bg-red-700 transition">
          Explore My Work
        </a>
      </section>

      {/* About Section */}
      <section id="about" className="py-20 px-6 md:px-20 bg-white text-black">
        <h2 className="text-3xl font-bold mb-6 text-red-600">About Me</h2>
        <p className="text-lg leading-relaxed">
          I’m <b>FL Logan</b>, founder of Pallete Customs. 
          Design isn’t just about colors and shapes—it’s about telling a story, 
          capturing an identity, and making lasting impressions. At Pallete Customs, 
          I specialize in creating modern, striking, and professional visuals tailored 
          to each client’s unique vision.
        </p>
      </section>

      {/* Services Section */}
      <section id="services" className="py-20 px-6 md:px-20 bg-gray-100 text-black">
        <h2 className="text-3xl font-bold mb-12 text-center text-red-600">Services</h2>
        <div className="grid md:grid-cols-3 gap-10">
          {[
            { title: "Brand Identity & Logos", desc: "Custom logos and full branding kits." },
            { title: "Print Design", desc: "Business cards, flyers, posters, banners." },
            { title: "Web & Digital Design", desc: "Website layouts, social media graphics, ads." },
          ].map((service, index) => (
            <div key={index} className="bg-white shadow-lg rounded-2xl p-6 hover:shadow-2xl transition">
              <h3 className="text-xl font-semibold mb-2">{service.title}</h3>
              <p>{service.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Portfolio Section */}
      <section id="portfolio" className="py-20 px-6 md:px-20 bg-black text-white">
        <h2 className="text-3xl font-bold mb-12 text-center text-red-500">Portfolio</h2>
        <div className="grid md:grid-cols-3 gap-6">
          {[1, 2, 3, 4, 5, 6].map((item) => (
            <div key={item} className="bg-gray-800 rounded-2xl h-48 flex items-center justify-center">
              <p>Project {item}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-20 px-6 md:px-20 bg-gray-100 text-black">
        <h2 className="text-3xl font-bold mb-12 text-center text-red-600">Contact</h2>
        <div className="max-w-2xl mx-auto space-y-4">
          <div className="flex items-center gap-3"><Phone className="text-red-500" /> <p>Coming Soon</p></div>
          <div className="flex items-center gap-3"><Mail className="text-red-500" /> <p>roleplayleecounty@gmail.com</p></div>
          <div className="flex items-center gap-3"><Globe className="text-red-500" /> <p>www.websiteurl.com</p></div>
          <div className="flex items-center gap-3"><MapPin className="text-red-500" /> <p>Houston, TX 77007</p></div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-6 bg-black text-center text-gray-400 text-sm">
        © 2025 Pallete Customs | Design Creations
      </footer>
    </div>
  );
}