<template>
<div id="toggle-nav-button">
    <svg 
        xmlns="http://www.w3.org/2000/svg"
        viewbox="0 0 32 32"
        height="32"
        width="32"
        id="svg-hmb">
        <line class="hmb" id="hmb-1" x1="6" y1="8" x2="26" y2="8"/>
        <line class="hmb" id="hmb-2" x1="6" y1="16" x2="26" y2="16"/>
        <line class="hmb" id="hmb-3" x1="6" y1="24" x2="26" y2="24"/>
        <animate class="hmbAnim" href="#hmb-1" attributeName="y1" to="24" dur="0.2s" begin="idenfinite" fill="freeze"/>
        <animate class="hmbAnim" href="#hmb-2" attributeName="opacity" to="0" dur="0.2s" begin="indefinite" fill="freeze"/>
        <animate class="hmbAnim" href="#hmb-3" attributeName="y1" to="8" dur="0.2s" begin="indefinite" fill="freeze"/>
        <animate class="hmbAnim" href="#hmb-1" attributeName="x1" to="8" dur="0.2s" begin="indefinite" fill="freeze"/>
        <animate class="hmbAnim" href="#hmb-1" attributeName="x2" to="24" dur="0.2s" begin="indefinite" fill="freeze"/>
        <animate class="hmbAnim" href="#hmb-3" attributeName="x1" to="8" dur="0.2s" begin="indefinite" fill="freeze"/>
        <animate class="hmbAnim" href="#hmb-3" attributeName="x2" to="24" dur="0.2s" begin="indefinite" fill="freeze"/>
        <!-- reverse -->
        <animate class="hmbAnimR" href="#hmb-1" attributeName="y1" to="8" dur="0.2s" begin="indefinite" fill="freeze"/>
        <animate class="hmbAnimR" href="#hmb-2" attributeName="opacity" to="1" dur="0.2s" begin="indefinite" fill="freeze"/>
        <animate class="hmbAnimR" href="#hmb-3" attributeName="y1" to="24" dur="0.2s" begin="indefinite" fill="freeze"/>
        <animate class="hmbAnimR" href="#hmb-1" attributeName="x1" to="6" dur="0.2s" begin="indefinite" fill="freeze"/>
        <animate class="hmbAnimR" href="#hmb-1" attributeName="x2" to="26" dur="0.2s" begin="indefinite" fill="freeze"/>
        <animate class="hmbAnimR" href="#hmb-3" attributeName="x1" to="6" dur="0.2s" begin="indefinite" fill="freeze"/>
        <animate class="hmbAnimR" href="#hmb-3" attributeName="x2" to="26" dur="0.2s" begin="indefinite" fill="freeze"/>
    </svg>
</div>
</template>
<script>
export default {
    props: {
        navOpened: {
            type: Boolean,
            required: true
        }
    },
    watch: {
        navOpened: function() {
            if (this.navOpened) {
                const anim = document.querySelectorAll(".hmbAnim");
                anim.forEach(elem => {
                    elem.beginElement();
                });
            }
            else {
                const animR = document.querySelectorAll(".hmbAnimR");
                animR.forEach(elem => {
                    elem.beginElement();
                });
            }
        }
    }
}
</script>
<style lang="scss">
.hmb{stroke:#fff;stroke-width:3px;stroke-linecap:round;stroke-linejoin:round}

@mixin nav-hover {
    color: $orange;
    /* border-radius: 2px; */
    cursor: pointer;
}
#toggle-nav-button {
    position: relative;
    // @include flex-centering;
    display: flex;
    flex-direction: column;
    justify-content: center;
    z-index: 3;
    margin-right: 10px;
    margin-left: 10px;
    /* border: white solid 1px; */
    width: 40px;
    height: 50px;
    border-radius: 10px;
    transition: all 0.25s;

    &:hover {
        cursor: pointer;
    }
}
</style>