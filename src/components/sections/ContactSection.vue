<template>
  <section id="contact" class="paper-section">
    <h2 class="section-title">V. Contact</h2>
    <div class="section-body">
      <p class="body-text">{{ contact.description }}</p>
      <ul class="contact-list">
        <li v-for="method in contact.methods" :key="method.label">
          <strong>{{ method.label }}:</strong>
          <a :href="method.url">{{ method.text }}</a>
        </li>
      </ul>
    </div>
  </section>
</template>

<script setup>
defineProps({
  contact: {
    type: Object,
    required: true
  }
});
</script>
