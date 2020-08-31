<template>
<header class="header">
    <div class="header-dock">
      <HeaderToggleNav 
        :nav-strings=navStrings
        :nav-opened=navOpened
      />
      <HeaderToggleButton 
        :nav-opened=navOpened
        @click="invertNavOpen"
      />

      <div class="title">
        {{ "Single Page Vue3" }}
      </div>
      <div class="landscape-nav">
        <ul>
          <li v-for="nav in navStrings" :key=nav>
            <a href="#" @click="falseNavOpen">{{ nav }}</a>
          </li>
        </ul>
      </div>
    </div>
  </header>
  <div 
    class="toggle-mask" 
    @click="falseNavOpen"
    v-show=navOpened
  />
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import HeaderToggleNav from './HeaderToggleNav.vue';
import HeaderToggleButton from './HeaderToggleButton.vue';

export default defineComponent({
  components: {
    HeaderToggleNav,
    HeaderToggleButton
  },
  data() {
    return {
      navStrings: [
        'Track List',
        'Info'
      ],
      navOpened: false
    }
  },
  methods: {
    invertNavOpen() {
      this.navOpened = !this.navOpened;
    },
    falseNavOpen() {
      this.navOpened = false;
    }
  }
})
</script>

<style lang="scss">
.header {
  position: relative;
  z-index: 10;
  display: flex;
  justify-content: center;
  width: 100vw;
  height: 50px;
  
  background: #666;
}

.header-dock {
  position: relative;
  display: flex;
  flex-direction: row;
  justify-content: space-between;

  width: 1000px;

  @media (max-width: 720px) {
    width: 100vw;
  }
}

.title {
  color: #fff;
  line-height: 50px;
  font-size: 1.5rem;
}

.landscape-nav {
  margin-right: 20px;
  flex: 2;

  ul {
    padding: 0;
    margin: 0;
    display: flex;
    flex-direction: row;
    flex-wrap: nowrap;
    justify-content: flex-end;
  }
  li {
    list-style: none;
    margin: 0 15px;
  }
  a {
    color: #fff;
    font-size: 1rem;
    font-weight: 600;
    text-decoration: none;
    line-height: 50px;
  }

  @media (max-width: 720px) {
    visibility: hidden;
  }
}

.toggle-mask {
    position: fixed;
    display: block;
    z-index: 9;
    top: 0;
    left: 0;
    width: 100vw;
    height: 100vh;
    background: #aaaa;
  }
</style>