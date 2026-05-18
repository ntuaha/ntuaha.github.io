<template>
  <main class="showcase-page" :style="{ '--showcase-image': `url(${selected.image})` }">
    <div class="showcase-backdrop" aria-hidden="true"></div>
    <header class="showcase-topbar">
      <a class="showcase-logo" href="#">aha</a>
      <nav class="showcase-nav" aria-label="Showcase navigation">
        <a href="#">Home</a>
        <a href="#showcase" aria-current="page">Showcase</a>
      </nav>
    </header>

    <section class="showcase-hero" aria-live="polite">
      <p class="showcase-kicker">Featured Product</p>
      <h1>{{ selected.title }}</h1>
      <p class="showcase-description">{{ selected.description }}</p>
      <ul class="showcase-tags" aria-label="Product tags">
        <li v-for="tag in selected.tags" :key="tag">{{ tag }}</li>
      </ul>
      <a class="watch-button" :href="selected.url" target="_blank" rel="noopener noreferrer">
        <span aria-hidden="true">▶</span>
        Watch
      </a>
    </section>

    <section class="showcase-rail" aria-label="Websites">
      <button
        v-for="site in sites"
        :key="site.id"
        class="showcase-card"
        :class="{ active: site.id === selected.id }"
        type="button"
        @click="selectedId = site.id"
      >
        <img :src="site.image" :alt="`${site.title} screenshot`" />
        <span>{{ site.title }}</span>
      </button>
    </section>
  </main>
</template>

<script setup>
import { computed, ref } from 'vue';
import stockImage from '../assets/showcase/stock.jpg';
import vicImage from '../assets/showcase/vic.jpg';
import aiOverviewImage from '../assets/showcase/ai-overview.jpg';
import competitionImage from '../assets/showcase/competition.jpg';
import travelImage from '../assets/showcase/travel.jpg';

const sites = [
  {
    id: 'stock',
    title: '投顧筆記',
    description: '投顧研究報告分析桌，支援 PDF 轉 Markdown、LINE 摘要與 Blog 草稿產生。',
    url: 'https://stock.aha.taipei/',
    image: stockImage,
    tags: ['PDF', 'Markdown', 'LINE', 'Blog']
  },
  {
    id: 'vic',
    title: '虛擬投信研究員',
    description: '建立可追溯來源的文件知識庫，協助產生個股與主題研究報告。',
    url: 'https://vic.aha.taipei/#/history',
    image: vicImage,
    tags: ['RAG', 'Research', 'Knowledge Base']
  },
  {
    id: 'ai-overview',
    title: 'AI Overview Console',
    description: '追蹤搜尋語句、產品線與 AI Overview 提及率，整合來源連結與聲量分析。',
    url: 'https://ai-overview.aha.taipei/login',
    image: aiOverviewImage,
    tags: ['Search Intelligence', 'Dashboard', 'Analytics']
  },
  {
    id: 'competition',
    title: 'Agent Competition 2026',
    description: '公開排行榜與投資曝險看板，呈現代理人競賽的每日資產與持股狀態。',
    url: 'https://competition-2026.aha.taipei/',
    image: competitionImage,
    tags: ['Leaderboard', 'Agents', 'Trading']
  },
  {
    id: 'travel',
    title: 'AHA Travel Planner',
    description: '旅遊規劃工具，整理行程、住宿與目的地資訊，讓旅程決策集中管理。',
    url: 'https://travel.aha.taipei/login',
    image: travelImage,
    tags: ['Travel', 'Planner', 'Itinerary']
  }
];

const selectedId = ref(sites[0].id);
const selected = computed(() => sites.find((site) => site.id === selectedId.value) ?? sites[0]);
</script>
