<template>
  <div class="home">
    <div class="home_header">
      <div class="home_header_1">控制台</div>
      <div class="home_header_2">
        <el-avatar :size="50" src="src/assets/img/avatar.jpeg" />
      </div>
      <div>老师，您好</div>
    </div>
    <div class="sidebar">
      <el-menu default-active="1" @open="handleOpen" @close="handleClose" style="height: 100%">
        <el-menu-item index="1" @click="changeSideBarIndex(1)">
          <el-icon><Notebook /></el-icon>
          <span>我的课程</span>
        </el-menu-item>
        <el-menu-item index="2" @click="changeSideBarIndex(2)">
          <el-icon><CirclePlus /></el-icon>
          <span>添加课程</span>
        </el-menu-item>
        <el-menu-item index="3" @click="changeSideBarIndex(3)">
          <el-icon><Delete /></el-icon>
          <span>回收站</span>
        </el-menu-item>
      </el-menu>
    </div>
    <div class="main_content">
      <classList v-if="sideBarIndex === 1" />
      <classAdd v-if="sideBarIndex === 2" />
      <classCrash v-if="sideBarIndex === 3" />
    </div>
  </div>
</template>

<script setup>
import { ref } from 'vue'
import classList from '../components/console_class_list.vue'
import classAdd from '../components/console_class_add.vue'
import classCrash from '../components/console_class_crash.vue'

const sideBarIndex = ref(1)

const changeSideBarIndex = (index) => {
  sideBarIndex.value = index
}

const handleClose = (key, keyPath) => {
  console.log(key, keyPath)
}

const handleOpen = (key, keyPath) => {
  console.log(key, keyPath)
}
</script>

<style lang="scss" scoped>
.home {
  width: 100vw;
  height: 100vh;
  background-color: var(--light-bg);
  display: flex;
  // 换行
  flex-wrap: wrap;
  .home_header {
    width: 100%;
    background-color: var(--primary-color); // 确保使用 CSS 变量
    height: 10%;
    display: flex;
    align-items: center;
    padding: 0 20px 0 20px;
    color: var(--light-text);
    .home_header_1 {
      font-size: 1.7rem;
    }
    .home_header_2 {
      margin-left: auto;
      margin-right: 20px;
    }
  }

  .sidebar {
    width: 15%;
    height: 90%;
    background-color: var(--light-bg);
  }
  .main_content {
    width: 85%;
    height: 90%;
    // 超出页面可以滑动
    overflow: auto;
  }
}
</style>
