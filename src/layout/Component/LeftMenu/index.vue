<template>
  <div id="left-menu">
    <a href="javascript::">logo.</a>
    <el-menu
      default-active="1-4-1"
      class="el-menu-vertical-demo"
      @open="handleOpen"
      @close="handleClose"
      :collapse="isCollapse"
      background-color="#344a5f"
      text-color="#fff"
      router
    >
      <template v-for="(item, index) in routers">
        <el-submenu v-if="!item.hidden" :key="item.id" :index="index + ''">
          <template slot="title">
            <i :class="item.meta.icon"></i>
            <span slot="title">{{ item.meta.name }}</span>
          </template>
          <el-menu-item
            v-for="childItem in item.children"
            :key="childItem.id"
            :index="childItem.path"
            >{{ childItem.meta.name }}</el-menu-item
          >
        </el-submenu>
      </template>
    </el-menu>
  </div>
</template>

<script>
export default {
  data() {
    return {
      isCollapse: false,
      routers: "",
    };
  },
  methods: {
    handleOpen(key, keyPath) {
      console.log(key, keyPath);
    },
    handleClose(key, keyPath) {
      console.log(key, keyPath);
    },
  },
  created() {
    this.routers = this.$router.options.routes;
  },
};
</script>

<style lang="scss" scoped>
@import "../../../styles/config.scss";
#left-menu {
  position: fixed;
  width: $leftMenu;
  height: 100vh;
  background: #344a5f;
  a {
    display: $logoDis;
    width: $leftMenu;
    height: 250px;
    text-align: center;
    line-height: 250px;
    font-size: 60px;
    color: #fff;
  }
}
</style>