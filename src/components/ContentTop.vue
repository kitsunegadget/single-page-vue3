<template>
    <div class="content-top">
        <div id="bg" />
        <h2 class="abstract">
            {{ "Simple music page is awesome." }}
        </h2>
        <h3 class="abstract-mini">
            {{ "Music spesial site demo." }}
        </h3>
        <a 
            class="read-more"
            href="#track"
        >
            {{ "Read More" }}
        </a>
        
    </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
export default defineComponent({
   
})
</script>

<style lang="scss">
.content-top {
    min-height: 100vh;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    position: relative;
    background: #0008;
}
#bg {
    background: {
        image: url(../assets/piano.jpg);
        attachment: fixed;
        size: cover;
        position-x: center;
    }
    position: fixed;
    z-index: -1;
    width: 100%;
    height: 100%;
    // opacity: 0.9;
}
.abstract {
    color: #fff;
    font-size: 2.0rem;
    margin: 0 20px;

    &-mini {
        color: #fff;
        font-size: 1.0rem;
    }

    @media (max-width: 540px) {
        text-align: center;
    }
}

.read-more {
    position: absolute;
    bottom: 0;
    margin-bottom: 100px;
    width: 150px;
    height: 35px;
    border-radius: 50px;
    line-height: 35px;
    font-size: 1.0rem;
    color: #fff;
    font-weight: 600;;
    text-decoration: none;
    text-align: center;

    background: $color-green-light;
    transition: background ease 0.5s;

    &:hover {
        background: $color-green-light-hover;
        cursor: pointer;
    }
}
</style>