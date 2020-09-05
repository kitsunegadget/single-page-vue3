<template>
  <div id="info" class="content-under">
    <div class="content-under-dock">
      <!-- <div class="content-under-title">
        {{ "Infomation" }}
      </div> -->
      <div class="content-member">
        <div class="content-member-role">
          {{ "Product" }}
        </div>
        <a href="https://twitter.com/yuy_az_" target="_blank" ref="noopener">
          <img src="../assets/icon_yu.png" width=100 height=100 />
          <div class="content-member-text">
            {{ "Yu_w" }}
          </div>
        </a>
      </div>
    </div>
  </div>
</template>

<style lang="scss">
.content-under {
  padding-top: 60px;
  min-height: 50vh;
  background: #fff;

  display: flex;
  flex-direction: row;
  justify-content: center;
}
.content-under-title {
  position: relative;
  font-size: 2.0rem;
  font-weight: 600;
  color: #000;
  margin-left: 35px;
  margin-bottom: 30px;

  &::before {
      position: absolute;
      content: '»';
      left: -25px;
  }
}
.content-under-dock {
  display: flex;
  flex-direction: column;

  @include centering-dock;
}

.content-member {
  display: flex;
  flex-direction: column;
  // justify-content: center;
  align-items: center;

  &-role {
    margin-bottom: 10px;
    font-size: 1.2rem;
    font-weight: 600;
    color: #333;
    // text-align: center;
  }

  img {
    border-radius: 100px;
  }

  &-text {
    margin-top: 10px;
    font-size: 1.0rem;
    text-align: center;
  }

  a {
    padding: 5px;
    color: #000;
    text-decoration: none;
    transition: all ease 0.5s;

    &:hover {
      background: #0004;
      border-radius: 10px;
    }
      
  }
}
</style>