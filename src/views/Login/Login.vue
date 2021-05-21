<template>
  <div class="login">
    <div class="box">
      <el-form
        status-icon
        ref="ruleForm"
        label-width="100px"
        class="demo-ruleForm"
        :model="ruleForm"
      >
        <el-form-item class="ulBoundary" label="账号" prop="account">
          <el-input
            type="text"
            autocomplete="off"
            v-model="ruleForm.account"
          ></el-input>
        </el-form-item>

        <el-form-item class="ulBoundary" label="密码" prop="password">
          <el-input
            type="password"
            autocomplete="off"
            v-model="ruleForm.password"
          ></el-input>
        </el-form-item>
        <!-- 按钮 -->
        <div class="button-all">
          <el-button type="primary" class="sumbit">提交</el-button>
          <el-button class="reset">重置</el-button>
        </div>
      </el-form>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      // 绑定表单数据
      ruleForm: {
        account: "",
        password: "",
      },
    };
  },
};
</script>


<style lang="scss" scoped>
* {
  padding: 0;
  margin: 0;
}

.ulBoundary {
  padding: 8px 0;
}
.login {
  height: 100vh;
  width: 100%;
  background: url("../../assets/surface_embossed_colorful_140185_1920x1080.jpg")
    no-repeat;
  background-size: 100%;
  .box {
    box-sizing: border-box;
    padding: 50px 70px 20px 20px;
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    min-width: 400px;
    width: 450px;
    height: 350px;
    border-radius: 12px;
    background-color: rgba(255, 255, 255, 0.5);
    transition: 0.5s;
    &:hover {
      background-color: rgba(255, 255, 255, 0.8);
    }
    .button-all {
      width: 450px;
      min-width: 400px;
      display: flex;
      justify-content: center;
      align-items: center;
      margin-top: 50px;
      .sumbit {
        width: 80px;
        height: 40px;
      }
      .reset {
        width: 80px;
        height: 40px;
      }
    }
  }
}
</style>