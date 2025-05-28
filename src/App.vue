<template>
  <div class="app-container">
    <!-- Background Effects -->
    <div class="bg-effects">
      <div class="floating-particles"></div>
      <div class="grid-overlay"></div>
    </div>

    <!-- Navigation -->
    <nav class="nav-header">
      <div class="nav-container">
        <div class="nav-brand">
          <span class="nav-logo">🚀</span>
          <span class="nav-title">aha.dev</span>
        </div>
        <div class="nav-links">
          <a 
            v-for="nav in profile.navigation" 
            :key="nav.href" 
            :href="nav.href" 
            class="nav-link"
          >
            {{ nav.text }}
          </a>
        </div>
      </div>
    </nav>

    <!-- Hero Section -->
    <header class="hero-section animate-fadeInUp">
      <div class="hero-content">
        <div class="profile-container">
          <div class="profile-image-wrapper animate-glow">
            <img
              :src="profile.personal.profileImage"
              class="profile-image"
              alt="Profile Picture"
            />
            <div class="profile-ring"></div>
          </div>
        </div>
        <div class="hero-text">
          <h1 class="hero-name">{{ profile.personal.name }}</h1>
          <p class="hero-title">{{ profile.personal.title }}</p>
          <p class="hero-subtitle">{{ profile.personal.subtitle }}</p>
          <div class="hero-stats">
            <div 
              v-for="stat in profile.stats" 
              :key="stat.label"
              class="stat-item"
            >
              <span class="stat-number">{{ stat.number }}</span>
              <span class="stat-label">{{ stat.label }}</span>
            </div>
          </div>
        </div>
      </div>
    </header>

    <!-- Main Content -->
    <main class="main-content">
      <!-- About Section -->
      <section id="about" class="content-section animate-fadeInUp">
        <div class="section-header">
          <h2 class="section-title">
            <span class="section-icon">👨‍💻</span>
            About Me
          </h2>
        </div>
        <div class="section-content">
          <div class="about-grid">
            <div class="about-text">
              <p 
                v-for="description in profile.about.descriptions" 
                :key="description.substring(0, 20)"
                class="about-description"
              >
                {{ description }}
              </p>
            </div>
            <div class="about-skills">
              <h3 class="skills-title">核心技能</h3>
              <div class="skills-grid">
                <div 
                  v-for="skill in profile.about.skills" 
                  :key="skill.name"
                  class="skill-item"
                >
                  <span class="skill-icon">{{ skill.icon }}</span>
                  <span class="skill-name">{{ skill.name }}</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <!-- Experience Section -->
      <section id="experience" class="content-section animate-fadeInUp">
        <div class="section-header">
          <h2 class="section-title">
            <span class="section-icon">💼</span>
            Professional Experience
          </h2>
        </div>
        <div class="section-content">
          <div class="experience-timeline">
            <div 
              v-for="exp in profile.experience" 
              :key="exp.title + exp.company"
              class="timeline-item"
            >
              <div class="timeline-marker"></div>
              <div class="timeline-content">
                <h3 class="timeline-title">{{ exp.title }}</h3>
                <p class="timeline-company">{{ exp.company }}</p>
                <p class="timeline-period">{{ exp.period }}</p>
                <p class="timeline-description">{{ exp.description }}</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <!-- Publications Section -->
      <section class="content-section animate-fadeInUp">
        <div class="section-header">
          <h2 class="section-title">
            <span class="section-icon">📚</span>
            Publications & Research
          </h2>
        </div>
        <div class="section-content">
          <div class="publications-grid">
            <div 
              v-for="pub in profile.publications" 
              :key="pub.title"
              :class="['publication-item', { 'featured': pub.featured }]"
            >
              <div class="publication-header">
                <span class="publication-type">{{ pub.type }}</span>
                <span class="publication-year">{{ pub.year }}</span>
              </div>
              <h3 class="publication-title">
                <a v-if="pub.url" :href="pub.url">{{ pub.title }}</a>
                <span v-else>{{ pub.title }}</span>
              </h3>
              <p v-if="pub.venue" class="publication-venue">{{ pub.venue }}</p>
              <p v-if="pub.description" class="publication-description">{{ pub.description }}</p>
            </div>
          </div>
        </div>
      </section>

      <!-- Patents Section -->
      <section class="content-section animate-fadeInUp">
        <div class="section-header">
          <h2 class="section-title">
            <span class="section-icon">🔬</span>
            Patents & Innovations
          </h2>
        </div>
        <div class="section-content">
          <div class="patents-grid">
            <div 
              v-for="patent in profile.patents" 
              :key="patent.number"
              class="patent-item"
            >
              <div class="patent-number">{{ patent.number }}</div>
              <h3 class="patent-title">{{ patent.title }}</h3>
              <p class="patent-description">{{ patent.description }}</p>
            </div>
          </div>
        </div>
      </section>

      <!-- Travel Section -->
      <section class="content-section animate-fadeInUp">
        <div class="section-header">
          <h2 class="section-title">
            <span class="section-icon">✈️</span>
            Travel & Adventures
          </h2>
        </div>
        <div class="section-content">
          <div class="travel-timeline">
            <div 
              v-for="travel in profile.travels" 
              :key="travel.year + travel.destination"
              class="travel-item"
            >
              <div class="travel-year">{{ travel.year }}</div>
              <div class="travel-destination">
                <a v-if="travel.url" :href="travel.url">{{ travel.destination }}</a>
                <span v-else>{{ travel.destination }}</span>
              </div>
              <div class="travel-flag">{{ travel.flag }}</div>
            </div>
          </div>
        </div>
      </section>

      <!-- Contact Section -->
      <section id="contact" class="content-section animate-fadeInUp">
        <div class="section-header">
          <h2 class="section-title">
            <span class="section-icon">📧</span>
            Let's Connect
          </h2>
        </div>
        <div class="section-content">
          <div class="contact-container">
            <div class="contact-info">
              <p class="contact-description">{{ profile.contact.description }}</p>
              <div class="contact-methods">
                <div 
                  v-for="method in profile.contact.methods" 
                  :key="method.label"
                  class="contact-item"
                >
                  <span class="contact-icon">{{ method.icon }}</span>
                  <a :href="method.url" class="contact-link">{{ method.text }}</a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>

    <!-- Footer -->
    <footer class="footer">
      <div class="footer-content">
        <p class="footer-text">
          &copy; 2025 {{ profile.personal.name }} ({{ profile.personal.englishName }}). Crafted with ❤️ and lots of ☕
        </p>
        <div class="footer-links">
          <a 
            v-for="nav in profile.navigation" 
            :key="nav.href" 
            :href="nav.href" 
            class="footer-link"
          >
            {{ nav.text }}
          </a>
        </div>
      </div>
    </footer>
  </div>
