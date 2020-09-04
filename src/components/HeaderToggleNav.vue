<template>
  <nav 
    id="toggle-nav"
    class="toggle-nav" 
    :opened="isNavigationOpen"
  >
    <ul>
      <li v-for="nav in navigations" :key=nav>
        <a 
          :href="nav.hash" 
          @click="changeNavigationOpen(false)"
        >
          {{ nav.name }}
        </a>
      </li>
    </ul>
  </nav>
</template>

<script lang="ts">
import { defineComponent, inject } from 'vue'

export default defineComponent({
  setup() {
    const isNavigationOpen = inject('isNavigationOpen')
    const changeNavigationOpen = inject('changeNavigationOpen')
    const navigations = inject('navigations')

    return {
      isNavigationOpen,
      changeNavigationOpen,
      navigations
    }
  }
})
</script>

<style lang="scss">
.toggle-nav {
  background: #000d;
  position: fixed;
  top: 0;
  z-index: 10;
  width: 150px;

  margin-top: 50px;
  // display: flex;
  // flex-direction: column;

  transition: ease 0.4s;
  transform: translateY(-150%);

  ul {
    margin: 10px 0px;
    padding: 0;
  }

  li {
    list-style: none;
    text-align: left;
  }
  a {
    display: block;
    padding: 0 20px;
    color: #ccc;
    font-weight: 600;
    font-size: 1rem;
    line-height: 50px;
    height: 50px;
    width: 100%;
    text-decoration: none;
    transition: all ease 0.2s;

    &:hover {
      color: #fff;
      background: #06262e;
    }
  }
}

.toggle-nav[opened="true"] {
  transform: translateY(0);
}
</style>