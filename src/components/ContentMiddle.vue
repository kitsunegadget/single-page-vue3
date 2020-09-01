<template>
    <div id="track" class="content-middle">
        <div class="content-dock">
            <div class="content-title">
                {{ "Track List" }}
            </div>
            <div class="content-container">
                <div class="middle-left">
                    <ul>
                        <li v-for="track in trackList" :key="track.id">
                            <div class="detail-track">
                                <p>{{ track.id + ". " + track.title }}</p>
                                <div class="detail-track-under">
                                    <div class="detail-track-lyric" v-if="track.lyric">
                                        <span class="detail-track-class">
                                            {{ "Lyric:" }}
                                        </span> 
                                        <span class="detail-track-name">
                                            {{ track.lyric }}
                                        </span>
                                    </div>
                                    <div class="detail-track-music">
                                        <span class="detail-track-class">
                                            {{ "Music:" }}
                                        </span> 
                                        <span class="detail-track-name">
                                            {{ track.music }}
                                        </span>
                                    </div>
                                </div>
                            </div>
                        </li>
                    </ul>
                </div>
                <div class="middle-right">
                    <div class="middle-right-inside">
                        <iframe width="100%" height="450" scrolling="no" frameborder="no" allow="autoplay" src="https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/playlists/1120851337&color=%23ff5500&auto_play=false&hide_related=false&show_comments=true&show_user=true&show_reposts=false&show_teaser=true"></iframe><div style="font-size: 10px; color: #cccccc;line-break: anywhere;word-break: normal;overflow: hidden;white-space: nowrap;text-overflow: ellipsis; font-family: Interstate,Lucida Grande,Lucida Sans Unicode,Lucida Sans,Garuda,Verdana,Tahoma,sans-serif;font-weight: 100;"><a href="https://soundcloud.com/kitsunegadget" title="kitsunegadget" target="_blank" style="color: #cccccc; text-decoration: none;">kitsunegadget</a> · <a href="https://soundcloud.com/kitsunegadget/sets/testing" title="Testing" target="_blank" style="color: #cccccc; text-decoration: none;">Testing</a></div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
export default defineComponent({
    data() {
        return {
            trackList: [
                {
                    id: "01",
                    title: 'simple music',
                    lyric: 'Yu', 
                    music: 'kitsune gadget',
                    length: '3:20'
                },
                {
                    id: "02",
                    title: 'planet',
                    length: '2:52'
                },
                {
                    id: "03",
                    title: 'things',
                    length: '4:01'
                },
                {
                    id: "04",
                    title: 'far away',
                    length: '3:33'
                },
                {
                    id: "05",
                    title: 'the piano',
                    length: '4:12'
                },
                {
                    id: "06",
                    title: 'over the world',
                    length: '2:52'
                },
                {
                    id: "07",
                    title: 'deep forest',
                    length: '4:01'
                },
                {
                    id: "08",
                    title: 'way out',
                    length: '3:33'
                },
                {
                    id: "09",
                    title: 'night',
                    length: '4:12'
                },
            ]
        }
    }
})
</script>

<style lang="scss">
.content-middle {
    min-height: 100vh;
    background: #212236;
    padding-top: 60px;
    padding-bottom: 30px;

    display: flex;
    justify-content: center;
}

.content-dock {
  display: flex;
  flex-direction: column;
  justify-content: space-between;

  width: 1000px;

  @media (max-width: 720px) {
    width: 100%;
  }
}

.content-title {
    position: relative;
    font-size: 2.0rem;
    font-weight: 600;
    color: #fff;
    margin-left: 35px;
    margin-bottom: 30px;

    &::before {
        position: absolute;
        content: '»';
        left: -25px;
    }
}

.content-container {
    display: flex;
  flex-direction: row;
  justify-content: space-between;

}

.middle-left {
    color: #fff;
    width: 100%;
    padding: 0 40px;
    
    display: flex;
    flex-direction: column;

    ul {
        padding: 0;
    }
    li {
        
        list-style: none;

        // &::before {
            
        // }
    }

    .detail-track {
        font-size: 1.4rem;
        height: 75px;
        width: 100%;

        &-under {
            display: flex;
            flex-direction: row;
            justify-content: flex-end;
            font-weight: 600;
            text-align: right;
            margin-top: -20px;

            span {
                margin: 0 2px;
            }
        }

        &-lyric {
            margin-right: 10px;
        }
        &-class {
            font-size: 0.9rem;
        }
        &-name {
            font-size: 1.0rem;
        }
    }
}

.middle-right {
    width: 100%;
    overflow: visible;
    margin: 20px 20px; 
    margin-left: 0px;
    // height: 100%;

    &-inside {
        position: -webkit-sticky;
        position: sticky;
        top: 60px;
        // height: 100%;

        min-height: 50px;
        // background: #0f0;
    }
}
</style>