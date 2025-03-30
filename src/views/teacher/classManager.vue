<template>
  <div class="home">
    <div class="class_manage_header">
      <div style="padding: 10px">
        <el-icon class="el_icon_style" size="40" @click="$router.back"><ArrowLeftBold /></el-icon>
      </div>
      <div>golang</div>
    </div>
    <div class="sidebar">
      <el-menu default-active="1" class="side_bar_menu" :collapse="isCollapse">
        <el-menu-item index="1" @click="navIndex = 1">
          <el-icon><Reading /></el-icon>
          <template #title>课程管理</template>
        </el-menu-item>
        <el-menu-item index="2" @click="navIndex = 2">
          <el-icon><Folder /></el-icon>
          <template #title>学习资源</template>
        </el-menu-item>
        <el-menu-item index="3" @click="navIndex = 3">
          <el-icon><User /></el-icon>
          <template #title>学生管理</template>
        </el-menu-item>
        <el-menu-item index="4" @click="navIndex = 4">
          <el-icon><DataAnalysis /></el-icon>
          <template #title>学情数据</template>
        </el-menu-item>
        <el-menu-item index="5" @click="navIndex = 5">
          <el-icon><EditPen /></el-icon>
          <template #title>课程作业</template>
        </el-menu-item>
        <el-menu-item index="6" @click="navIndex = 6">
          <el-icon><EditPen /></el-icon>
          <template #title>视频测试</template>
        </el-menu-item>
        <el-menu-item index="7" @click="navIndex = 7">
          <el-icon><EditPen /></el-icon>
          <template #title>上传测试</template>
        </el-menu-item>
      </el-menu>
    </div>
    <div class="main_content">
      <classManage v-if="navIndex === 1" />
      <classResource v-if="navIndex === 2" />
      <classStudent v-if="navIndex === 3" />
      <classData v-if="navIndex === 4" />
      <classHomeWork v-if="navIndex === 5" />
      <videoPlayer
        videoUrl="https://sf1-cdn-tos.huoshanstatic.com/obj/media-fe/xgplayer_doc_video/hls/xgplayer-demo.m3u8"
        videoType="application/x-mpegURL"
        width="600px"
        height="400px"
        v-if="navIndex === 6"
      />
      <upload v-if="navIndex === 7" />
    </div>
  </div>
</template>

<script setup>
import { ref } from 'vue'
import classManage from '../../components/teacher/console_class_manage.vue'
import classResource from '../../components/teacher/console_class_resource.vue'
import classStudent from '../../components/teacher/console_class_student.vue'
import classData from '../../components/teacher/console_class_data.vue'
import classHomeWork from '../../components/teacher/console_class_homework.vue'
import videoPlayer from '../../components/common/video_player.vue'
import upload from '../../components/common/upload.vue'

const navIndex = ref(1)

const isCollapse = ref(false)
</script>

<style lang="scss" scoped>
.home {
  width: 100vw;
  height: 100vh;
  background-color: var(--light-bg);
  display: flex;
  // 换行
  flex-wrap: wrap;
  .class_manage_header {
    width: 100%;
    height: 8%;
    background-color: var(--primary-color);
    display: flex;
    align-items: center;
    div {
      color: var(--light-text);
      margin-left: 10px;
      .el_icon_style {
        :hover {
          color: var(--secondary-color);
        }
      }
    }
    > div:last-child {
      font-size: 1.5rem;
    }
  }

  .sidebar {
    width: 15%;
    height: 92%;
    background-color: var(--light-bg);
    .side_bar_menu {
      height: 100%;
    }
  }
  .main_content {
    width: 85%;
    height: 92%;
    // 超出页面可以滑动
    overflow: auto;
  }
}
</style>
