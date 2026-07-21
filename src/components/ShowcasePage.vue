<template>
  <main
    class="showcase-page"
    tabindex="0"
    :style="{
      '--showcase-image': `url(${selected.image})`,
      '--showcase-accent': selected.accent,
      '--showcase-focus': selected.focusPosition
    }"
    @keydown="handleKeydown"
    @wheel.prevent="handleWheel"
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
        {{ selected.cta }}
      </a>
    </section>

    <section class="showcase-browser" :aria-label="`${activeRow.label} showcase row`">
      <nav class="showcase-topics" aria-label="Showcase topics">
        <button
          v-for="row in showcaseRows"
          :key="row.id"
          class="showcase-topic"
          :class="{ active: row.id === activeRowId }"
          :aria-pressed="row.id === activeRowId"
          type="button"
          @click="activateRow(row.id)"
        >
          {{ row.label }}
        </button>
      </nav>

      <div class="showcase-row-label" aria-live="polite">
        <span>{{ activeRow.label }}</span>
        <span>{{ activeItemIndex + 1 }} / {{ activeRow.items.length }}</span>
      </div>

      <section class="showcase-rail" :aria-label="activeRow.label">
        <button
          v-for="item in activeRow.items"
          :key="item.id"
          :ref="(element) => setCardRef(item.id, element)"
          class="showcase-card"
          :class="{ active: item.id === selected.id }"
          :aria-pressed="item.id === selected.id"
          type="button"
          @click="activateItem(item.id)"
        >
          <img :src="item.image" :alt="`${item.title} artwork`" />
          <span class="showcase-card-kind">{{ item.kind }}</span>
          <span class="showcase-card-title">{{ item.title }}</span>
        </button>
      </section>
    </section>
  </main>
</template>

<script setup>
import { computed, nextTick, ref } from 'vue';
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
import enderLiliesImage from '../assets/showcase/game-ender-lilies.jpg';
import enderMagnoliaImage from '../assets/showcase/game-ender-magnolia.jpg';
import dq7Image from '../assets/showcase/game-dq7-reimagined.jpg';
import dq11sImage from '../assets/showcase/game-dq11s.jpg';
import dq6Image from '../assets/showcase/game-dq6.jpg';
import p5rImage from '../assets/showcase/game-p5r.jpg';
import hollowKnightImage from '../assets/showcase/game-hollow-knight.jpg';
import silksongImage from '../assets/showcase/game-silksong.jpg';
import yakuza7Image from '../assets/showcase/game-yakuza7.jpg';
import ff7Image from '../assets/showcase/game-ff7-remake-rebirth.jpg';
import triangleStrategyImage from '../assets/showcase/game-triangle-strategy.jpg';
import octopathImage from '../assets/showcase/game-octopath.jpg';
import ysImage from '../assets/showcase/game-ys.jpg';
import chronoTriggerImage from '../assets/showcase/game-chrono-trigger.jpg';
import terranigmaImage from '../assets/showcase/game-terranigma.jpg';
import rockmanLegacyImage from '../assets/showcase/game-rockman-legacy.jpg';
import rockmanXLegacyImage from '../assets/showcase/game-rockman-x-legacy.jpg';
import castlevaniaAriaImage from '../assets/showcase/game-castlevania-aria.jpg';
import tuntownImage from '../assets/showcase/game-tuntown.jpg';
import nineSolsImage from '../assets/showcase/game-nine-sols.jpg';
import pragmataImage from '../assets/showcase/game-pragmata.jpg';
import halfRealImage from '../assets/showcase/reading-half-real.jpg';
import projectHailMaryImage from '../assets/showcase/reading-project-hail-mary.webp';
import corruptionLawImage from '../assets/showcase/reading-corruption-law.jpg';
import ahaInsightImage from '../assets/showcase/reading-aha-insight.jpg';

const sites = [
  {
    id: 'stock',
    kind: 'Product',
    category: 'Featured Product',
    imageMode: 'Generated hero',
    title: '投顧筆記',
    description: '投顧研究報告分析桌，支援 PDF 轉 Markdown、LINE 摘要與 Blog 草稿產生。',
    url: 'https://stock.aha.taipei/',
    cta: 'Open',
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
    cta: 'Open',
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
    cta: 'Open',
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
    cta: 'Open',
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
    cta: 'Open',
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
    cta: 'Open',
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
    cta: 'Open',
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
    cta: 'Read',
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
    cta: 'Read',
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
    cta: 'Read',
    image: businessweeklyImage,
    accent: '#d8202a',
    focusPosition: '52% center',
    tags: ['Media', 'AI', 'Transformation']
  }
];

