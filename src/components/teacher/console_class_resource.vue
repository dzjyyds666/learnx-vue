<template>
  <div class="class_resource">
    <div style="margin: 30px">
      <el-collapse v-model="activeName" accordion>
        <el-collapse-item name="1" class="class_chapter" v-for="item in 3" :key="item">
          <template #title>
            <span>第一章</span>
          </template>
          <div class="class_chapter_resource">
            <div class="class_chapter_resource_item">
              <div style="margin-right: 10px">
                <img src="../../assets/img/视频.png" alt="" width="20" />
              </div>
              <div style="font-weight: 700">goland入门.mp4</div>
              <el-button round type="primary" style="margin-left: auto">允许下载</el-button>
              <el-button round type="success">发布</el-button>
              <el-button round type="danger">删除</el-button>
            </div>
            <div class="class_chapter_resource_item">
              <div style="margin-right: 10px">
                <img src="../../assets/img/视频.png" alt="" width="20" />
              </div>
              <div style="font-weight: 700">goland入门.mp4</div>
              <el-button round type="primary" style="margin-left: auto">允许下载</el-button>
              <el-button round type="success">发布</el-button>
              <el-button round type="danger">删除</el-button>
            </div>
          </div>
        </el-collapse-item>
      </el-collapse>
    </div>
  </div>
</template>

<script setup>
import { ref } from 'vue'

const activeIndex = ref(null)
</script>

<style lang="scss" scoped>
.class_resource {
  background-color: var(--light-bg);
  .class_chapter {
    span {
      margin-left: 20px;
    }

    .class_chapter_resource {
      background-color: white;
      border-radius: 10px;
      margin: 10px;
      padding: 10px;
      .class_chapter_resource_item {
        height: 50px;
        margin: 10px;
        padding: 10px;
        display: flex;
        // 垂直居中
        align-items: center;
        background-color: var(--accent-color);
        border-radius: 10px;
      }
    }
  }
}

::v-deep(.el-collapse-item__header) {
  background-color: var(--light-bg);
}

::v-deep(.el-collapse-item__wrap) {
  background-color: var(--light-bg);
}
</style>
