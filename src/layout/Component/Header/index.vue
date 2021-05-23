<template>
  <div id="header">
    <i class="el-icon-s-fold" @click="changeMenu"></i>
    <i class="el-icon-error" @click="quit"></i>
  </div>
</template>

<script>
import { removeToken, removeUsername } from "@/utils/token";
export default {
  data() {
    return {};
  },
  methods: {
    changeMenu() {
      // this.$store.commit("SET_COLLAPSE");
      alert("敬请期待");
    },
    quit() {
      this.$router.push("/login");
      removeToken();
      removeUsername();
    },
  },
};
</script>

<style lang="scss" scoped>
@import "../../../styles/config.scss";
#header {
  padding: 0 20px;
  position: fixed;
  top: 0;
  left: $leftMenu;
  right: 0;
  height: 50px;
  box-shadow: 0 3px 16px 0 rgba(0, 0, 0, 0.1);
  -webkit-box-shadow: 0 3px 16px 0 rgba(0, 0, 0, 0.1);
  display: flex;
  justify-content: space-between;
  align-items: center;
  font-size: 40px;
  transition: 0.2s;
  i:first-child:hover {
    color: #344a5f;
    transition: 0.2s;
  }
  i:last-child:hover {
    color: rgb(204, 7, 7);
    transition: 0.2s;
  }
}
</style>