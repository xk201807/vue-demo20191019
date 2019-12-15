<template>
  <div>
    <el-radio-group v-model="isCollapse" style="margin-bottom: 20px;">
      <el-radio-button :label="false">展开</el-radio-button>
      <el-radio-button :label="true">收起</el-radio-button>
    </el-radio-group>
    <el-menu
      default-active="1-4-1"
      class="el-menu-vertical-demo"
      @open="handleOpen"
      @close="handleClose"
      :collapse="isCollapse"
    >
      <div v-for="(item,index) in tree" v-bind:key="index">
        <el-menu-item v-if="!item.children" :index="item.id">         
          <router-link :to="item.path">
            <i class="el-icon-menu"></i>
            <span v-show="!isCollapse">{{item.title}}</span>
          </router-link>
        </el-menu-item>
        <el-submenu v-else :index="item.id">
          <template slot="title">
            <i class="el-icon-location"></i>
            <span v-show="!isCollapse">{{item.title}}</span>
          </template>
          <el-menu-item-group>
            <!-- <template slot="title">分组一</template> -->
            <router-link v-for="(value,i) in item.children" :key="i" :to="value.path">
              <el-menu-item :index="value.id">{{value.title}}</el-menu-item>
            </router-link>
          </el-menu-item-group>
        </el-submenu>
      </div>
    </el-menu>
  </div>
</template>

<style>
.el-menu-vertical-demo:not(.el-menu--collapse) {
  width: 200px;
  min-height: 400px;
}
</style>

<script>
/* eslint-disable */
export default {
  data() {
    return {
      isCollapse: false,
      tree: [
        {"id":"1", "title": "首页", "path": "/Home" },
        {
          "id":"2","title": "商品",
          "children": [
            { "id":"2-1", "title": "商品列表", "path": "/ProductList" },
            { "id":"2-2", "title": "添加商品", "path": "/ProductList" },
            { "id":"2-3", "title": "商品分类", "path": "/ProductList" },
            { "id":"2-4", "title": "商品类型", "path": "/ProductList" },
            { "id":"2-5", "title": "品牌管理", "path": "/ProductList" }
          ]
        }
      ]
    };
  },
  methods: {
    handleOpen(key, keyPath) {
      console.log(key, keyPath);
    },
    handleClose(key, keyPath) {
      console.log(key, keyPath);
    }
  }
};
</script>