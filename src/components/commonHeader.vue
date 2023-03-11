<template>
  <div class="header-container">
    <div class="left-content">
      <el-button
        @click="handleMenu"
        icon="el-icon-menu"
        size="mini"
      ></el-button>
      <el-button
        @click="handleMenu"
        icon="el-icon-menu"
        size="mini"
      ></el-button>
      <!-- 面包屑 -->
      <el-breadcrumb separator="/">
        <el-breadcrumb-item
          v-for="item in tags"
          :key="item.path"
          :to="{ path: item.path }"
          >{{ item.label }}</el-breadcrumb-item
        >
      </el-breadcrumb>
    </div>
    <div class="right-content">
      <el-dropdown>
        <span class="el-dropdown-link">
          <img class="user" src="../assets/images/user.png" alt="" />
        </span>
        <el-dropdown-menu slot="dropdown">
          <el-dropdown-item>个人中心</el-dropdown-item>
          <el-dropdown-item>退出</el-dropdown-item>
          <el-dropdown-item>螺蛳粉</el-dropdown-item>
          <el-dropdown-item disabled>双皮奶</el-dropdown-item>
          <el-dropdown-item divided>蚵仔煎</el-dropdown-item>
        </el-dropdown-menu>
      </el-dropdown>
    </div>
  </div>
</template>

<script>
import { mapState } from "vuex";
export default {
  data() {
    return {};
  },
  methods: {
    handleMenu() {
      this.$store.commit("collapseMenu");
    },
  },
  computed: {
    ...mapState({
      tags: (state) => state.tab.tableList,
    }),
  },
  mounted() {
    console.log(this.tags);
  },
};
</script>

<style lang="less" scoped>
.header-container {
  padding: 0 20px;
  height: 60px;
  background-color: #333;
  display: flex;
  justify-content: space-between;
  align-items: center;
}
.left-content {
  .text {
    color: #fff;
    font-size: 14px;
    margin-left: 10px;
  }
  display: flex;
  align-items: center;
  .el-breadcrumb ::v-deep .el-breadcrumb__inner {
    font-weight: normal;
    color: #666 !important;
  }

  .el-button {
    margin-right: 20px;
  }
}
.right-content {
  .user {
    width: 40px;
    height: 40px;
    border-radius: 50%;
  }
}

.el-dropdown-link {
  cursor: pointer;
  color: #409eff;
}
.el-icon-arrow-down {
  font-size: 12px;
}
</style>