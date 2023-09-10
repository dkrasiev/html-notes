<script>
import Section from "./Section.vue";
export default {
  components: { Section },
};
</script>

<template>
  <Section :title="'Test'">
    <div class="container">
      <h3>auto</h3>
      <div class="tag">Lorem ipsum dolor sit amet.</div>

      <h3>min-content</h3>
      <div class="tag tag--min">Lorem ipsum dolor sit amet.</div>

      <h3>fit-content</h3>
      <div class="tag tag--fit">Lorem ipsum dolor sit amet.</div>

      <h3>max-content</h3>
      <div class="tag tag--max">Lorem ipsum dolor sit amet.</div>
    </div>
  </Section>
</template>

<style scoped>
.container>* {
  background: rgba(0, 0, 0, 0.1);
}

.tag {
  margin: 1rem 0;
  padding: 1rem;

  border: 3px solid var(--success-color);
  border-radius: 0.5rem;
}

.tag--min {
  width: min-content;
}

.tag--fit {
  width: fix-content;
}

.tag--max {
  width: max-content;
}
</style>
