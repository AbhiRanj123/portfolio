/* sections/projects.js — Projects HTML template */
var ProjectsHTML = `
  <section class="section" id="projects">
    <div class="container">
      <div class="section-header">
        <span class="section-tag">What I've built</span>
        <h2 class="section-title">Featured Projects</h2>
      </div>

      <div class="projects-filters">
        <button class="filter-btn active" data-filter="all">All</button>
        <button class="filter-btn" data-filter="web">Web</button>
        <button class="filter-btn" data-filter="ml">AI / ML</button>
      </div>

      <div class="projects-grid">

        <div class="project-card" data-category="web">
          <div class="project-image">
            <div class="project-placeholder"><i class="fas fa-magic"></i></div>
            <div class="project-overlay">
              <a href="#" class="project-icon-link" title="Source Code"><i class="fab fa-github"></i></a>
            </div>
          </div>
          <div class="project-body">
            <div class="project-tags">
              <span class="tag">React.js</span>
              <span class="tag">Node.js</span>
              <span class="tag">Express.js</span>
              <span class="tag">MongoDB</span>
              <span class="tag">ClipDrop API</span>
              <span class="tag">Razorpay</span>
            </div>
            <h3 class="project-title">ArtifyAI — AI Image Generator SaaS</h3>
            <p class="project-desc">
              Production-ready SaaS platform with secure auth, real-time subscriptions, and a
              scalable backend handling API requests. Integrated Razorpay
              payments, ClipDrop AI for text-to-image generation,
              and optimized REST APIs reducing load times by <strong>35%</strong> with caching
              cutting redundant calls by <strong>40%</strong>.
            </p>
            <div class="project-links">
              <a href="https://github.com/AbhiRanj123/text_to_image_AI_generator" class="btn-text" target="_blank"><i class="fab fa-github"></i> Code</a>
            </div>
          </div>
        </div>

        <div class="project-card" data-category="ml">
          <div class="project-image">
            <div class="project-placeholder"><i class="fas fa-running"></i></div>
            <div class="project-overlay">
              <a href="#" class="project-icon-link" title="Source Code"><i class="fab fa-github"></i></a>
            </div>
          </div>
          <div class="project-body">
            <div class="project-tags">
              <span class="tag">Python</span>
              <span class="tag">Scikit-Learn</span>
              <span class="tag">NumPy</span>
              <span class="tag">Feature Selection</span>
            </div>
            <h3 class="project-title">HAR / HAPT Feature Selection</h3>
            <p class="project-desc">
              B.Tech thesis project — applied advanced feature selection algorithms (mRMR,
              ReliefF, Random Forest) to reduce the UCI HAR dataset from 561 to ~100 features
              while maintaining high classification accuracy.
            </p>
            <div class="project-links">
              <a href="https://drive.google.com/file/d/1w-XtIo-XdPjEIsZi6W-DkATbN29TS8VJ/view" class="btn-text" target="_blank"><i class="fas fa-file-alt"></i> Thesis</a>
            </div>
          </div>
        </div>

        <div class="project-card" data-category="ml">
          <div class="project-image">
            <div class="project-placeholder"><i class="fas fa-comment-alt"></i></div>
            <div class="project-overlay">
              <a href="#" class="project-icon-link" title="Source Code"><i class="fab fa-github"></i></a>
            </div>
          </div>
          <div class="project-body">
            <div class="project-tags">
              <span class="tag">Python</span>
              <span class="tag">NLP</span>
              <span class="tag">Logistic Regression</span>
              <span class="tag">TF-IDF</span>
            </div>
            <h3 class="project-title">Sentiment Analysis — NLP</h3>
            <p class="project-desc">
              NLP pipeline for sentiment classification of product reviews. Achieved 91%
              accuracy using Logistic Regression with TF-IDF vectorisation, outperforming
              Naive Bayes and SVM baselines.
            </p>
            <div class="project-links">
              <a href="https://colab.research.google.com/drive/15f8Qrkgx0jFAfR4DtCM-B4nWKNFo4nw0?usp=sharing" class="btn-text" target="_blank"><i class="fab fa-github"></i> Colab Notebook</a>
            </div>
          </div>
        </div>

      </div>

      <div class="projects-more">
        <a href="https://github.com/AbhiRanj123" class="btn btn-outline" target="_blank">
          <i class="fab fa-github"></i> View More on GitHub
        </a>
      </div>
    </div>
  </section>
`;
