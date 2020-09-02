<template>
<header class="header">
    <div class="header-dock">
      <HeaderToggleNav 
        :navs=navs
        :nav-opened=navOpened
        @change-nav-open="changeNavOpen"
      />
      <HeaderToggleButton 
        :nav-opened=navOpened
        @click="changeNavOpen(!navOpened)"
      />

      <a class="title" href="#" @click="changeNavOpen(false)">
        {{ "Simple Music Page" }}
      </a>
      <nav class="landscape-nav">
        <ul>
          <li v-for="nav in navs" :key=nav.name>
            <a :href="nav.hash" @click="changeNavOpen(false)">{{ nav.name }}</a>
          </li>
        </ul>
      </nav>
    </div>
  </header>

  <div 
    class="toggle-mask" 
    @click="changeNavOpen(false)"
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
      navs: [
        {
          name: 'Track List',
          hash: '#track'
        },
        {
          name: 'Infomation',
          hash: '#info'
        }
      ],  
      navOpened: false
    }
  },
  methods: {
    changeNavOpen(status: boolean) {
      this.navOpened = status;
    }
  }
})
</script>

<style lang="scss">
.header {
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  z-index: 20;
  display: flex;
  justify-content: center;
  width: 100%;
  height: 50px;

  border-bottom: solid 1px #333;
  box-sizing: border-box;
  
  background: #21223600;
}

.header-dock {
  position: relative;
  display: flex;
  flex-direction: row;
  justify-content: space-between;

  width: 1000px;

  @media (max-width: 720px) {
    width: 100%;
    justify-content: initial;
  }
}

.title {
  color: #fff;
  line-height: 50px;
  font-size: 1.5rem;
  text-decoration: none;
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

    &:hover {
      color: #ff8800;
    }
  }

  @media (max-width: 720px) {
    // visibility: hidden;
    display: none;
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
    // background: #aaaa;
  }
</style>