const games = [
  {
    id: 'ender-lilies',
    kind: 'Game',
    category: 'Games',
    imageMode: 'Official art',
    title: 'Ender Lilies',
    description: '黑暗奇幻 2D 動作 RPG，在毀滅王國中探索雨之死帶來的詛咒與記憶。',
    url: 'https://en.enderlilies.com/',
    cta: 'Play',
    image: enderLiliesImage,
    accent: '#d7d7ef',
    focusPosition: 'center',
    tags: ['Metroidvania', 'Dark Fantasy', 'Action RPG']
  },
  {
    id: 'ender-magnolia',
    kind: 'Game',
    category: 'Games',
    imageMode: 'Official art',
    title: 'Ender Magnolia',
    description: 'ENDER LILIES 續作，以煙霧籠罩的魔法工業世界展開探索與戰鬥。',
    url: 'https://endermagnolia.com/en/',
    cta: 'Play',
    image: enderMagnoliaImage,
    accent: '#9fd8ff',
    focusPosition: 'center',
    tags: ['Metroidvania', 'Action RPG', 'Fantasy']
  },
  {
    id: 'dq7-reimagined',
    kind: 'Game',
    category: 'Games',
    imageMode: 'Official art',
    title: 'DQ 7 Reimagined',
    description: '以現代視覺重新想像《勇者鬥惡龍 VII》，在碎片與島嶼中拼回被遺忘的世界。',
    url: 'https://www.dragonquest.jp/dq7r/',
    cta: 'Play',
    image: dq7Image,
    accent: '#79c7ff',
    focusPosition: '50% center',
    tags: ['JRPG', 'Dragon Quest', 'Remake']
  },
  {
    id: 'dq11s',
    kind: 'Game',
    category: 'Games',
    imageMode: 'Official art',
    title: 'DQ 11S',
    description: '王道 JRPG 的現代代表作，兼具 3D 與 2D 模式、角色劇情與完整冒險節奏。',
    url: 'https://www.dq11.jp/s/pf/index.html',
    cta: 'Play',
    image: dq11sImage,
    accent: '#65b7ff',
    focusPosition: 'center',
    tags: ['JRPG', 'Dragon Quest', 'Adventure']
  },
  {
    id: 'dq6',
    kind: 'Game',
    category: 'Games',
    imageMode: 'Official art',
    title: 'DQ 6',
    description: '《勇者鬥惡龍 VI 幻之大地》以現實與夢境雙世界展開壯大的自我探索。',
    url: 'https://www.jp.square-enix.com/game/detail/dq6/',
    cta: 'Play',
    image: dq6Image,
    accent: '#ffcf5f',
    focusPosition: 'center',
    tags: ['JRPG', 'Dragon Quest', 'Classic']
  },
  {
    id: 'p5r',
    kind: 'Game',
    category: 'Games',
    imageMode: 'Official art',
    title: 'P5R',
    description: '白天經營校園生活，夜晚化身心之怪盜，兼具社群養成與迷宮攻略。',
    url: 'https://persona.atlus.com/p5r/',
    cta: 'Play',
    image: p5rImage,
    accent: '#ff2f2f',
    focusPosition: 'center',
    tags: ['JRPG', 'Persona', 'Stylish']
  },
  {
    id: 'hollow-knight',
    kind: 'Game',
    category: 'Games',
    imageMode: 'Official art',
    title: 'Hollow Knight',
    description: '在聖巢地下王國探索、戰鬥與迷失，以精密關卡與手繪美術構成的獨立經典。',
    url: 'https://www.hollowknight.com/',
    cta: 'Play',
    image: hollowKnightImage,
    accent: '#9ed6ff',
    focusPosition: 'center',
    tags: ['Metroidvania', 'Indie', 'Hand-drawn']
  },
  {
    id: 'silksong',
    kind: 'Game',
    category: 'Games',
    imageMode: 'Official art',
    title: 'Silksong',
    description: '以 Hornet 為主角，攀向全新昆蟲王國頂峰的高速動作冒險。',
    url: 'https://hollowknightsilksong.com/',
    cta: 'Play',
    image: silksongImage,
    accent: '#f1d07a',
    focusPosition: 'center',
    tags: ['Metroidvania', 'Team Cherry', 'Action']
  },
  {
    id: 'yakuza-7',
    kind: 'Game',
    category: 'Games',
    imageMode: 'Store art',
    title: '人中之龍 7',
    description: '春日一番登場，以橫濱街頭、夥伴羈絆與回合制戰鬥重塑系列節奏。',
    url: 'https://store.steampowered.com/app/1235140/Yakuza_Like_a_Dragon/',
    cta: 'Play',
    image: yakuza7Image,
    accent: '#e03434',
    focusPosition: 'center',
    tags: ['RPG', 'SEGA', 'Yakuza']
  },
  {
    id: 'ff7-remake-rebirth',
    kind: 'Game',
    category: 'Games',
    imageMode: 'Official art',
    title: 'FF7 Remake / Rebirth',
    description: '《FINAL FANTASY VII》重製企劃前兩部，從米德加到遼闊世界延展角色命運。',
    url: 'https://ffvii.square-enix-games.com/en-us',
    cta: 'Play',
    image: ff7Image,
    accent: '#5fe0ff',
    focusPosition: '50% center',
    tags: ['JRPG', 'Final Fantasy', 'Remake']
  },
  {
    id: 'triangle-strategy',
    kind: 'Game',
    category: 'Games',
    imageMode: 'Store art',
    title: '三角戰略',
    description: 'HD-2D 戰略 RPG，以信念、投票與地形戰術推動戰爭中的選擇。',
    url: 'https://store.steampowered.com/app/1850510/TRIANGLE_STRATEGY/',
    cta: 'Play',
    image: triangleStrategyImage,
    accent: '#dfb568',
    focusPosition: 'center',
    tags: ['Strategy RPG', 'HD-2D', 'Square Enix']
  },
  {
    id: 'octopath',
    kind: 'Game',
    category: 'Games',
    imageMode: 'Store art',
    title: 'Octopath Traveler 0 / 1 / 2',
    description: 'HD-2D 旅人群像 RPG，從初代八人旅程到新作的奧魯斯特拉復興故事。',
    url: 'https://store.steampowered.com/app/3014320/OCTOPATH_TRAVELER_0/',
    cta: 'Play',
    image: octopathImage,
    accent: '#f0b866',
    focusPosition: '50% center',
    tags: ['JRPG', 'HD-2D', 'Traveler']
  },
  {
    id: 'ys',
    kind: 'Game',
    category: 'Games',
    imageMode: 'Store art',
    title: 'Ys 8 / 9 / 10',
    description: '亞特魯的高速動作 RPG 冒險，從無人島、監獄都市到北海航行。',
    url: 'https://store.steampowered.com/app/2731870/Ys_X_Nordics/',
    cta: 'Play',
    image: ysImage,
    accent: '#4bc6ff',
    focusPosition: 'center',
    tags: ['Action RPG', 'Falcom', 'Adventure']
  },
  {
    id: 'chrono-trigger',
    kind: 'Game',
    category: 'Games',
    imageMode: 'Store art',
    title: '超時空之鑰',
    description: '穿越多個時代拯救星球命運的經典 RPG，戰鬥、角色與音樂都成為標竿。',
    url: 'https://www.square-enix-games.com/en_US/games/chrono-trigger',
    cta: 'Play',
    image: chronoTriggerImage,
    accent: '#8eea78',
    focusPosition: 'center',
    tags: ['JRPG', 'Classic', 'Time Travel']
  },
  {
    id: 'terranigma',
    kind: 'Game',
    category: 'Games',
    imageMode: 'Cover art',
    title: '天地創造',
    description: 'Quintet 的 SFC 動作 RPG 經典，以復甦大地與文明演進串起獨特世界觀。',
    url: 'https://en.wikipedia.org/wiki/Terranigma',
    cta: 'View',
    image: terranigmaImage,
    accent: '#7fd8a8',
    focusPosition: 'center',
    tags: ['Action RPG', 'SNES', 'Classic']
  },
  {
    id: 'rockman-legacy',
    kind: 'Game',
    category: 'Games',
    imageMode: 'Store art',
    title: 'Rockman 3 / 4 / 5 / 6',
    description: '洛克人經典系列中期代表，關卡選擇、武器相剋與精準跳射的核心設計。',
    url: 'https://store.steampowered.com/app/363440/Mega_Man_Legacy_Collection/',
    cta: 'Play',
    image: rockmanLegacyImage,
    accent: '#53b9ff',
    focusPosition: 'center',
    tags: ['Action', 'Capcom', 'Classic']
  },
  {
    id: 'rockman-x-legacy',
    kind: 'Game',
    category: 'Games',
    imageMode: 'Store art',
    title: 'Rockman X / X2 / X3 / X4 / X5 / X6 / X8',
    description: 'X 系列以衝刺、裝甲與更高速的關卡設計延伸洛克人動作語彙。',
    url: 'https://store.steampowered.com/app/743890/Mega_Man_X_Legacy_Collection/',
    cta: 'Play',
    image: rockmanXLegacyImage,
    accent: '#48d6ff',
    focusPosition: 'center',
    tags: ['Action', 'Capcom', 'X Series']
  },
  {
    id: 'castlevania-aria',
    kind: 'Game',
    category: 'Games',
    imageMode: 'Store art',
    title: '惡魔城 曉月圓舞曲',
    description: 'GBA 惡魔城名作，靈魂系統與探索型關卡讓蒼真篇成為系列高峰之一。',
    url: 'https://store.steampowered.com/app/1552550/Castlevania_Advance_Collection/',
    cta: 'Play',
    image: castlevaniaAriaImage,
    accent: '#c783ff',
    focusPosition: 'center',
    tags: ['Metroidvania', 'Konami', 'GBA']
  },
  {
    id: 'tuntown',
    kind: 'Game',
    category: 'Games',
    imageMode: 'Store art',
    title: '阿貓阿狗',
    description: '大宇資訊 1998 年 RPG，木桶鎮、動物夥伴與台灣玩家記憶中的幽默冒險。',
    url: 'https://store.steampowered.com/app/1512710/_/',
    cta: 'Play',
    image: tuntownImage,
    accent: '#ffc45b',
    focusPosition: 'center',
    tags: ['RPG', 'Taiwan', 'Classic']
  },
  {
    id: 'nine-sols',
    kind: 'Game',
    category: 'Games',
    imageMode: 'Store art',
    title: '九日',
    description: '赤燭的道教科幻動作平台，以精準格擋、探索與敘事美術構成獨特氣質。',
    url: 'https://ninesols.com/',
    cta: 'Play',
    image: nineSolsImage,
    accent: '#ff9a4f',
    focusPosition: 'center',
    tags: ['Action', 'Red Candle', 'Taopunk']
  },
  {
    id: 'pragmata',
    kind: 'Game',
    category: 'Games',
    imageMode: 'Store art',
    title: 'Pragmata',
    description: 'Capcom 科幻動作冒險，以月面基地、Diana 與 hacking 戰鬥節奏作為核心。',
    url: 'https://www.capcom-games.com/pragmata/',
    cta: 'Play',
    image: pragmataImage,
    accent: '#82d8ff',
    focusPosition: '50% center',
    tags: ['Sci-fi', 'Capcom', 'Action Adventure']
  }
];

