<template>
  <div class="student_home">
    <div class="student_header">
      <h1>LearnX</h1>
      <el-popover placement="bottom-end">
        <template #reference>
          <div class="student_avatar">
            <el-avatar shape="circle" :size="40" src="src/assets/img/avatar.jpeg" />
            <span style="margin-left: 20px">杜智军，你好</span>
          </div>
        </template>
        <div class="profile_popover">
          <el-menu style="width: 100%; border: 0px">
            <el-menu-item>
              <el-icon><User /></el-icon>
              个人信息
            </el-menu-item>
            <el-menu-item>
              <el-icon><Fold /></el-icon>
              退出登录
            </el-menu-item>
          </el-menu>
        </div>
      </el-popover>
    </div>

    <div class="student_body">
      <div class="student_body_left">
        <el-menu default-active="1" style="height: 100%">
          <el-menu-item index="1" @click="navIndex = 1">
            <template #title>
              <el-icon><Collection /></el-icon>
              <span>我的课程</span>
            </template>
          </el-menu-item>
          <el-menu-item index="2" @click="navIndex = 2">
            <template #title>
              <el-icon><Comment /></el-icon>
              <span>社区</span>
            </template>
          </el-menu-item>
        </el-menu>
      </div>
      <div class="student_body_right">
        <studentClass v-if="navIndex === 1" />
      </div>
    </div>
  </div>
</template>

<script setup>
import studentClass from '../../components/student/classList.vue'
import { ref } from 'vue'

const navIndex = ref(1)
</script>

<style lang="scss" scoped>
.student_home {
  width: 100vw;
  height: 100vh;
  display: flex;
  flex-wrap: wrap;
  .student_header {
    padding: 0 30px;
    width: 100%;
    height: 8%;
    background-color: var(--primary-color);
    display: flex;
    align-items: center;
    color: white;

    .student_avatar {
      margin-left: auto;
      display: flex;
      align-items: center;
    }
  }

  .student_body {
    width: 100%;
    height: 92%;
    display: flex;

    .student_body_left {
      width: 15%;
      height: 100%;
    }

    .student_body_right {
      width: 85%;
      height: 100%;
      overflow: auto;
    }
  }
}
</style>
