<template>
  <div class="login">
    <div class="box">
      <el-form
        :rules="rules"
        status-icon
        ref="ruleForm"
        label-width="100px"
        class="demo-ruleForm"
        :model="ruleForm"
      >
        <el-form-item class="ulBoundary" label="邮箱" prop="email">
          <el-input
            type="text"
            autocomplete="off"
            v-model="ruleForm.email"
          ></el-input>
        </el-form-item>

        <el-form-item class="ulBoundary" label="密码" prop="password">
          <el-input
            type="password"
            autocomplete="off"
            v-model="ruleForm.password"
          ></el-input>
        </el-form-item>

        <el-form-item class="ulBoundary" label="验证码" prop="code">
          <el-input
            type="text"
            autocomplete="off"
            v-model="ruleForm.code"
          ></el-input>
        </el-form-item>
        <!-- 按钮 -->
        <div class="button-all">
          <el-button
            type="primary"
            class="sumbit"
            @click="LoginHome('ruleForm')"
            >登录</el-button
          >
          <el-button class="reset" @click="ResetText">重置</el-button>
          <el-button
            v-if="isDisabled == 0"
            class="reset"
            type="success"
            @click="SendCD('ruleForm')"
            >验证码</el-button
          >
          <el-button
            v-else-if="isDisabled == 1"
            class="reset"
            type="success"
            @click="SendCD"
            disabled
            >{{ count }} 秒后</el-button
          >
          <el-button
            v-if="isDisabled == 2"
            class="reset"
            type="success"
            @click="SendCD('ruleForm')"
            >再次发送</el-button
          >
          <el-checkbox class="checked" v-model="checked">是否记住</el-checkbox>
        </div>
      </el-form>
    </div>
  </div>
</template>

<script>
import { setToken, setUsername, localSet } from "@/utils/token";
import md5 from "js-md5";
import { SendEmail, Login } from "@/api/all";
import {
  validateEmail,
  validatePassword,
  validateCode,
} from "@/utils/validate";
export default {
  data() {
    /******************************************************************************************
     * 方法
     */
    // 验证账号
    const validateEma = (rule, value, callback) => {
      if (value === "") {
        callback(new Error("请输入邮箱"));
      } else if (validateEmail(value)) {
        callback(new Error("邮箱格式有误"));
      } else {
        callback();
      }
    };
    // 密码验证
    const validatePas = (rule, value, callback) => {
      if (value === "") {
        callback(new Error("密码不能为空"));
      } else if (validatePassword(value)) {
        callback(new Error("密码控制在6-19位"));
      } else {
        callback();
      }
    };
    // 验证码验证
    const validateCod = (rule, value, callback) => {
      if (value === "") {
        callback(new Error("请输入验证码"));
      } else if (validateCode(value)) {
        callback(new Error("输入发送的验证码（6位）"));
      } else {
        callback();
      }
    };
    /******************************************************************************************
     * 数据
     */
    return {
      count: 60, // 点击发送邮箱再次操作间隔时间
      isDisabled: 0,
      checked: false,
      // 绑定表单数据
      ruleForm: {
        email: "666@qq.cn",
        password: "",
        code: "",
      },
      // 验证表单
      rules: {
        email: [
          {
            validator: validateEma,
            trigger: "blur",
          },
        ],
        password: [
          {
            validator: validatePas,
            trigger: "blur",
          },
        ],
        code: [
          {
            validator: validateCod,
            trigger: "blur",
          },
        ],
      },
    };
  },

  /******************************************************************************************
   * methods
   */
  methods: {
    LoginHome(formName) {
      const rLoading = this.openLoading();
      this.$refs[formName].validate((valid) => {
        if (valid) {
          let requestDate = {
            username: this.ruleForm.email,
            password: md5(this.ruleForm.password),
            code: this.ruleForm.code,
          };
          //  666@qq.cn zxc123123 *4f3f9d5520236026d7a2b670ff357dbe*
          // Register(requestDate)
          //   .then((res) => {
          //     console.log(res);
          //   })
          //   .catch((err) => {
          //     console.log(err);
          //   });

          Login(requestDate)
            .then((res) => {
              setToken(res.data.data.token);
              setUsername(res.data.data.username);
              this.$router.push("/control");
              rLoading.close();
            })
            .catch((err) => {
              console.log(err);
              rLoading.close();
            });
        } else {
          console.log("error submit!!");
          return false;
        }
      });
    },
    ResetText() {
      this.ruleForm.email = "";
      this.ruleForm.password = "";
      this.ruleForm.code = "";
      this.$refs["ruleForm"].clearValidate();
    },
    SendCD(formName) {
      const rLoading = this.openLoading();
      this.$refs[formName].validateField("email", (err) => {
        if (!err) {
          SendEmail({ username: this.ruleForm.email })
            .then((res) => {
              rLoading.close();
              let that = this;
              that.isDisabled = 1;
              let interval = window.setInterval(function () {
                that.count--;
                if (that.count < 0) {
                  that.count = 60;
                  that.isDisabled = 2;
                  window.clearInterval(interval);
                }
              }, 1000);
            })
            .catch((err) => {
              console.log(err);
            });
        } else {
          console.log("error submit!!");
          return false;
        }
      });
    },
  },
};
</script>

<style lang="scss" scoped>
* {
  padding: 0;
  margin: 0;
}

.ulBoundary {
  padding: 15px 0;
}
.login {
  color: #000;
  font-weight: 700;
  height: 100vh;
  width: 100%;
  background: url("../../assets/wallhaven-ym565l.png") no-repeat;
  background-size: 100%;
  background-position-y: -80px;
  .box {
    box-sizing: border-box;
    padding: 30px 70px 20px 20px;
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    min-width: 400px;
    width: 450px;
    height: 350px;
    border-radius: 12px;
    background: linear-gradient(
      to right,
      rgba(180, 180, 180, 0.2),
      rgba(180, 180, 180, 0.7),
      rgba(180, 180, 180, 0.2)
    );
    transition: 0.5s;
    &:hover {
      background-color: rgba(255, 255, 255, 0.8);
    }
    .button-all {
      width: 430px;
      min-width: 400px;
      display: flex;
      justify-content: center;
      align-items: center;
      margin-top: 25px;
      .sumbit {
        width: 80px;
        height: 40px;
      }
      .reset {
        width: 80px;
        height: 40px;
      }
      .checked {
        padding-left: 10px;
      }
    }
  }
}
</style>
