<template>
  <div class="paper-layout">
    <header class="paper-header">
      <p class="kicker">Personal Website</p>
      <h1>{{ profile.personal.name }} ({{ profile.personal.englishName }})</h1>
      <p class="subtitle">{{ profile.personal.title }}</p>
      <p class="subtitle muted">{{ profile.personal.subtitle }}</p>
      <nav class="top-nav">
        <a v-for="nav in profile.navigation" :key="nav.href" :href="nav.href">{{ nav.text }}</a>
      </nav>
    </header>

    <main>
      <section class="paper-section hero-section">
        <div class="hero-grid">
          <img :src="profile.personal.profileImage" alt="Profile photo" class="profile-image" />
          <div>
            <h2 class="section-title">Abstract</h2>
            <p class="body-text">This page is generated from <code>data.md</code>. Data is transformed at build time and rendered in a simplified IEEE-style layout.</p>
            <ul class="stats-list">
              <li v-for="stat in profile.stats" :key="stat.label"><strong>{{ stat.number }}</strong> {{ stat.label }}</li>
            </ul>
          </div>
        </div>
      </section>

      <AboutSection :about="profile.about" />
      <ExperienceSection :experience="profile.experience" />
      <PublicationsSection :publications="profile.publications" />
      <PatentsSection :patents="profile.patents" />
      <LifestyleSection :lifestyle="profile.lifestyle" />
      <ContactSection :contact="profile.contact" />
      <SourcesSection :sources="profile.sources" />
    </main>

    <footer class="paper-footer">
      <p>Last verified: {{ profile.meta.last_verified }} | Maintainer: {{ profile.meta.maintainer }}</p>
    </footer>
  </div>
</template>

<script setup>
import { useProfileData } from './composables/useProfileData';
import AboutSection from './components/sections/AboutSection.vue';
import ExperienceSection from './components/sections/ExperienceSection.vue';
import PublicationsSection from './components/sections/PublicationsSection.vue';
import PatentsSection from './components/sections/PatentsSection.vue';
import ContactSection from './components/sections/ContactSection.vue';
import SourcesSection from './components/sections/SourcesSection.vue';
import LifestyleSection from './components/sections/LifestyleSection.vue';

const profile = useProfileData();
</script>
