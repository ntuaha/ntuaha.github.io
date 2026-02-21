<template>
  <section id="about" class="paper-section">
    <h2 class="section-title">I. About</h2>
    <div class="section-body">
      <p v-for="text in about.descriptions" :key="text" class="body-text">{{ text }}</p>
      <ul class="inline-list">
        <li v-for="skill in about.skills" :key="skill.name">{{ skill.name }}</li>
      </ul>
    </div>
  </section>
</template>

<script setup>
defineProps({
  about: {
    type: Object,
    required: true
  }
});
</script>
