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
  methods: {
    initSwiper() {
      this.swiperInstance = new Swiper(".swiper-container", {
        touchEventsTarget: "container", // 手势事件监听的目标元素
        touchRatio: 1, // 触摸距离与轮播距离的比率
        touchAngle: 45, // 触摸移动的角度小于这个值时，Swiper不会执行滑动
        simulateTouch: true, // 是否开启模拟触摸功能
        followFinger: true, // 是否开启触摸跟随功能
        allowTouchMove: true, // 是否允许触摸滑动
        passiveListeners: false, // 是否使用被动监听器来优化触摸滑动性能，
        loop: true,
        direction: "vertical",
        mousewheel: true,
        keyboard: true,
        pagination: {
          el: ".swiper-pagination",
        },
        on: {
          slideChangeTransitionEnd: () => {
            let videoRefs = this.$refs["videoRefs"];
            if (videoRefs) {
              videoRefs.forEach((video) => {
                video.pause();
              });
            }
            let activeIndex = this.swiperInstance.activeIndex;
            videoRefs[activeIndex].play()
            console.log(this.swiperInstance.activeIndex);
          },
        },
      });
    },
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
          this.initSwiper()
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