<template>
  <main class="content">
    <ContentTop />
    <ContentMiddle />
    <ContentInfo />
    <ContentContact />
    <ContentUnder />
  </main>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import ContentTop from './ContentTop.vue';
import ContentMiddle from './ContentMiddles.vue'
import ContentInfo from './ContentInfo.vue';
import ContentUnder from './ContentUnder.vue'
import ContentContact from './ContentContact.vue'

export default defineComponent({
  components :{
    ContentTop,
    ContentMiddle,
    ContentInfo,
    ContentUnder,
    ContentContact
  }
})
</script>

<style lang="scss">
.content {
  min-height: 100vh;
  // background: #ddd;
}
</style>