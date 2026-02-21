<template>
  <section id="experience" class="paper-section">
    <h2 class="section-title">II. Experience</h2>
    <div class="section-body">
      <article v-for="item in experience" :key="item.title + item.company" class="entry">
        <h3>{{ item.title }}</h3>
        <p class="meta">{{ item.company }} | {{ item.period }}</p>
        <p class="body-text">{{ item.description }}</p>
      </article>
    </div>
  </section>
</template>

<script setup>
defineProps({
  experience: {
    type: Array,
    required: true
  }
});
</script>
