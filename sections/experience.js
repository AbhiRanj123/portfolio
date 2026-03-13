/* sections/experience.js — Experience & Education HTML template */
var ExperienceHTML = `
  <section class="section section-alt" id="experience">
    <div class="container">
      <div class="section-header">
        <span class="section-tag">My Journey</span>
        <h2 class="section-title">Experience &amp; Education</h2>
      </div>

      <div class="timeline-tabs">
        <button class="tab-btn active" data-tab="work">Work</button>
        <button class="tab-btn" data-tab="education">Education</button>
        <button class="tab-btn" data-tab="activities">Activities</button>
      </div>

      <!-- Work Timeline -->
      <div class="timeline" id="tab-work">
        <div class="timeline-item">
          <div class="timeline-dot"></div>
          <div class="timeline-content">
            <span class="timeline-date">Jul 2025 – Present</span>
            <h3>Software Developer I</h3>
            <h4>SAP Labs India — Bangalore</h4>
            <p>Developing SAP Datasphere Replication Flow UI — a core enterprise product powering
               large-scale data replication workflows. Resolved 15+ production issues, reducing
               resolution time by 30%. Delivered UI feature enhancements and ensured 99.9%
               feature stability. Automated internal bug monitoring pipeline using Microsoft
               Power Automate.</p>
            <div class="timeline-tags">
              <span class="tag">TypeScript</span>
              <span class="tag">SAP UI5</span>
              <span class="tag">Node.js</span>
              <span class="tag">Cypress</span>
              <span class="tag">SQL</span>
              <span class="tag">Mocha</span>
            </div>
          </div>
        </div>
        <div class="timeline-item">
          <div class="timeline-dot"></div>
          <div class="timeline-content">
            <span class="timeline-date">Jan 2025 – Jul 2025</span>
            <h3>Software Developer Intern</h3>
            <h4>SAP Labs India — Bangalore</h4>
            <p>Built an internal Award Nominations Portal using the MERN stack, used by 500+
               employees. Delivered critical bug fixes and feature improvements in Datasphere
               Replication Flow UI. Collaborated with cross-functional teams in Agile cycles.</p>
            <div class="timeline-tags">
              <span class="tag">SAP UI5</span>
              <span class="tag">Node.js</span>
              <span class="tag">TypeScript</span>
              <span class="tag">Cypress</span>
              <span class="tag">Mocha</span>
            </div>
          </div>
        </div>
        <div class="timeline-item">
          <div class="timeline-dot"></div>
          <div class="timeline-content">
            <span class="timeline-date">May 2024 – Jul 2024</span>
            <h3>Software Developer Intern</h3>
            <h4>SAP Labs India — Bangalore</h4>
            <p>Generated 100+ test datasets via advanced JavaScript scripting. Conducted
               performance testing with Gatling. Identified and optimized 4 major performance
               bottlenecks. Integrated performance tests in CI/CD pipeline, reducing release
               time by 15%.</p>
            <div class="timeline-tags">
              <span class="tag">Java</span>
              <span class="tag">Gatling</span>
              <span class="tag">JavaScript</span>
              <span class="tag">Python</span>
              <span class="tag">SAP Signavio</span>
            </div>
          </div>
        </div>
      </div>

      <!-- Education Timeline -->
      <div class="timeline hidden" id="tab-education">
        <div class="timeline-item">
          <div class="timeline-dot"></div>
          <div class="timeline-content">
            <span class="timeline-date">Dec 2021 – May 2025</span>
            <h3>Bachelor of Technology — Computer Science &amp; Engineering</h3>
            <h4>National Institute of Technology Silchar</h4>
            <p>Graduated with distinction. Focused on algorithms, distributed systems, machine
               learning, and software engineering. Active member of the ML Club and tech societies.
               Completed B.Tech thesis on feature selection for Human Activity Recognition.</p>
            <div class="timeline-tags">
              <span class="tag">CGPA: 8.8 / 10</span>
              <span class="tag">NIT Silchar</span>
            </div>
          </div>
        </div>
        <div class="timeline-item">
          <div class="timeline-dot"></div>
          <div class="timeline-content">
            <span class="timeline-date">Jun 2018 – June 2020</span>
            <h3>Higher Secondary — Science (Class XII)</h3>
            <h4>Ramakrishna Mission Vidyapith, Purulia</h4>
            <p>Completed Higher Secondary education with a focus on Physics, Chemistry,
               and Mathematics. Strong academic foundation that led to securing admission
               at NIT Silchar.</p>
            <div class="timeline-tags">
              <span class="tag">Result: 93.2%</span>
              <span class="tag">Science Stream</span>
              <span class="tag">WBCHSE Board</span>
            </div>
          </div>
        </div>
        <div class="timeline-item">
          <div class="timeline-dot"></div>
          <div class="timeline-content">
            <span class="timeline-date">Jan 2012 – May 2018</span>
            <h3>Secondary — Science (Class X)</h3>
            <h4>Ramakrishna Mission Vidyapith, Purulia</h4>
            <p>Completed Secondary education with a focus on all subjects including Mathematics, Physical Science, Life Science, History, Geography,and Physical Education. Represented school at State Level Declamation Competition, participated in various Olympiads, tech events. Won several medals in Annual Sports and Cultural events.</p>
            <div class="timeline-tags">
              <span class="tag">Result: 94.3%</span>
              <span class="tag">Science Stream</span>
              <span class="tag">WBBSE Board</span>
            </div>
          </div>
        </div>
      </div>

      <!-- Activities Timeline -->
      <div class="timeline hidden" id="tab-activities">
        <div class="timeline-item">
          <div class="timeline-dot"></div>
          <div class="timeline-content">
            <span class="timeline-date">Jul 2024 – Jul 2025</span>
            <h3>Mentor (ML Club Lead)</h3>
            <h4>Machine Learning Club, NIT Silchar</h4>
            <p>Mentored 50+ students in Machine Learning, Deep Learning, and Neural Networks.
               Organised workshops, reading groups, and project reviews. Guided juniors on
               ML research projects and competition preparation.</p>
            <div class="timeline-tags">
              <span class="tag">ML</span>
              <span class="tag">Deep Learning</span>
              <span class="tag">Mentorship</span>
            </div>
          </div>
        </div>
        <div class="timeline-item">
          <div class="timeline-dot"></div>
          <div class="timeline-content">
            <span class="timeline-date">Aug 2023 – Aug 2024</span>
            <h3>Moderator</h3>
            <h4>Machine Learning Club, NIT Silchar</h4>
            <p>Moderated club sessions on ML, Deep Learning, and Web Development.
               Coordinated inter-club activities and curated learning resources for members.</p>
            <div class="timeline-tags">
              <span class="tag">ML</span>
              <span class="tag">Web Development</span>
            </div>
          </div>
        </div>
        <div class="timeline-item">
          <div class="timeline-dot"></div>
          <div class="timeline-content">
            <span class="timeline-date">Aug 2023 – Jul 2024</span>
            <h3>Hindi Club Head &amp; Technical Head</h3>
            <h4>Illuminits — Literary, Publication &amp; Fine Arts Society, NIT Silchar</h4>
            <p>Led the Hindi Club and served as Technical Head (Dec 2023 – May 2024),
               building the society's website using React.js and Vite. Managed content
               publication and coordinated literary events.</p>
            <div class="timeline-tags">
              <span class="tag">React.js</span>
              <span class="tag">Vite</span>
              <span class="tag">Git</span>
              <span class="tag">Leadership</span>
            </div>
          </div>
        </div>
        <div class="timeline-item">
          <div class="timeline-dot"></div>
          <div class="timeline-content">
            <span class="timeline-date">Dec 2023 – Feb 2024</span>
            <h3>Co-Head, PR Team</h3>
            <h4>Tecnoesis — Annual Tech Fest, NIT Silchar</h4>
            <p>Co-led the Public Relations team for Tecnoesis, NIT Silchar's flagship annual
               technical festival. Managed outreach, sponsorship communications, and
               promotional campaigns.</p>
            <div class="timeline-tags">
              <span class="tag">PR</span>
              <span class="tag">Event Management</span>
            </div>
          </div>
        </div>
        <div class="timeline-item">
          <div class="timeline-dot"></div>
          <div class="timeline-content">
            <span class="timeline-date">Sep 2022 – Aug 2023</span>
            <h3>Executive Member</h3>
            <h4>Machine Learning Club, NIT Silchar</h4>
            <p>Active executive member contributing to club activities in ML, Deep Learning,
               Neural Networks, and Web Development. Assisted in organising workshops
               and learning sessions for the club community.</p>
            <div class="timeline-tags">
              <span class="tag">ML</span>
              <span class="tag">Neural Networks</span>
            </div>
          </div>
        </div>
        <div class="timeline-item">
          <div class="timeline-dot"></div>
          <div class="timeline-content">
            <span class="timeline-date">Oct 2022 – Jun 2023</span>
            <h3>Technical Associate</h3>
            <h4>E-Cell, NIT Silchar</h4>
            <p>Contributed as a Technical Associate to the Entrepreneurship Cell at NIT Silchar,
               supporting tech initiatives and events promoting student entrepreneurship.</p>
            <div class="timeline-tags">
              <span class="tag">Entrepreneurship</span>
              <span class="tag">Tech</span>
            </div>
          </div>
        </div>
      </div>

    </div>
  </section>
`;
