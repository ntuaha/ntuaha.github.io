<template>
  <div class="container py-5">
    <header class="text-center mb-5">
      <img
        src="./assets/aha.jpg"
        class="rounded-circle mx-auto d-block profile-image" alt="Profile Picture" />
      <h1 class="name mt-4">林鉦育</h1>
      <p class="subtitle">熱愛技術與創新</p>
    </header>

    <main class="content">
      <section class="section-block">
        <h2 class="section-title">About Me</h2>
        <div class="section-content">
          <p>我是林鉦育 (aha)，這是我的 <a href="talks.html">演講清單</a>，這是我的<a href="specification.html">專長領域</a>。熱愛玩<a href="games.html">電玩遊戲</a>、桌遊、爬山出遊(但近年少很多)等</p>          
          <p>玉山銀行智能金融處技術中心主管 - 資深副總工程師</p>
          <p>國立台灣大學資訊工程學系博士班學生</p>
          <p>Hi, I am aha. and this is my list of speeches and my area of expertise. I love playing video games, board games, hiking, and traveling (although I haven't done much of it in recent years).</p>
        </div>
      </section>

      <section class="section-block">
        <h2 class="section-title">Publications</h2>
        <div class="section-content">
          <ol class="content-list">
            <li><a href="https://medium.com/@aha">https://medium.com/@aha</a></li>

            <li><a href="https://aclanthology.org/2025.finnlp-1.8/">Concept-Based RAG Models: A High-Accuracy Fact Retrieval Approach</a></li>
            <li><a href="https://hackmd.io/@aha/S1L8Sfxi1x/https%3A%2F%2Fhackmd.io%2F%40aha%2FSkIi5zgjyg">aha 短篇異色集</a></li>
            <li>20170815 @ Makerpro - <a href="https://makerpro.cc/2017/08/taking-autonomous-car-at-midnight-in-taipei-for-maker-experiments/">夜半Maker要做啥？來搭無人車做實驗啊！</a></li>
          </ol>
        </div>
      </section>

      <section class="section-block">
        <h2 class="section-title">Activities</h2>
        <div class="section-content">
          <ol class="content-list">
            <li>20190323 @ 玉山人工智慧公開挑戰賽 - <a href="https://www.esunbank.com.tw/bank/marketing/digital/ai_competition">2019 春季賽 金融商品交易預測</a></li>
          </ol>
        </div>
      </section>

      <section class="section-block">
        <h2 class="section-title">Travel & Adventures</h2>
        <div class="section-content">
          <ol class="content-list">
            <li>2025 阿布達比、杜拜</li>
            <li>2024 北海道、東京</li>
            <li>2023 杜拜、約旦、以色列</li>
            <li>2023 京都、大阪</li>
            <li>2023 紐西蘭</li>
            <li>20220912 @ - <a href="https://aha.medium.com/%E5%8F%B8%E9%A6%AC%E5%BA%AB%E6%96%AF%E6%97%85%E9%81%8A-84d098c20f2e">司馬庫斯</a></li>
            <li>2019 美國加州</li>
          </ol>
        </div>
      </section>

      <section class="section-block">
        <h2 class="section-title">Patents</h2>
        <div class="section-content">
          <ol class="content-list">
            <li> M618228 不中斷服務系統</li>
            <li> I643144 金融資訊互動推薦系統及其互動推薦方法</li>
            <li> 201814611 (發明)金融資訊互動推薦系統及其互動推薦方法</li>
          </ol>
        </div>
      </section>

      <section class="section-block">
        <h2 class="section-title">Contact</h2>
        <div class="section-content">
          <p>Email: <a href="mailto:ntuaha@gmail.com">ntuaha@gmail.com</a></p>
        </div>
      </section>
    </main>

    <footer class="text-center mt-5">
      <p class="copyright">&copy; 2025 aha. All rights reserved.</p>
    </footer>
  </div>
</template>

<script>
export default {
  name: 'App'
};
</script>

<style scoped>
.container {
  max-width: 800px;
  background-color: #ffffff;
  color: #2c3e50;
  font-family: 'SAOUI', -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
}

.profile-image {
  width: 120px;
  height: 120px;
  object-fit: cover;
  border: 3px solid #f8f9fa;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
}

.name {
  font-size: 1.8rem;
  font-weight: 600;
  color: #1a1a1a;
  margin-bottom: 0.5rem;
}

.subtitle {
  font-size: 1rem;
  color: #666;
  margin-bottom: 2rem;
}

.section-block {
  margin-bottom: 2.5rem;
  padding: 0 1rem;
}

.section-title {
  font-size: 1.2rem;
  font-weight: 600;
  color: #1a1a1a;
  margin-bottom: 1rem;
  padding-bottom: 0.5rem;
  border-bottom: 2px solid #f0f0f0;
}

.section-content {
  color: #333;
  font-size: 0.95rem;
  line-height: 1.6;
}

.content-list {
  padding-left: 1.2rem;
}

.content-list li {
  margin-bottom: 0.75rem;
}

a {
  color: #2c5282;
  text-decoration: none;
  transition: color 0.2s ease;
}

a:hover {
  color: #1a365d;
  text-decoration: underline;
}

.copyright {
  font-size: 0.85rem;
  color: #666;
}

@media (max-width: 768px) {
  .container {
    padding: 1rem;
  }
  
  .section-block {
    padding: 0;
  }
  
  .name {
    font-size: 1.5rem;
  }
  
  .section-title {
    font-size: 1.1rem;
  }
}
</style>
