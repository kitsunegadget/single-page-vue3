<template>
  <div id="info" class="content-info">
    <div class="content-info-dock">
      <div class="content-info-title">
        {{ "Infomation" }}
      </div>
      <div class="content-info-wrap">
        <div class="content-info-left">
          <div class="jacket-cover">
            <!-- <img /> -->
            <p>{{ "cover here." }}</p>
          </div>
        </div>
        <div class="content-info-right">
          <div class="text-info">
            <h2>{{ "Description here." }}</h2>
            <p>{{ "memo" }}</p>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<style lang="scss">
.content-info {
  padding-top: 60px;
  min-height: 100vh;
  background: #fff;

  display: flex;
  flex-direction: row;
  justify-content: center;
}
.content-info-dock {
  display: flex;
  flex-direction: column;
  // justify-content: center;

  @include centering-dock;
}

.content-info-title {
  position: relative;
  font-size: 2rem;
  font-weight: 600;
  color: #000;
  margin-left: 35px;
  margin-bottom: 30px;

  &::before {
    position: absolute;
    content: "»";
    left: -25px;
  }
}

.content-info-wrap {
  display: flex;
  flex-direction: row;
  justify-content: center;

  margin: auto 0;
}
.content-info-left {
  flex: 1;
  display: flex;
  justify-content: center;

  .jacket-cover {
    width: fit-content;
    // height: ;
    display: flex;
    justify-content: center;
    align-items: center;

    border: dashed #333 1px;
    margin: 50px;

    p {
      font-size: 1rem;
      margin: 0;
      width: 200px;
      height: 200px;
      display: flex;
      justify-content: center;
      align-items: center;
    }
  }
}
.content-info-right {
  flex: 1;
  

  
  .text-info {
    padding-left: 20px;
    display: flex;
    flex-direction: column;

    h2 {
      font-size: 1.1rem;
    }
    p {
      font-size: 1rem;
    }
  }

}
</style>
