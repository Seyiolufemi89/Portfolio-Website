function Resume() {
  return (
    <section className="resume-card" id="resume">
      <header className="resume-header">
        <h1>Oluwaseyi Olufemi</h1>
        <address>
          <span>Liverpool, UK</span>
          <a href="tel:+447579818179">+44 7579818179</a>
          <a href="mailto:seyiolufemi89@gmail.com">seyiolufemi89@gmail.com</a>
          <a href="https://github.com/Seyiolufemi89/">GitHub</a>
          <a href="https://linkedin.com/in/oluwaseyi-olufemi">LinkedIn</a>
        </address>
      </header>

      <div className="resume-content">
        <section className="resume-section">
          <h2>Education</h2>
          <div className="resume-entry">
            <div className="resume-entry-heading">
              <h3>Liverpool John Moores University</h3>
              <span>Liverpool, UK</span>
            </div>
            <p>Bachelor of Science in Computer Science (Second Year)</p>
            <p className="resume-date">Sep. 2025 – Expected June 2028</p>
            <p>
              <strong>Relevant coursework:</strong> Data Structures &amp;
              Algorithms, Object-Oriented Programming, Database Systems,
              Software Engineering.
            </p>
          </div>
        </section>

        <section className="resume-section">
          <h2>Technical Skills</h2>
          <ul className="resume-skill-groups">
            <li>
              <strong>Languages:</strong> Java, Python, JavaScript, SQL
              (PostgreSQL), Kotlin, HTML/CSS
            </li>
            <li>
              <strong>Frameworks &amp; Libraries:</strong> React, Node.js,
              Flask, Spring Boot, FastAPI, Pandas, NumPy, Matplotlib, JUnit,
              Material-UI
            </li>
            <li>
              <strong>Developer Tools:</strong> Git, Docker, Google Cloud
              Platform (GCP), Linux, VS Code, IntelliJ, PyCharm
            </li>
          </ul>
        </section>

        <section className="resume-section">
          <h2>Projects / Experience</h2>

          <article className="resume-entry">
            <div className="resume-entry-heading">
              <h3>SmartDocs (Document Intelligence RAG Pipeline)</h3>
              <span>Sep. 2025 – Present</span>
            </div>
            <p className="resume-tech">
              Python, Flask, React, PostgreSQL, Docker
            </p>
            <ul>
              <li>
                Needed to process large unstructured text documents efficiently
                for a full-stack web application while overcoming LLM context
                window limits and slow query speeds.
              </li>
              <li>
                Engineered a custom Retrieval-Augmented Generation (RAG)
                pipeline in Python, implementing custom text-chunking algorithms
                and vector indexing to streamline raw text ingestion into a
                PostgreSQL database.
              </li>
              <li>
                Achieved low-latency context-aware response generation served
                via a Flask REST API and a responsive React frontend, fully
                containerised with Docker for consistent multi-environment
                deployment.
              </li>
            </ul>
          </article>

          <article className="resume-entry">
            <div className="resume-entry-heading">
              <h3>Portfolio Website &amp; Local LLM (Fable)</h3>
              <span>May 2025 – Present</span>
            </div>
            <p className="resume-tech">React, Java Spring Boot</p>
            <ul>
              <li>
                Required a high-performance personal portfolio architecture
                capable of hosting interactive web components alongside a local
                machine learning interface.
              </li>
              <li>
                Architected a modular full-stack application using a Java
                Spring Boot backend to handle server-side logic and a dynamic
                React frontend for responsive UI rendering.
              </li>
              <li>
                Successfully integrated an experimental local LLM ("Fable")
                interface into the production web stack, creating a seamless
                user experience for showcasing full-stack capabilities.
              </li>
            </ul>
          </article>

          <article className="resume-entry">
            <div className="resume-entry-heading">
              <h3>Movie Database Visualisation Tool</h3>
              <span>Jan. 2026 – Apr. 2026</span>
            </div>
            <p className="resume-tech">
              Python, Pandas, Matplotlib, NumPy
            </p>
            <ul>
              <li>
                Tasked with building a collaborative, menu-driven data
                processing application to clean, aggregate, and visualize
                large-scale movie datasets within a software engineering team.
              </li>
              <li>
                Applied Object-Oriented Programming (OOP) principles in Python,
                utilizing Pandas and NumPy to execute complex data
                transformations and data cleaning pipelines.
              </li>
              <li>
                Delivered a fully operational menu-driven application capable
                of automatically rendering complex data points into clear
                graphical analytical insights using Matplotlib.
              </li>
            </ul>
          </article>
        </section>
      </div>
    </section>
  );
}

export default Resume;