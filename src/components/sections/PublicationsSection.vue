<template>
  <section id="publications" class="paper-section">
    <h2 class="section-title">III. Publications</h2>
    <div class="section-body">
      <article v-for="pub in publications" :key="pub.title" class="entry">
        <h3>
          <a v-if="pub.url" :href="pub.url" target="_blank" rel="noopener noreferrer">{{ pub.title }}</a>
          <span v-else>{{ pub.title }}</span>
        </h3>
        <p class="meta">{{ pub.type }} | {{ pub.year }}<span v-if="pub.venue"> | {{ pub.venue }}</span></p>
        <p v-if="pub.description" class="body-text">{{ pub.description }}</p>
      </article>
    </div>
  </section>
</template>

<script setup>
defineProps({
  publications: {
    type: Array,
    required: true
  }
});
</script>