const readings = [
  {
    id: 'half-real',
    kind: 'Reading',
    category: 'Readings',
    imageMode: 'Book cover',
    title: '電玩的本質',
    description: 'Jesper Juul《Half-Real》繁中版，討論電玩如何同時由真實規則與虛構世界構成。',
    url: 'https://www.sanmin.com.tw/product/index/013911592',
    cta: 'Read',
    image: halfRealImage,
    accent: '#f2d16b',
    focusPosition: 'center',
    tags: ['Game Studies', 'Rules', 'Fiction']
  },
  {
    id: 'project-hail-mary',
    kind: 'Reading',
    category: 'Readings',
    imageMode: 'Book cover',
    title: '極限返航',
    description: 'Andy Weir 的硬科幻小說，一場孤獨太空任務與科學推理交織的生存故事。',
    url: 'https://meowbooks.tw/book/114047',
    cta: 'Read',
    image: projectHailMaryImage,
    accent: '#86d9ff',
    focusPosition: 'center',
    tags: ['Sci-fi', 'Andy Weir', 'Space']
  },
  {
    id: 'corruption-law',
    kind: 'Reading',
    category: 'Readings',
    imageMode: 'Book cover',
    title: '貪污治罪條例逐條評釋',
    description: '最高檢察署法學叢書，逐條整理構成要件、實務見解、案例解析與評析。',
    url: 'https://gpi.culture.tw/books/1011500057',
    cta: 'Read',
    image: corruptionLawImage,
    accent: '#b8d7ff',
    focusPosition: 'center',
    tags: ['Law', 'Public Sector', 'Reference']
  },
  {
    id: 'aha-insight',
    kind: 'Reading',
    category: 'Readings',
    imageMode: 'Book cover',
    title: 'Aha! Insight',
    description: 'Martin Gardner 的數學與邏輯謎題書，透過突然理解的瞬間訓練解題直覺。',
    url: 'https://openlibrary.org/books/OL24959769M/Aha%21_Insight',
    cta: 'Read',
    image: ahaInsightImage,
    accent: '#f28c45',
    focusPosition: 'center',
    tags: ['Puzzles', 'Mathematics', 'Insight']
  }
];

