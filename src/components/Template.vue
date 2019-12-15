<template>
    <el-container class="template">
      <el-aside width="200px">
        <Menu></Menu>
      </el-aside>
      <el-container>
        <el-header>Header</el-header>
        <el-main>
          <router-view></router-view>
        </el-main>
      </el-container>
    </el-container>
</template>

<script>
import Menu from './Menu'

export default {
  components:{
    Menu
  }
};
</script>

<style scoped>
</style>