<template>
  <div id="app">
    <Header />
    <Content />
    <Footer />
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import Header from './components/Header.vue';
import Content from './components/Content.vue';
import Footer from './components/Footer.vue';

export default defineComponent({
  name: 'App',
  components: {
    Header,
    Content,
    Footer
  }
});
</script>

<style lang="scss">
* {
  box-sizing: border-box;
}
html {
  scroll-behavior: smooth;
}

body {
  margin: 0;
  padding: 0;

  font-family: Roboto, 'Segoe UI', Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  
  color: #2c3e50;
  font-size: 10px;
}

#app {
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  height: 100%;
}
</style>
