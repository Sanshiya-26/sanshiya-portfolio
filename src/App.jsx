
import React from "react";
import avatar from "./assets/avatar_white_bg_updated-removebg-preview.png";

export default function App() {
  const projects = [
    {
      title: "ML Based Study Plan Recommendation",
      desc: "Developed a DecisionTreeClassifier model in a Flask app to recommend tailored study plans using joblib and data preprocessing techniques.",
      skills: ["Machine Learning", "scikit-learn", "Python"],
      code: "#",
      demo: "#"
    },
    {
      title: "Customer Support Ticket Analysis",
      desc: "Analyzed 50k+ support tickets with SQL & Excel. Built automated VBA reporting with conditional formatting and segmentation insights.",
      skills: ["SQL", "Excel", "VBA"],
      code: "#",
      demo: "#"
    },
    {
      title: "Flight Price Analysis Dashboard",
      desc: "Scraped flight data using BeautifulSoup, visualized trends in Power BI, and automated reporting with Python & Excel.",
      skills: ["BeautifulSoup", "Python", "Excel", "Power BI"],
      code: "#",
      demo: "#"
    },
    {
      title: "Study Planner Web Application",
      desc: "Flask app generating 100-day study plans with motivational quotes, CSV persistence, and interactive UI using HTML/CSS.",
      skills: ["Flask", "Python", "HTML/CSS"],
      code: "#",
      demo: "#"
    }
  ];

  return (
    <div>
      <header className="sticky top-0 z-50 bg-white shadow-sm">
        <div className="max-w-6xl mx-auto px-6 py-4 flex justify-between items-center">
          <h1 className="font-bold text-xl text-indigo-600">Sanshiya</h1>
          <nav className="space-x-6 text-sm text-gray-600 font-medium">
            <a href="#projects" className="hover:text-indigo-600">Projects</a>
            <a href="#contact" className="hover:text-indigo-600">Contact</a>
          </nav>
        </div>
      </header>

      
      <section className="bg-white px-6 py-20">
        <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-10 items-center">
          <img src={avatar} alt="Sanshiya Avatar" className="rounded-full shadow-xl w-64 h-64 object-cover mx-auto" />
          <div className="text-center md:text-left space-y-4">
            <h2 className="text-4xl font-extrabold text-indigo-800">Hi! I'm Sanshiya Ramesh</h2>
            <p className="text-lg font-medium text-gray-700">A recent graduate junior data scientist.</p>
            <p className="text-gray-600">
              I’m here to shake things up — the one who turns big ideas into bold realities 💡<br/>
              Expert in uncovering patterns, extracting valuable insights, and solving problems creatively —
              running on data, dreams, and way too much coffee ☕️
            </p>
          </div>
        </div>

        {/* Skills Overview */}
        <div className="mt-12 text-center">
          <h3 className="text-2xl font-bold text-indigo-700 mb-4">What I Use</h3>
          <div className="flex flex-wrap justify-center gap-3 max-w-3xl mx-auto">
            {["Python", "SQL", "Power BI", "Flask", "scikit-learn", "Excel", "HTML", "CSS", "Git", "BeautifulSoup", "VBA"].map((skill, i) => (
              <span key={i} className="bg-indigo-100 text-indigo-800 px-4 py-2 rounded-full text-sm font-medium shadow">{skill}</span>
            ))}
          </div>
        </div>

        {/* Quick Stats */}
        <div className="mt-16 grid sm:grid-cols-4 gap-6 text-center max-w-5xl mx-auto">
          <div className="bg-indigo-50 p-6 rounded shadow text-indigo-800 font-semibold">
            🚀 4+ Projects
          </div>
          <div className="bg-indigo-50 p-6 rounded shadow text-indigo-800 font-semibold">
            💻 1000+ Lines of Code
          </div>
          <div className="bg-indigo-50 p-6 rounded shadow text-indigo-800 font-semibold">
            📚 200+ Hours of Learning
          </div>
          <div className="bg-indigo-50 p-6 rounded shadow text-indigo-800 font-semibold">
            ☕ 300+ Cups of Coffee
          </div>
        </div>

        {/* Mini Data Dashboard (Static placeholder chart area) */}
        <div className="mt-16 max-w-5xl mx-auto bg-gradient-to-br from-white to-indigo-50 border rounded-xl p-6 shadow-md">
          <h3 className="text-xl font-bold mb-4 text-center text-indigo-700">📊 My Personal Data Dashboard</h3>
          <div className="grid sm:grid-cols-2 gap-6 text-sm text-gray-700">
            <div className="bg-white p-4 rounded shadow text-center">
              <p className="font-bold text-3xl text-indigo-600">92%</p>
              <p>Model Accuracy (ML Project)</p>
            </div>
            <div className="bg-white p-4 rounded shadow text-center">
              <p className="font-bold text-3xl text-indigo-600">50K+</p>
              <p>Tickets Analyzed (SQL Project)</p>
            </div>
            <div className="bg-white p-4 rounded shadow text-center">
              <p className="font-bold text-3xl text-indigo-600">100 Days</p>
              <p>Study Plan App Coverage</p>
            </div>
            <div className="bg-white p-4 rounded shadow text-center">
              <p className="font-bold text-3xl text-indigo-600">15+</p>
              <p>Dashboards Built</p>
            </div>
          </div>
        </div>
      </section>


      
      {/* Personal Quick Summary */}
      <section className="bg-gradient-to-r from-purple-100 to-pink-100 py-12 px-6 text-center">
        <div className="max-w-4xl mx-auto grid sm:grid-cols-2 gap-6 text-gray-800 text-lg font-medium">
          <div className="bg-white p-6 rounded-lg shadow hover:shadow-md transition">
            🎓 Recent Graduate
          </div>
          <div className="bg-white p-6 rounded-lg shadow hover:shadow-md transition">
            📍 Residing in Eastbourne, UK
          </div>
          <div className="bg-white p-6 rounded-lg shadow hover:shadow-md transition">
            ⚙️ Tools: Python, SQL, Power BI
          </div>
          <div className="bg-white p-6 rounded-lg shadow hover:shadow-md transition">
            💬 Languages: English
          </div>
        </div>
      </section>


<section id="projects" className="py-20 px-6 bg-white">
        <h2 className="text-3xl font-bold text-indigo-600 text-center mb-12">Welcome to My Personal Data Lab</h2>
        <div className="grid md:grid-cols-2 gap-10 max-w-6xl mx-auto">
          {projects.map((project, index) => (
           {projects.map((project, index) => (
  <div key={index} className="bg-gray-50 p-6 rounded-xl shadow hover:shadow-md transition">
    <h3 className="text-xl font-bold mb-2">{project.title}</h3>
    <p className="text-sm text-gray-700 mb-3">{project.desc}</p>
    <div className="flex gap-2 flex-wrap text-xs mb-4">
      {project.skills.map((skill, i) => (
        <span key={i} className="bg-indigo-100 text-indigo-800 px-3 py-1 rounded-full">
          {skill}
        </span>
      ))}
    </div>

    {/* Buttons */}
    <div className="flex gap-4">
      <a
        href={
          project.title === "ML Based Study Plan Recommendation"
            ? "https://github.com/Sanshiya-26/flask-study-recommender"
            : project.title === "Study Planner Web Application"
            ? "https://github.com/Sanshiya-26/DS_Study_Planner"
            : "#"
        }
        target="_blank"
        rel="noopener noreferrer"
        className="text-sm px-4 py-2 border border-indigo-600 text-indigo-600 rounded hover:bg-indigo-50"
      >
        View Code
      </a>

      <a
        href={project.demo}
        target="_blank"
        rel="noopener noreferrer"
        className="text-sm px-4 py-2 bg-indigo-600 text-white rounded hover:bg-indigo-700"
      >
        Live Demo
      </a>
    </div>
  </div>
))}

            </div>
          ))}
        </div>
      </section>

      <section id="contact" className="py-20 px-6 bg-gray-100">
        <h2 className="text-3xl font-bold text-indigo-600 text-center mb-8">Reach Me Out</h2>
        <form className="max-w-xl mx-auto space-y-4">
          <input type="text" placeholder="Your Name" className="w-full px-4 py-2 border rounded-md" required />
          <input type="email" placeholder="Your Email" className="w-full px-4 py-2 border rounded-md" required />
          <textarea placeholder="Your Message" rows="5" className="w-full px-4 py-2 border rounded-md" required></textarea>
          <button type="submit" className="bg-indigo-600 text-white px-6 py-2 rounded-full hover:bg-indigo-700 transition">
            Send Message
          </button>
        </form>
      </section>

      <footer className="text-center text-sm py-6 text-gray-500">
        <p>© {new Date().getFullYear()} Sanshiya Ramesh. Built with ❤️ and React.</p>
        <p className="mt-2 text-gray-400 text-xs italic">
          Experienced in building practical data automation solutions using Python, SQL, and VBA.
        </p>
      </footer>
    </div>
  );
}
