<template>
  <div>
    <div class="center_box">
      <h3>登录</h3>

      <el-form
        :model="LoginInfo"
        status-icon
        ref="LoginInfo"
        label-width="100px"
        class="demo-LoginInfo"
      >
        <el-form-item label="用户名" prop="pass">
          <el-input
            type="text"
            v-model="LoginInfo.user_name"
            autocomplete="off"
          ></el-input>
        </el-form-item>
        <el-form-item label="密码" prop="user_psw">
          <el-input
            type="password"
            v-model="LoginInfo.user_psw"
            autocomplete="off"
          ></el-input>
        </el-form-item>
        <el-form-item>
          <el-button type="primary" @click="submitForm('LoginInfo')"
            >提交</el-button
          >
          <el-button @click="resetForm('LoginInfo')">重置</el-button>
        </el-form-item>
      </el-form>
      <h3>注册</h3>
      <el-form
        :model="LoginInfo"
        status-icon
        ref="LoginInfo"
        label-width="100px"
        class="demo-LoginInfo"
      >
        <el-form-item label="用户名" prop="pass">
          <el-input
            type="text"
            v-model="LoginInfo.user_name"
            autocomplete="off"
          ></el-input>
        </el-form-item>
        <el-form-item label="密码" prop="user_psw">
          <el-input
            type="password"
            v-model="LoginInfo.user_psw"
            autocomplete="off"
          ></el-input>
        </el-form-item>
        <el-form-item>
          <el-button type="primary" @click="submitForm('LoginInfo')"
            >提交</el-button
          >
          <el-button @click="resetForm('LoginInfo')">重置</el-button>
        </el-form-item>
      </el-form>
    </div>
  </div>
</template>
<script>
export default {
  name: "LoginPage",
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
      this.$axios.post("http://127.0.0.1:8000/login/", this.LoginInfo).then(
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