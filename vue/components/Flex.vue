<script>
import Section from "./Section.vue";
import Items from "./Items.vue";
export default {
  components: { Section, Items },
  data() {
    return {
      content: new Array(10).fill(null).map((_v, i) => i),
    };
  },
};
</script>

<template>
  <Section :title="'Justify/align example'">
    <div class="main-container">
      <Section :title="'Default flex'">
        <div class="container">
          <Items></Items>
        </div>
      </Section>

      <Section :title="'align items'">
        <Section :title="'start'">
          <div class="container container--alignItems-start">
            <Items></Items>
          </div>
        </Section>

        <Section :title="'center'">
          <div class="container container--alignItems-center">
            <Items></Items>
          </div>
        </Section>

        <Section :title="'end'">
          <div class="container container--alignItems-end">
            <Items></Items>
          </div>
        </Section>
      </Section>

      <Section :title="'justify content'">
        <Section :title="'start'"> </Section>

        <Section :title="'center'"> </Section>

        <Section :title="'end'"> </Section>
      </Section>

      <Section :title="'justify items'">
        <Section :title="'start'"> </Section>

        <Section :title="'center'"> </Section>

        <Section :title="'end'"> </Section>
      </Section>

      <Section :title="'align content'">
        <Section :title="'start'"> </Section>

        <Section :title="'center'"> </Section>

        <Section :title="'end'"> </Section>
      </Section>
    </div>
  </Section>
</template>

<style scoped>
.main-container {
  margin: auto;
}

.container {
  width: 256px;
  height: 256px;
  display: flex;
  margin: auto;
  flex-wrap: wrap;
  border: 1px solid var(--primary-color);
  border-radius: 0.25rem;
  position: relative;
}

.container::before {
  content: "";

  position: absolute;
  right: calc(50% - 1px);
  top: 0;
  bottom: 0;

  height: 100%;
  width: 1px;

  background: red;
}

.container::after {
  content: "";

  position: absolute;
  right: 0;
  left: 0;
  top: calc(50% - 1px);

  height: 1px;
  width: 100%;

  background: red;
}

.container--justifyContent-center {
  justify-content: center;
}

.container--alignItems-start {
  align-items: start;
}

.container--alignItems-center {
  align-items: center;
}

.container--alignItems-end {
  align-items: end;
}

.content {
  text-align: center;
  padding: 8px;
  width: 32px;
}
</style>
