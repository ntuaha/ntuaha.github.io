<template>
  <section id="lifestyle" class="paper-section">
    <h2 class="section-title">VI. Lifestyle</h2>
    <div class="section-body">
      <div class="sub-section">
        <h3 class="sub-title">Books</h3>
        <ul class="inline-list">
          <li v-for="book in lifestyle.books" :key="book.title">{{ book.title }}</li>
        </ul>
      </div>

      <div class="sub-section">
        <h3 class="sub-title">Games</h3>
        <ul class="inline-list">
          <li v-for="game in lifestyle.games" :key="game.title">{{ game.title }}</li>
        </ul>
      </div>

      <div class="sub-section">
        <h3 class="sub-title">Movies (Examples)</h3>
        <div class="media-grid">
          <article v-for="movie in lifestyle.movies" :key="movie.title" class="media-card">
            <img v-if="movie.image" :src="movie.image" :alt="movie.title" class="media-image" />
            <h4>{{ movie.title }}</h4>
            <p class="meta">{{ movie.year }}<span v-if="movie.note"> | {{ movie.note }}</span></p>
          </article>
        </div>
      </div>

      <div class="sub-section">
        <h3 class="sub-title">Travel</h3>
        <div class="media-grid">
          <article v-for="area in lifestyle.travel" :key="area.region" class="media-card">
            <img v-if="area.image" :src="area.image" :alt="area.region" class="media-image" />
            <h4>{{ area.region }}</h4>
            <p class="body-text">{{ area.places.join(' / ') }}</p>
          </article>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
defineProps({
  lifestyle: {
    type: Object,
    required: true
  }
});
</script>
