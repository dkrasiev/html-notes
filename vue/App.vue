<script>
import Position from "./components/Position.vue";
import Content from "./components/Content.vue";
import Flex from "./components/Flex.vue";
import ZIndex from "./components/ZIndex.vue";
export default {
  components: { Position, Content, Flex, ZIndex },
};
</script>

<template>
  <h3>Hello, Vue!</h3>
  <Position></Position>
  <Content></Content>
  <Flex></Flex>
  <ZIndex></ZIndex>
</template>

<style scoped>
/* h3 { */
/*   font-size: 4em; */
/* } */
</style>
