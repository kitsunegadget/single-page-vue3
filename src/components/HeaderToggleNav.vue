<template>
  <div 
    id="toggle-nav"
    class="toggle-nav" 
    :opened="navOpened"
  >
    <ul>
      <li v-for="nav in navs" :key=nav>
        <a 
          :href="nav.hash" 
          @click="$emit('false-nav-open')"
        >
          {{ nav.name }}
        </a>
      </li>
    </ul>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue'

export default defineComponent({
  props: {
    navs: {
      type: Object,
      required: true
    },
    navOpened: {
      type: Boolean,
      required: true
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
      background: rgb(6, 38, 46);
    }
  }
}

.toggle-nav[opened="true"] {
  transform: translateY(0);
}
</style>