<template>
  <div class="mian-content">
    <div class="swiper-container">
      <div class="swiper-wrapper video-outer-box">
        <div
          class="swiper-slide video-inner-box"
          v-for="(item, index) in VideoData"
          :key="item._id"
        >
          <video
            :src="item.src"
            class="current-video"
            controls
            loop
            preload="auto"
            autoplay
            :data-index="index"
            ref="videoRefs"
          ></video>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import Swiper from "swiper";
import "swiper/css/swiper.min.css";
export default {
  name: "VideoTestPage",
  data() {
    return {
      swiperInstance: null,
      VideoData: [],
      post_data: {
        info: "get_video",
      },
    };
  },
  watch: {
    VideoData: {
      handler() {
        this.$nextTick(function () {
          this.swiperInstance=new Swiper(".swiper-container", {
            loop: true,
            direction: "vertical",
            mousewheel: true,
            keyboard: true,
            pagination: {
              el: ".swiper-pagination",
            },
            on: {
              slideChangeTransitionEnd: ()=>{
                let videoRefs = this.$refs['videoRefs'];
                if(videoRefs){
                    videoRefs.forEach((video)=>{
                        video.pause()
                    })
                }
                console.log('切换');
              },
            },
          });
        });
      },
    },
  },
  methods: {
    
  },
  mounted() {
    this.$axios
      .post(
        "https://bdb24c6d-8c19-4f80-8e7e-c9c9f037f131.bspapp.com/video",
        this.post_data
      )
      .then(
        (res) => {
          console.log(res.data.data);
          this.VideoData = res.data.data;
        },
        (err) => {
          console.log(err);
        }
      );
  },
};
</script>
<style scoped>
.video-outer-box {
  margin: 0 auto;
  width: 350px;
  height: 650px;
}
.video-inner-box {
  height: 650px;
  width: 350px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  background-color: black;
}
.current-video {
  width: 350px;
}
</style>