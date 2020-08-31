<template>
  <div 
    id="toggle-nav"
    class="toggle-nav" 
    :opened="navOpened"
  >
    <ul>
      <li v-for="nav in navStrings" :key=nav>
        <a href="#">{{ nav }}</a>
      </li>
    </ul>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue'

export default defineComponent({
  props: {
    navStrings: {
      type: Array,
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
  background: #0005;
  position: absolute;
  left: 0;
  z-index: -1;

  margin-top: 50px;
  // display: flex;
  // flex-direction: column;

  transition: ease 0.4s;
  transform: translateY(-150%);

  ul {
    margin: 10px 20px;
    padding: 0;
  }

  li {
    list-style: none;
    text-align: left;
  }
  a {
    display: block;
    padding: 0 10px;
    color: #333;
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