const showcaseRows = [
  {
    id: 'websites',
    label: 'Websites',
    items: sites
  },
  {
    id: 'games',
    label: 'Games',
    items: games
  },
  {
    id: 'readings',
    label: 'Readings',
    items: readings
  }
];

const cardRefs = new Map();
const activeRowId = ref(showcaseRows[0].id);
const activeItemIds = ref(Object.fromEntries(showcaseRows.map((row) => [row.id, row.items[0].id])));
const wheelLockUntil = ref(0);

const activeRow = computed(() => showcaseRows.find((row) => row.id === activeRowId.value) ?? showcaseRows[0]);
const activeItemIndex = computed(() => {
  const itemId = activeItemIds.value[activeRow.value.id];
  return Math.max(0, activeRow.value.items.findIndex((item) => item.id === itemId));
});
const selected = computed(() => activeRow.value.items[activeItemIndex.value] ?? activeRow.value.items[0]);

const setCardRef = (id, element) => {
  if (element) {
    cardRefs.set(id, element);
  } else {
    cardRefs.delete(id);
  }
};

const focusSelectedCard = async () => {
  await nextTick();
  const card = cardRefs.get(selected.value.id);
  card?.scrollIntoView({ block: 'nearest', inline: 'nearest' });
  card?.focus({ preventScroll: true });
};

