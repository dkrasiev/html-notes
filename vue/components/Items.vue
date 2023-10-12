<script>
import Section from "./Section.vue";
export default {
  props: {
    count: {
      type: Number,
      default: 10,
    },
  },
  data() {
    return {
      items: new Array(this.count).fill(null).map((_v, i) => i),
    };
  },
};
</script>

<template>
  <div v-for="i in items" class="rounded content">{{ i }}</div>
</template>

<style scoped>
.content {
  padding: 0.5rem;
  height: 2rem;
  width: 2rem;
}
</style>
