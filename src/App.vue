<script>
import { RouterLink, RouterView } from "vue-router";
import HeaderAndFooter from "./components/HeaderAndFooter.vue";

export default {
  components: {
    HeaderAndFooter,
  },
};
</script>

<template>
  <HeaderAndFooter></HeaderAndFooter>
  <RouterView />
</template>

<style lang="scss" scoped>
template {
  height: 100vh;
}
</style>
