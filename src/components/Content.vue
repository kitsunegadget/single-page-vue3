<template>
  <ContentTop />
  <ContentMiddle />
  <ContentUnder />
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import ContentTop from './ContentTop.vue';
import ContentMiddle from './ContentMiddle.vue'
import ContentUnder from './ContentUnder.vue'

export default defineComponent({
  components :{
    ContentTop,
    ContentMiddle,
    ContentUnder
  }
})
</script>

<style lang="scss">
.content {
  height: 100vh;
  background: #ddd;
}
</style>