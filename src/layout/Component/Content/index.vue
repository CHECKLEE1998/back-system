<template>
  <div id="content">
    <router-view />
  </div>
</template>


<style lang="scss" scoped>
#content {
  position: fixed;
  left: 250px;
  right: 0;
  bottom: 0;
  top: 50px;
  margin: 10px;
  padding: 10px;
  box-shadow: 3px 3px 16px 3px rgba(0, 0, 0, 0.1);
  -webkit-box-shadow: 3px 3px 16px 3px rgba(0, 0, 0, 0.1);
}
</style>