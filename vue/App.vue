<script>
import Position from "./components/Position.vue";
import Content from "./components/Content.vue";
export default {
  components: { Position, Content },
};
</script>

<template>
  <h3>Hello, Vue!</h3>
  <Position></Position>
  <Content></Content>
</template>

<style scoped>
h3 {
  font-size: 4em;
}
</style>
