<script>
import Section from "./Section.vue";
export default {
  components: { Section },
};
</script>

<template>
  <Section :title="'Test'">
    <div class="container">
      <div>
        static container
        <div class="focus">static</div>
      </div>
      <div>
        relative container
        <div class="relative focus">relative</div>
      </div>
      <div>
        absolute container
        <div class="absolute focus">absolute</div>
      </div>
      <div>
        fixed container
        <div class="fixed focus">fixed</div>
      </div>
      <div>
        sticky container
        <div class="sticky focus">sticky</div>
      </div>
    </div>
  </Section>
</template>

<style scoped>
.container {
  display: grid;
  position: relative;

  height: 256px;
  grid-template-columns: repeat(5, 1fr);

  color: var(--primary-color);
  background: rgba(0, 0, 0, 0.1);

  border-radius: 1rem;
  padding: 0.5rem;
}

.relative {
  position: relative;
  top: 4rem;
  left: 4rem;
}

.absolute {
  position: absolute;
  top: -2rem;
  right: 0;
}

.fixed {
  position: fixed;
  top: 2rem;
}

.sticky {
  height: fit-content;
  position: sticky;
  top: 0;
}
</style>
