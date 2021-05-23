<template>
  <div>
    <leftmenu />
    <headers />
    <contents />
  </div>
</template>

<script>
import leftmenu from "./Component/LeftMenu/index";
import headers from "./Component/Header/index";
import contents from "./Component/Content/index";
export default {
  data() {
    return {};
  },
  components: {
    leftmenu,
    headers,
    contents,
  },
};
</script>