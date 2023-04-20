<template>
  <div>
    <div class="center_box">
      <h3>testPage</h3>
      <Test></Test>
    </div>
  </div>
</template>
<script>
import Test from './VideoTestPage.vue'

export default {
  name: "LoginPage",
  components:{Test},
  data() {
    return {

    };
  },
  methods: {

  },
};
</script>
<style scoped>
.center_box {
  max-width: 500px;
  margin: 0 auto;
}
</style>