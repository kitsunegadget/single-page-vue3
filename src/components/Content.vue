<template>
  <div class="content">
    {{ "test" }}
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';

export default defineComponent({
  components :{
    // ContentTop,
    // ContentMiddle,
    // ContentUnder
  }
})
</script>

<style lang="scss">
.content {
  height: 100vh;
  background: #ddd;
}
</style>