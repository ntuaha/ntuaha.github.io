<template>
  <section id="policy" class="paper-section policy-section">
    <h2 class="section-title">{{ policy.title }}</h2>
    <p class="body-text muted">{{ policy.intro }}</p>

    <div class="policy-grid">
      <article v-for="category in policy.categories" :key="category.name" class="policy-block">
        <h3>{{ category.name }}</h3>
        <ol class="policy-list">
          <li v-for="item in category.items" :key="item">{{ item }}</li>
        </ol>
      </article>
    </div>
  </section>
</template>

<script setup>
defineProps({
  policy: {
    type: Object,
    required: true
  }
});
</script>