</template>

<script>
import profileData from './data/profile.json';
import profileImage from './assets/aha.jpg';

export default {
  name: 'App',
  data() {
    return {
      profile: {
        ...profileData,
        personal: {
          ...profileData.personal,
          profileImage: profileImage
        }
      }
    };
  },
  mounted() {
    // Smooth scrolling for navigation links
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
      anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        if (target) {
          target.scrollIntoView({
            behavior: 'smooth',
            block: 'start'
          });
        }
      });
    });

    // Add intersection observer for animations
    const observerOptions = {
      threshold: 0.1,
      rootMargin: '0px 0px -50px 0px'
    };

    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.style.animationDelay = '0s';
          entry.target.classList.add('animate-fadeInUp');
        }
      });
    }, observerOptions);

    document.querySelectorAll('.content-section').forEach(section => {
      observer.observe(section);
    });
  }
};
</script>

<style scoped>
/* App Container */
.app-container {
  min-height: 100vh;
  position: relative;
  overflow-x: hidden;
}

/* Background Effects */
.bg-effects {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  pointer-events: none;
  z-index: -1;
}

.grid-overlay {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-image: 
    linear-gradient(rgba(57, 255, 20, 0.05) 1px, transparent 1px),
    linear-gradient(90deg, rgba(57, 255, 20, 0.05) 1px, transparent 1px);
  background-size: 50px 50px;
  animation: gridMove 20s linear infinite;
}

@keyframes gridMove {
  0% { transform: translate(0, 0); }
  100% { transform: translate(50px, 50px); }
}

.floating-particles::before,
.floating-particles::after {
  content: '';
  position: absolute;
  width: 4px;
  height: 4px;
  background: var(--accent-primary);
  border-radius: 50%;
  animation: float 6s ease-in-out infinite;
  box-shadow: 0 0 10px var(--accent-primary);
}

.floating-particles::before {
  top: 20%;
  left: 20%;
  animation-delay: -2s;
}

.floating-particles::after {
  top: 60%;
  right: 20%;
  animation-delay: -4s;
}

@keyframes float {
  0%, 100% { transform: translateY(0px) rotate(0deg); opacity: 0.3; }
  50% { transform: translateY(-20px) rotate(180deg); opacity: 1; }
}

