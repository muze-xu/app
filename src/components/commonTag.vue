<template>
  <div class="tabs">
    <el-tag
      v-for="(item, index) in tags"
      :key="item.path"
      :closable="item.name !== 'home'"
      :effect="$route.name === item.name ? 'dark' : 'plain'"
      size="small"
      @click="changeMenu(item)"
      @close="handleClose(item, index)"
    >
      {{ item.label }}
    </el-tag>
  </div>
</template>

<script>
import { mapState, mapMutations } from "vuex";
export default {
  data() {
    return {};
  },
  computed: {
    ...mapState({
      tags: (state) => state.tab.tableList,
    }),
  },
  mounted() {
    console.log(this.$route.name);
  },
  methods: {
    ...mapMutations(["closeTag"]),
    // 点击tag跳转的功能
    changeMenu(item) {
      console.log(item);
      this.$router.push(item.path);
    },
    // 删除tag的功能
    handleClose(item, index) {
      // 调用store中的Mutation
      this.closeTag(index);
      // 删除后的跳转逻辑
      const length = this.tags.length;
      if (item.name !== this.$route.name) {
        return;
      }
      // 表示删除的最后一项
      if (index === length) {
        this.$router.push(this.tags[index - 1].path);
      } else {
        this.$router.push(this.tags[index].path);
      }
    },
  },
};
</script>

<style lang="less" scoped>
.tabs {
  padding: 20px;
  .el-tag{
    margin-right: 15px;
    cursor: pointer;
  }
}
</style>