const activateRow = (rowId, shouldFocus = true) => {
  if (!showcaseRows.some((row) => row.id === rowId)) return;
  activeRowId.value = rowId;
  if (shouldFocus) focusSelectedCard();
};

const activateItem = (itemId, shouldFocus = false) => {
  if (!activeRow.value.items.some((item) => item.id === itemId)) return;
  activeItemIds.value = {
    ...activeItemIds.value,
    [activeRow.value.id]: itemId
  };
  if (shouldFocus) focusSelectedCard();
};

const moveRow = (direction) => {
  const rowIndex = showcaseRows.findIndex((row) => row.id === activeRowId.value);
  const nextIndex = Math.min(Math.max(rowIndex + direction, 0), showcaseRows.length - 1);
  activateRow(showcaseRows[nextIndex].id);
};

const moveItem = (direction) => {
  const nextIndex = Math.min(Math.max(activeItemIndex.value + direction, 0), activeRow.value.items.length - 1);
  activateItem(activeRow.value.items[nextIndex].id, true);
};

const jumpItem = (position) => {
  const nextIndex = position === 'end' ? activeRow.value.items.length - 1 : 0;
  activateItem(activeRow.value.items[nextIndex].id, true);
};

const openSelected = () => {
  window.open(selected.value.url, '_blank', 'noopener,noreferrer');
};

const handleKeydown = (event) => {
  const keyActions = {
    ArrowUp: () => moveRow(-1),
    ArrowDown: () => moveRow(1),
    ArrowLeft: () => moveItem(-1),
    ArrowRight: () => moveItem(1),
    Home: () => jumpItem('start'),
    End: () => jumpItem('end'),
    Enter: openSelected
  };

  const action = keyActions[event.key];
  if (!action) return;
  event.preventDefault();
  action();
};

const handleWheel = (event) => {
  const now = Date.now();
  if (now < wheelLockUntil.value) return;

  const horizontalDelta = event.shiftKey ? event.deltaY : event.deltaX;
  const isHorizontal = event.shiftKey || Math.abs(horizontalDelta) > Math.abs(event.deltaY);
  const direction = isHorizontal ? Math.sign(horizontalDelta) : Math.sign(event.deltaY);

  if (direction === 0) return;
  wheelLockUntil.value = now + 180;

  if (isHorizontal) {
    moveItem(direction);
  } else {
    moveRow(direction);
  }
};
</script>
