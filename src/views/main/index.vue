<template>
  <el-container>
    <el-aside width="200px">
      <common-aside />
    </el-aside>
    <el-container>
      <el-header>Header</el-header>
      <el-main>
        <h1>我是main</h1>
        <router-view></router-view>
      </el-main>
    </el-container>
  </el-container>
</template>

<script>
import commonAside from "@/components/commonAside.vue";
export default {
  data() {
    return {};
  },
  components: {
    commonAside,
  },
};
</script>

<style>

</style>