import React from "react";
import avatar from "./assets/avatar_white_bg_updated-removebg-preview.png";

export default function App() {
  const projects = [
    {
      title: "GenAI Risk Advisor",
      desc: "An AI-powered insurance tool that analyzes applicant profiles and historical claims using LLMs to assess risk levels. It streamlines underwriting with faster, consistent, and explainable decisions—critical in today’s data-driven insurance industry.",
      skills: [
        "Python",
        "FastAPI",
        "LangChain",
        "LLMs (Groq/OpenAI)",
        "FAISS",
        "HuggingFace",
        "PyMuPDF",
        "Streamlit",
        "Pandas"
      ],
      videoLabel: "View My Recorded Demo",
      videoLink: "https://youtu.be/Nup0fo87BXo?si=6Rx__9M00Ye38s2Z"
    },
    {
      title: "ML Based Study Plan Recommendation",
      desc: "Developed a DecisionTreeClassifier model in a Flask app to recommend tailored study plans using joblib and data preprocessing techniques.",
      skills: ["Machine Learning", "scikit-learn", "Python"],
      code: "https://github.com/Sanshiya-26/ML-based-study-planner-.git",
      demo: "https://dsstudyplanner-wo3c7muz32cjszfzhk8bkt.streamlit.app"
    },
    {
      title: "Customer Support Ticket Analysis",
      desc: "Analyzed 50k+ support tickets with SQL & Excel. Built automated VBA reporting with conditional formatting and segmentation insights.",
      skills: ["SQL", "Excel", "VBA"],
      code: "https://github.com/Sanshiya-26/Customer-Support-Ticket-Analysis-Dashboard.git",
      demo: "http://youtube.com/post/Ugkxswky0JmV2niZHkp9Rr_5FErc-NBlLffw?si=rkhjWqkZ48GzvoA6"
    },
    {
      title: "Flight Price Analysis Dashboard",
      desc: "An interactive dashboard that visualizes flight prices across airlines, routes, and durations. Helps users identify the best-value flights and optimal booking times using data insights.",
      skills: ["GenAI", "Python", "Excel", "Power BI"],
      code: "https://github.com/Sanshiya-26/Flight-Price-Analysis-Dashboard.git",
      demo: "https://flight-price-analysis-dashboard-e53iaqp6pwrvkjqudgsmz3.streamlit.app"
    },
    {
      title: "Personal Portfolio",
      desc: "Developed a modern, fully responsive portfolio website to present projects and experience, featuring a Streamlit-powered live demo dashboard with direct GitHub integration for code access.",
      skills: ["React.js", "Vite", "CSS3"],
      code: "https://github.com/Sanshiya-26/sanshiya-portfolio.git",
      demo: "https://sanshiya-portfolio-hgsg.vercel.app"
    }
  ];

  return (
    <div>
      {/* ============================
           NAVIGATION HEADER
         ============================ */}
      <header className="sticky top-0 z-50 bg-white shadow-sm">
        <div className="max-w-6xl mx-auto px-6 py-4 flex justify-between items-center">
          <h1 className="font-bold text-xl text-indigo-600">Sanshiya</h1>
          <nav className="space-x-6 text-sm text-gray-600 font-medium">
            <a href="#projects" className="hover:text-indigo-600">
              Projects
            </a>
            <a href="#contact" className="hover:text-indigo-600">
              Contact
            </a>
          </nav>
        </div>
      </header>

      {/* ============================
           INTRODUCTION SECTION
         ============================ */}
      <section className="bg-white px-6 py-20">
        <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-10 items-center">
          <img
            src={avatar}
            alt="Sanshiya Avatar"
            className="rounded-full shadow-xl w-64 h-64 object-cover mx-auto"
          />
          <div className="text-center md:text-left space-y-4">
            <h2 className="text-4xl font-extrabold text-indigo-800">
              Hi! I'm Sanshiya Ramesh
            </h2>
            <p className="text-lg font-medium text-gray-700">
              A recent graduate junior data scientist.
            </p>
            <p className="text-gray-600">
              I’m here to shake things up — the one who turns big ideas into bold
              realities 💡
              <br />
              Expert in uncovering patterns, extracting valuable insights, and solving
              problems creatively — running on data, dreams, and making it real ✨
            </p>
          </div>
        </div>

        {/* ============================
             SKILLS OVERVIEW
           ============================ */}
        <div className="mt-12 text-center">
          <h3 className="text-2xl font-bold text-indigo-700 mb-4">What I Use</h3>
          <div className="flex flex-wrap justify-center gap-3 max-w-3xl mx-auto">
            {[
              "Python",
              "SQL",
              "Power BI",
              "Flask",
              "scikit-learn",
              "Excel",
              "HTML",
              "CSS",
              "Git",
              "GenAI",
              "VBA"
            ].map((skill, i) => (
              <span
                key={i}
                className="bg-indigo-100 text-indigo-800 px-4 py-2 rounded-full text-sm font-medium shadow"
              >
                {skill}
              </span>
            ))}
          </div>
        </div>

        {/* ============================
             QUICK STATS
           ============================ */}
        <div className="mt-16 grid sm:grid-cols-4 gap-6 text-center max-w-5xl mx-auto">
          <div className="bg-indigo-50 p-6 rounded shadow text-indigo-800 font-semibold">
            🚀 5+ Projects
          </div>
          <div className="bg-indigo-50 p-6 rounded shadow text-indigo-800 font-semibold">
            💻 1000+ Lines of Code
          </div>
          <div className="bg-indigo-50 p-6 rounded shadow text-indigo-800 font-semibold">
            📚 200+ Hours of Learning
          </div>
          <div className="bg-indigo-50 p-6 rounded shadow text-indigo-800 font-semibold">
            📊 Projects > Procrastination
          </div>
        </div>
      </section>

      {/* ============================
           LARGE DASHBOARD CARD
         ============================ */}
      <section className="bg-indigo-50 px-6 py-16">
        <div className="max-w-6xl mx-auto text-center">
          <h2 className="text-2xl font-bold text-indigo-600 mb-10">
            📊 My Personal Data Dashboard
          </h2>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 text-indigo-600 font-extrabold text-2xl">
            <div className="bg-white p-4 rounded-xl shadow text-center">
              92%
              <div className="text-sm font-medium text-gray-500 mt-1">
                Model Accuracy
                <br />
                (ML Project)
              </div>
            </div>
            <div className="bg-white p-4 rounded-xl shadow text-center">
              50K+
              <div className="text-sm font-medium text-gray-500 mt-1">
                Tickets Analyzed
                <br />
                (SQL Project)
              </div>
            </div>
            <div className="bg-white p-4 rounded-xl shadow text-center">
              25+
              <div className="text-sm font-medium text-gray-500 mt-1">
                Topics Mapped
                <br />
                (ML, Python, Stats)
              </div>
            </div>
            <div className="bg-white p-4 rounded-xl shadow text-center">
              15+
              <div className="text-sm font-medium text-gray-500 mt-1">
                Dashboards Built
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ============================
           PINK SUMMARY SECTION
         ============================ */}
      <section className="bg-gradient-to-r from-purple-100 to-pink-100 py-12 px-6 text-center">
        <div className="max-w-4xl mx-auto grid sm:grid-cols-2 gap-6 text-gray-800 text-lg font-medium">
          <div className="bg-white p-6 rounded-lg shadow hover:shadow-md transition">
            🎓 Recent Graduate
          </div>
          <div className="bg-white p-6 rounded-lg shadow hover:shadow-md transition">
            📍 Residing in the UK
          </div>
          <div className="bg-white p-6 rounded-lg shadow hover:shadow-md transition">
            ⚙️ Tools: Python, SQL, Power BI
          </div>
          <div className="bg-white p-6 rounded-lg shadow hover:shadow-md transition">
            💬 Languages: English
          </div>
        </div>
      </section>

      {/* ============================
           PROJECTS SECTION
         ============================ */}
      <section id="projects" className="py-20 px-6 bg-white">
        <h2 className="text-3xl font-bold text-indigo-600 text-center mb-12">
          Welcome to My Personal Data Lab
        </h2>
        <div className="grid md:grid-cols-2 gap-10 max-w-6xl mx-auto">
          {projects.map((project, index) => (
            <div
              key={index}
              className="bg-gray-50 p-6 rounded-xl shadow hover:shadow-md transition"
            >
              <h3 className="text-xl font-bold mb-2">{project.title}</h3>
              <p className="text-sm text-gray-700 mb-3">{project.desc}</p>
              <div className="flex gap-2 flex-wrap text-xs mb-4">
                {project.skills.map((skill, i) => (
                  <span
                    key={i}
                    className="bg-indigo-100 text-indigo-800 px-3 py-1 rounded-full"
                  >
                    {skill}
                  </span>
                ))}
              </div>

              <div className="flex gap-4">
                {/* GenAI Video Button */}
                {project.videoLink && (
                  <a
                    href={project.videoLink}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-sm px-4 py-2 bg-indigo-600 text-white rounded hover:bg-indigo-700"
                  >
                    {project.videoLabel || "Watch Demo"}
                  </a>
                )}

                {/* Live Demo for all others (including the YouTube post URL for Customer Ticket) */}
                {!project.videoLink && project.demo && (
                  <a
                    href={project.demo}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-sm px-4 py-2 bg-indigo-600 text-white rounded hover:bg-indigo-700"
                  >
                    Live Demo
                  </a>
                )}

                {/* View Code for all non-videoLink projects */}
                {!project.videoLink && project.code && (
                  <a
                    href={project.code}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-sm px-4 py-2 border border-indigo-600 text-indigo-600 rounded hover:bg-indigo-50"
                  >
                    View Code
                  </a>
                )}
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* ============================
           CONTACT SECTION
         ============================ */}
      <section id="contact" className="py-20 px-6 bg-gray-100">
        <h2 className="text-3xl font-bold text-indigo-600 text-center mb-8">
          Reach Me Out
        </h2>
        <form className="max-w-xl mx-auto space-y-4">
          <input
            type="text"
            placeholder="Your Name"
            className="w-full px-4 py-2 border rounded-md"
            required
          />
          <input
            type="email"
            placeholder="Your Email"
            className="w-full px-4 py-2 border rounded-md"
            required
          />
          <textarea
            placeholder="Your Message"
            rows="5"
            className="w-full px-4 py-2 border rounded-md"
            required
          ></textarea>
          <button
            type="submit"
            className="bg-indigo-600 text-white px-6 py-2 rounded-full hover:bg-indigo-700 transition"
          >
            Send Message
          </button>
        </form>
      </section>

      {/* ============================
           FOOTER
         ============================ */}
      <footer className="text-center text-sm py-6 text-gray-500">
        <p>© {new Date().getFullYear()} Sanshiya Ramesh. Built with ❤️ and React.</p>
        <p className="mt-2 text-gray-400 text-xs italic">
          Experienced in building practical data automation solutions using Python,
          SQL, and VBA.
        </p>
      </footer>
    </div>
  );
}
