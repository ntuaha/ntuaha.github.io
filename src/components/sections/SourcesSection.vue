<template>
  <section class="paper-section">
    <h2 class="section-title">References</h2>
    <div class="section-body">
      <ol class="references">
        <li v-for="source in sources" :key="source.id">
          [{{ source.id }}] {{ source.title }}. <a :href="source.url" target="_blank" rel="noopener noreferrer">{{ source.url }}</a> (accessed {{ source.accessed }}).
        </li>
      </ol>
    </div>
  </section>
</template>

<script setup>
defineProps({
  sources: {
    type: Array,
    required: true
  }
});
</script>
