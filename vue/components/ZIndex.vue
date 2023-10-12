<script>
import Section from "./Section.vue";
export default {
  components: { Section },
  props: {
    title: String,
  },
};
</script>

<template>
  <Section :title="'z-index'">
    <div class="container relative rounded">
      <div>Lorem ipsum dolor sit amet.</div>
      <div>Lorem ipsum dolor sit amet.</div>
      <div>Lorem ipsum dolor sit amet.</div>
      <div>Lorem ipsum dolor sit amet.</div>
      <div>Lorem ipsum dolor sit amet.</div>
    </div>
  </Section>
</template>

<style scoped>
.relative {
  position: relative;
}

.container>*:nth-child(1) {
  top: 64px;
  left: 32px;
  z-index: 5;
}

.container>*:nth-child(2) {
  top: 32px;
  left: 16px;
  z-index: 4;
}

.container>*:nth-child(3) {
  opacity: 0.5;
  /* position: static; */
  /* transform: translateX(50px); */
  background: var(--danger-color);
  z-index: 3;
}

.container>*:nth-child(4) {
  top: -32px;
  left: -16px;
  z-index: 2;
}

.container>*:nth-child(5) {
  top: -64px;
  left: -32px;
  z-index: 1;
}

.container>div {
  position: relative;

  color: black;
  background: var(--primary-color);

  height: 64px;

  border: 1px solid black;
  border-radius: 0.5rem;
  padding: 0.5rem;
}
</style>
