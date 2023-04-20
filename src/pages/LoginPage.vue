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
      LoginInfo: {
        user_name: "",
        user_psw: "",
      },
    };
  },
  methods: {
    submitForm(formName) {
      let params = new URLSearchParams();
      params.append("user_name", this.LoginInfo.user_name);
      this.$axios.post("http://127.0.0.1:8080/api/login/", this.LoginInfo).then(
        (res) => {
          console.log(res);
        },
        (err) => {
          console.log(err);
        }
      );
    },
    resetForm(formName) {
      this.$refs[formName].resetFields();
    },
  },
};
</script>
<style scoped>
.center_box {
  max-width: 500px;
  margin: 0 auto;
}
</style>