/* Navigation */
.nav-header {
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  z-index: 1000;
  background: rgba(13, 17, 23, 0.95);
  backdrop-filter: blur(20px);
  border-bottom: 1px solid var(--border-color);
  transition: all 0.3s ease;
}

.nav-container {
  width: 80%;
  max-width: 1400px;
  margin: 0 auto;
  padding: 1rem 2rem;
  display: flex;
  justify-content: space-between;
  align-items: center;
}

.nav-brand {
  display: flex;
  align-items: center;
  gap: 0.5rem;
  font-weight: 700;
  font-size: 1.2rem;
}

.nav-logo {
  font-size: 1.5rem;
}

.nav-title {
  background: var(--accent-gradient);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
}

.nav-links {
  display: flex;
  gap: 2rem;
}

.nav-link {
  color: var(--text-secondary);
  font-weight: 500;
  transition: all 0.3s ease;
  position: relative;
}

.nav-link:hover {
  color: var(--text-primary);
  transform: translateY(-2px);
}

/* Hero Section */
.hero-section {
  min-height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 120px 2rem 4rem;
  text-align: center;
}

.hero-content {
  max-width: 800px;
  margin: 0 auto;
}

.profile-container {
  margin-bottom: 2rem;
}

.profile-image-wrapper {
  position: relative;
  display: inline-block;
  margin-bottom: 2rem;
}

.profile-image {
  width: 160px;
  height: 160px;
  border-radius: 50%;
  object-fit: cover;
  border: 4px solid var(--accent-primary);
  box-shadow: 0 0 40px rgba(0, 255, 65, 0.4);
  transition: all 0.3s ease;
}

.profile-image:hover {
  transform: scale(1.05);
  box-shadow: 0 0 60px rgba(0, 255, 65, 0.6);
}

.profile-ring {
  position: absolute;
  top: -10px;
  left: -10px;
  right: -10px;
  bottom: -10px;
  border: 2px solid transparent;
  border-radius: 50%;
  background: var(--accent-gradient);
  mask: linear-gradient(#fff 0 0) content-box, linear-gradient(#fff 0 0);
  mask-composite: exclude;
  animation: rotate 4s linear infinite;
}

@keyframes rotate {
  from { transform: rotate(0deg); }
  to { transform: rotate(360deg); }
}

.hero-name {
  font-size: clamp(2.5rem, 6vw, 4rem);
  font-weight: 700;
  margin-bottom: 1rem;
  background: var(--accent-gradient);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
}

.hero-title {
  font-size: clamp(1.2rem, 3vw, 1.5rem);
  color: var(--text-primary);
  font-weight: 600;
  margin-bottom: 0.5rem;
}

.hero-subtitle {
  font-size: clamp(1rem, 2.5vw, 1.2rem);
  color: var(--text-secondary);
  margin-bottom: 3rem;
  line-height: 1.6;
}

.hero-stats {
  display: flex;
  justify-content: center;
  gap: 3rem;
  margin-top: 3rem;
}

.stat-item {
  text-align: center;
}

.stat-number {
  display: block;
  font-size: clamp(2rem, 4vw, 3rem);
  font-weight: 700;
  background: var(--accent-gradient);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
  line-height: 1;
}

.stat-label {
  display: block;
  font-size: 0.9rem;
  color: var(--text-secondary);
  margin-top: 0.5rem;
  font-weight: 500;
}

/* Main Content */
.main-content {
  width: 100%;
  flex: 1;
  padding: 2rem 3rem 120px;
}

.content-section {
  margin-bottom: 6rem;
  opacity: 0;
  transform: translateY(30px);
  transition: all 0.6s ease;
}

.content-section.animate-fadeInUp {
  opacity: 1;
  transform: translateY(0);
}

.section-header {
  text-align: center;
  margin-bottom: 3rem;
}

.section-title {
  font-size: clamp(2rem, 4vw, 2.5rem);
  font-weight: 700;
  color: var(--text-primary);
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 1rem;
  margin-bottom: 1rem;
}

.section-icon {
  font-size: 2rem;
}

.section-content {
  background: var(--bg-card);
  backdrop-filter: blur(10px);
  border: 1px solid var(--border-color);
  border-radius: 20px;
  padding: 3rem;
  box-shadow: var(--shadow-secondary);
  transition: all 0.3s ease;
}

.section-content:hover {
  transform: translateY(-5px);
  box-shadow: var(--shadow-primary);
}

/* About Section */
.about-grid {
  display: grid;
  grid-template-columns: 2fr 1fr;
  gap: 3rem;
  align-items: start;
}

.about-description {
  font-size: 1.1rem;
  line-height: 1.8;
  color: var(--text-secondary);
  margin-bottom: 1.5rem;
}

.skills-title {
  font-size: 1.3rem;
  font-weight: 600;
  color: var(--text-primary);
  margin-bottom: 1.5rem;
  text-align: center;
}

.skills-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(120px, 1fr));
  gap: 1rem;
}

