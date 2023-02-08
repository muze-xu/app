<template>
  <el-container>
    <el-aside width="200px">
      <common-aside />
    </el-aside>
    <el-container>
      <el-header>
        <common-header />
      </el-header>
      <el-main>
        <h1>我是main</h1>
        <router-view></router-view>
      </el-main>
    </el-container>
  </el-container>
</template>

<script>
import commonAside from '@/components/commonAside.vue';
import commonHeader from '@/components/commonHeader.vue'
export default {
  data() {
    return {};
  },
  components: {
    commonAside,
    commonHeader,
  },
};
</script>

<style lang="less" scoped>
.el-header{
  padding:0pt;
}
</style>