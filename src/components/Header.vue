<template>
  <header class="header">
    <div 
      class="header-background"
      v-opacity
    />
    <div class="header-dock">
      <HeaderToggleNav />
      <HeaderToggleButton 
        :is-navigation-open=isNavigationOpen
        @click="changeNavigationOpen(!isNavigationOpen)"
      />

      <a class="title" href="#" @click="changeNavigationOpen(false)">
        {{ "Simple Music Page" }}
      </a>
      <nav class="landscape-nav">
        <ul>
          <li v-for="nav in navigations" :key=nav.name>
            <a 
              :href="nav.hash" 
              @click="changeNavigationOpen(false)"
            >
              {{ nav.name }}
            </a>
          </li>
        </ul>
      </nav>
    </div>
  </header>

  <div 
    class="toggle-mask" 
    @click="changeNavigationOpen(false)"
    v-show=isNavigationOpen
  />
</template>

<script lang="ts">
import { defineComponent, reactive, provide, readonly } from 'vue'
import HeaderToggleNav from './HeaderToggleNav.vue'
import HeaderToggleButton from './HeaderToggleButton.vue'

import useNavigationOpenFlag from '@/composables/useNavigationOpenFlag'

interface LinkNavigations {
  name: string
  hash: string
}

export default defineComponent({
  components: {
    HeaderToggleNav,
    HeaderToggleButton
  },
  setup() {
    const { isNavigationOpen, changeNavigationOpen } = useNavigationOpenFlag()

    const navigations = reactive<LinkNavigations[]>([
      {
        name: 'Track List',
        hash: '#track'
      },
      {
        name: 'Infomation',
        hash: '#info'
      },
      {
        name: 'Contact',
        hash: '#contact'
      }
    ])

    provide('isNavigationOpen', readonly(isNavigationOpen))
    provide('changeNavigationOpen', changeNavigationOpen)
    provide('navigations', readonly(navigations))

    return {
      isNavigationOpen,
      changeNavigationOpen,
      navigations
    }
  },
  data() {
    return {
      backgroundOpacity: 0
    }
  },
  directives: {
    "opacity": {
      mounted(el: HTMLElement) {
        window.onscroll = () => {
          const op = (window.scrollY / window.innerHeight)
          // console.log(op);
          el.style.opacity = (op > 1 ? 1 : op < 0 ? 0 : op).toString()
        }
      },
      unmounted() {
        window.onscroll = null
      }
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

.header-background {
  position: absolute;
  z-index: 0;
  top: 0;
  left: 0;
  bottom: 0;
  right: 0;
  background: $color-blueblack;
  opacity: 0;
}

.header-dock {
  position: relative;
  display: flex;
  flex-direction: row;
  justify-content: space-between;

  @include centering-dock;
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