.skill-item {
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 1rem;
  background: rgba(100, 255, 218, 0.05);
  border: 1px solid var(--border-color);
  border-radius: 12px;
  transition: all 0.3s ease;
  text-align: center;
}

.skill-item:hover {
  background: rgba(57, 255, 20, 0.1);
  transform: translateY(-3px);
  box-shadow: 0 8px 25px rgba(57, 255, 20, 0.2);
}

.skill-icon {
  font-size: 1.5rem;
  margin-bottom: 0.5rem;
}

.skill-name {
  font-size: 0.9rem;
  font-weight: 500;
  color: var(--text-secondary);
}

/* Experience Timeline */
.experience-timeline {
  position: relative;
  padding-left: 2rem;
}

.experience-timeline::before {
  content: '';
  position: absolute;
  left: 0;
  top: 0;
  bottom: 0;
  width: 2px;
  background: var(--accent-gradient);
}

.timeline-item {
  position: relative;
  margin-bottom: 3rem;
  padding-left: 2rem;
}

.timeline-marker {
  position: absolute;
  left: -1.5rem;
  top: 0.5rem;
  width: 12px;
  height: 12px;
  background: var(--accent-primary);
  border-radius: 50%;
  box-shadow: 0 0 20px rgba(0, 212, 255, 0.5);
}

.timeline-title {
  font-size: 1.3rem;
  font-weight: 600;
  color: var(--text-primary);
  margin-bottom: 0.5rem;
}

.timeline-company {
  font-size: 1.1rem;
  color: var(--accent-primary);
  margin-bottom: 0.25rem;
}

.timeline-period {
  font-size: 0.9rem;
  color: var(--text-secondary);
  margin-bottom: 1rem;
  font-weight: 500;
}

.timeline-description {
  color: var(--text-secondary);
  line-height: 1.6;
}

/* Publications */
.publications-grid {
  display: grid;
  gap: 2rem;
}

.publication-item {
  padding: 2rem;
  background: rgba(0, 212, 255, 0.02);
  border: 1px solid var(--border-color);
  border-radius: 16px;
  transition: all 0.3s ease;
}

.publication-item.featured {
  background: rgba(124, 58, 237, 0.05);
  border-color: rgba(124, 58, 237, 0.3);
}

.publication-item:hover {
  transform: translateY(-3px);
  box-shadow: 0 12px 40px rgba(57, 255, 20, 0.15);
}

.publication-header {
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 1rem;
}

.publication-type {
  padding: 0.25rem 0.75rem;
  background: var(--accent-primary);
  color: var(--bg-primary);
  border-radius: 20px;
  font-size: 0.8rem;
  font-weight: 600;
}

.publication-year {
  color: var(--text-secondary);
  font-weight: 600;
}

.publication-title {
  font-size: 1.2rem;
  font-weight: 600;
  margin-bottom: 0.5rem;
}

.publication-title a {
  color: var(--text-primary);
}

.publication-venue,
.publication-description {
  color: var(--text-secondary);
  font-style: italic;
}

/* Patents */
.patents-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  gap: 2rem;
}

.patent-item {
  padding: 2rem;
  background: rgba(0, 212, 255, 0.02);
  border: 1px solid var(--border-color);
  border-radius: 16px;
  transition: all 0.3s ease;
  text-align: center;
}

.patent-item:hover {
  transform: translateY(-5px);
  box-shadow: 0 15px 40px rgba(57, 255, 20, 0.2);
  background: rgba(57, 255, 20, 0.05);
}

.patent-number {
  display: inline-block;
  padding: 0.5rem 1rem;
  background: var(--accent-gradient);
  color: white;
  border-radius: 25px;
  font-weight: 700;
  font-size: 0.9rem;
  margin-bottom: 1rem;
}

.patent-title {
  font-size: 1.1rem;
  font-weight: 600;
  color: var(--text-primary);
  margin-bottom: 0.75rem;
  line-height: 1.4;
}

