<template>
  <main
    class="showcase-page"
    :style="{
      '--showcase-image': `url(${selected.image})`,
      '--showcase-accent': selected.accent,
      '--showcase-focus': selected.focusPosition
    }"
  >
    <div class="showcase-backdrop" aria-hidden="true"></div>
    <header class="showcase-topbar">
      <a class="showcase-logo" href="#">aha</a>
      <nav class="showcase-nav" aria-label="Showcase navigation">
        <a href="#">Home</a>
        <a href="#showcase" aria-current="page">Showcase</a>
      </nav>
    </header>

    <section class="showcase-hero" aria-live="polite">
      <p class="showcase-kicker">{{ selected.category }}</p>
      <h1>{{ selected.title }}</h1>
      <p class="showcase-meta">{{ selected.kind }} · {{ selected.imageMode }}</p>
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
        :aria-pressed="site.id === selected.id"
        type="button"
        @click="selectedId = site.id"
      >
        <img :src="site.image" :alt="`${site.title} hero artwork`" />
        <span class="showcase-card-kind">{{ site.kind }}</span>
        <span class="showcase-card-title">{{ site.title }}</span>
      </button>
    </section>
  </main>
</template>

<script setup>
import { computed, ref } from 'vue';
import stockImage from '../assets/showcase/stock-hero.jpg';
import vicImage from '../assets/showcase/vic-hero.jpg';
import aiOverviewImage from '../assets/showcase/ai-overview-hero.jpg';
import competitionImage from '../assets/showcase/competition-hero.jpg';
import travelImage from '../assets/showcase/travel-hero.jpg';
import govcashImage from '../assets/showcase/govcash-hero.jpg';
import twfsImage from '../assets/showcase/twfs-hero.jpg';
import ithomeImage from '../assets/showcase/ithome-report-hero.jpg';
import insideImage from '../assets/showcase/inside-report-hero.jpg';
import businessweeklyImage from '../assets/showcase/businessweekly-report-hero.jpg';

const sites = [
  {
    id: 'stock',
    kind: 'Product',
    category: 'Featured Product',
    imageMode: 'Generated hero',
    title: '投顧筆記',
    description: '投顧研究報告分析桌，支援 PDF 轉 Markdown、LINE 摘要與 Blog 草稿產生。',
    url: 'https://stock.aha.taipei/',
    image: stockImage,
    accent: '#d7a84f',
    focusPosition: '62% center',
    tags: ['PDF', 'Markdown', 'LINE', 'Blog']
  },
  {
    id: 'vic',
    kind: 'Product',
    category: 'Featured Product',
    imageMode: 'Generated hero',
    title: '虛擬投信研究員',
    description: '建立可追溯來源的文件知識庫，協助產生個股與主題研究報告。',
    url: 'https://vic.aha.taipei/#/history',
    image: vicImage,
    accent: '#c49a62',
    focusPosition: '62% center',
    tags: ['RAG', 'Research', 'Knowledge Base']
  },
  {
    id: 'ai-overview',
    kind: 'Product',
    category: 'Featured Product',
    imageMode: 'Generated hero',
    title: 'AI Overview Console',
    description: '追蹤搜尋語句、產品線與 AI Overview 提及率，整合來源連結與聲量分析。',
    url: 'https://ai-overview.aha.taipei/login',
    image: aiOverviewImage,
    accent: '#34d1ff',
    focusPosition: '62% center',
    tags: ['Search Intelligence', 'Dashboard', 'Analytics']
  },
  {
    id: 'competition',
    kind: 'Product',
    category: 'Featured Product',
    imageMode: 'Generated hero',
    title: 'Agent Competition 2026',
    description: '公開排行榜與投資曝險看板，呈現代理人競賽的每日資產與持股狀態。',
    url: 'https://competition-2026.aha.taipei/',
    image: competitionImage,
    accent: '#64f26a',
    focusPosition: '60% center',
    tags: ['Leaderboard', 'Agents', 'Trading']
  },
  {
    id: 'travel',
    kind: 'Product',
    category: 'Featured Product',
    imageMode: 'Generated hero',
    title: 'AHA Travel Planner',
    description: '旅遊規劃工具，整理行程、住宿與目的地資訊，讓旅程決策集中管理。',
    url: 'https://travel.aha.taipei/login',
    image: travelImage,
    accent: '#2ba78a',
    focusPosition: '62% center',
    tags: ['Travel', 'Planner', 'Itinerary']
  },
  {
    id: 'govcash',
    kind: 'Data Work',
    category: 'Featured Data Project',
    imageMode: 'Generated hero',
    title: '政治獻金',
    description: '以公共資料視覺化各屆選舉政治獻金，快速比較收入、支出與候選人資金分布。',
    url: 'https://ntuaha.github.io/GovCash/pay_and_rec.html',
    image: govcashImage,
    accent: '#49b8ad',
    focusPosition: '60% center',
    tags: ['Open Data', 'Election', 'Visualization']
  },
  {
    id: 'twfs',
    kind: 'Data Work',
    category: 'Featured Data Project',
    imageMode: 'Generated hero',
    title: '信用卡資訊',
    description: '台灣金融統計資料儀表板，整合銀行、信用卡與金融指標查詢，支援逐月與逐機構檢視。',
    url: 'https://ntuaha.github.io/TWFS/index.html',
    image: twfsImage,
    accent: '#46c79a',
    focusPosition: '62% center',
    tags: ['Finance', 'Dashboard', 'Credit Card']
  },
  {
    id: 'ithome-report',
    kind: 'Report',
    category: 'Featured Coverage',
    imageMode: 'Article image',
    title: 'iThome 金融 GAI 先行者',
    description: 'iThome 報導玉山金控從單一生成式 AI 應用邁向規模化平台與自建開發框架的經驗。',
    url: 'https://www.ithome.com.tw/news/165551',
    image: ithomeImage,
    accent: '#d94444',
    focusPosition: '54% center',
    tags: ['Media', 'GenAI', 'Framework']
  },
  {
    id: 'inside-report',
    kind: 'Report',
    category: 'Featured Coverage',
    imageMode: 'Article image',
    title: 'INSIDE GitHub Copilot 實戰成效',
    description: 'INSIDE 報導企業導入 GitHub Copilot 的量化經驗，以及生成式 AI 寫 code 的成效評估。',
    url: 'https://www.inside.com.tw/feature/2025-generative-ai/38540-e-sun-bank-github-copilot-implementation-results-and-performance',
    image: insideImage,
    accent: '#ff6d3d',
    focusPosition: '52% center',
    tags: ['Media', 'Copilot', 'Engineering']
  },
  {
    id: 'businessweekly-report',
    kind: 'Report',
    category: 'Featured Coverage',
    imageMode: 'Article image',
    title: '商周 AI 轉型報導',
    description: '商業周刊報導金融業推動 AI 與數位轉型的實務觀察，收錄個人相關訪談與案例脈絡。',
    url: 'https://www.businessweekly.com.tw/business/indep/1004824',
    image: businessweeklyImage,
    accent: '#d8202a',
    focusPosition: '52% center',
    tags: ['Media', 'AI', 'Transformation']
  }
];

const selectedId = ref(sites[0].id);
const selected = computed(() => sites.find((site) => site.id === selectedId.value) ?? sites[0]);
</script>
