<script>
import SearchView from "../views/SearchView.vue";
export default {
  components: {
    SearchView,
  },
};
</script>
<template>
  <div class="all-area">
    <header>
      <a href="#"><h1>動態問卷</h1></a>
    </header>
    <SearchView />
    <footer></footer>
  </div>
</template>
<style lang="scss" scoped>
.all-area {
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  height: 100vh;
  a {
    text-decoration: none;
  }
  header {
    width: 100vw;
    height: 15vh;
    background-image: linear-gradient(to right, #4facfe 0%, #00f2fe 100%);

    h1 {
      margin-top: 1rem;
      text-align: center;
    }
  }

  footer {
    width: 100vw;
    height: 15vh;
    background-image: radial-gradient(
      circle 248px at center,
      #16d9e3 0%,
      #30c7ec 47%,
      #46aef7 100%
    );
  }
}
</style>