.patent-description {
  color: var(--text-secondary);
  font-size: 0.95rem;
  line-height: 1.5;
}

/* Travel Timeline */
.travel-timeline {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
  gap: 1.5rem;
}

.travel-item {
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 1.5rem;
  background: rgba(100, 255, 218, 0.02);
  border: 1px solid var(--border-color);
  border-radius: 12px;
  transition: all 0.3s ease;
}

.travel-item:hover {
  transform: translateY(-3px);
  background: rgba(57, 255, 20, 0.05);
  box-shadow: 0 8px 25px rgba(57, 255, 20, 0.15);
}

.travel-year {
  font-weight: 700;
  color: var(--accent-primary);
  font-size: 1rem;
}

.travel-destination {
  flex: 1;
  margin: 0 1rem;
  color: var(--text-secondary);
  font-weight: 500;
}

.travel-destination a {
  color: var(--text-primary);
}

.travel-flag {
  font-size: 1.2rem;
}

/* Contact */
.contact-container {
  text-align: center;
}

.contact-description {
  font-size: 1.2rem;
  color: var(--text-secondary);
  margin-bottom: 2.5rem;
  line-height: 1.6;
}

.contact-methods {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
  gap: 1.5rem;
}

.contact-item {
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 1rem;
  padding: 1.5rem;
  background: rgba(0, 212, 255, 0.02);
  border: 1px solid var(--border-color);
  border-radius: 12px;
  transition: all 0.3s ease;
}

.contact-item:hover {
  transform: translateY(-3px);
  background: rgba(57, 255, 20, 0.08);
  box-shadow: 0 10px 30px rgba(57, 255, 20, 0.2);
}

.contact-icon {
  font-size: 1.3rem;
}

.contact-link {
  color: var(--text-primary);
  font-weight: 500;
  font-size: 1rem;
}

/* Footer */
.footer {
  position: fixed;
  bottom: 0;
  left: 0;
  right: 0;
  z-index: 1000;
  background: rgba(13, 17, 23, 0.95);
  backdrop-filter: blur(20px);
  border-top: 1px solid var(--border-color);
  padding: 1.5rem 0;
}

.footer-content {
  width: 80%;
  max-width: 1400px;
  margin: 0 auto;
  padding: 0 2rem;
  display: flex;
  justify-content: space-between;
  align-items: center;
  flex-wrap: wrap;
  gap: 1rem;
}

.footer-text {
  color: var(--text-secondary);
  font-size: 0.95rem;
}

.footer-links {
  display: flex;
  gap: 2rem;
}

.footer-link {
  color: var(--text-secondary);
  font-size: 0.9rem;
  transition: color 0.3s ease;
}

.footer-link:hover {
  color: var(--accent-primary);
}

/* Responsive Design */
@media (max-width: 768px) {
  #app {
    width: 95%;
  }
  
  .nav-container {
    width: 95%;
    padding: 1rem;
  }
  
  .nav-links {
    display: none;
  }
  
  .hero-section {
    padding: 100px 1rem 2rem;
  }
  
  .hero-stats {
    flex-direction: column;
    gap: 2rem;
  }
  
  .main-content {
    padding: 1rem 1rem 120px;
  }
  
  .footer-content {
    width: 95%;
    padding: 0 1rem;
  }
  
  .section-content {
    padding: 2rem;
  }
  
  .about-grid {
    grid-template-columns: 1fr;
    gap: 2rem;
  }
  
  .skills-grid {
    grid-template-columns: repeat(2, 1fr);
  }
  
  .patents-grid {
    grid-template-columns: 1fr;
  }
  
  .travel-timeline {
    grid-template-columns: 1fr;
  }
  
  .contact-methods {
    grid-template-columns: 1fr;
  }
  
  .footer-content {
    flex-direction: column;
    text-align: center;
  }
}

@media (max-width: 480px) {
  #app {
    width: 100%;
  }
  
  .nav-container {
    width: 100%;
    padding: 0.75rem;
  }
  
  .footer-content {
    width: 100%;
    padding: 0 0.75rem;
  }
  
  .main-content {
    padding: 1rem 0.75rem 120px;
  }
  
  .profile-image {
    width: 120px;
    height: 120px;
  }
  
  .section-title {
    flex-direction: column;
    gap: 0.5rem;
  }
  
  .section-content {
    padding: 1.5rem;
  }
  
  .skills-grid {
    grid-template-columns: 1fr;
  }
  
  .travel-item {
    flex-direction: column;
    gap: 0.5rem;
    text-align: center;
  }
}
</style>
