<template>
  <section id="patents" class="paper-section">
    <h2 class="section-title">IV. Patents</h2>
    <div class="section-body">
      <article v-for="patent in patents" :key="patent.number" class="entry">
        <h3>{{ patent.number }} - {{ patent.title }}</h3>
        <p class="meta">Verification: {{ patent.verification || 'unknown' }}</p>
        <p class="body-text">{{ patent.description }}</p>
      </article>
    </div>
  </section>
</template>

<script setup>
defineProps({
  patents: {
    type: Array,
    required: true
  }
});
</script>
