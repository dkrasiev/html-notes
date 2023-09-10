<script>
export default {
  props: {
    title: String,
  },
};
</script>

<template>
  <section>
    <h2 v-if="title">{{ title }}</h2>
    <slot></slot>
  </section>
</template>

<style></style>
