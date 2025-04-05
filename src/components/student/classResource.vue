<template>
  <div class="root_style">
    <!-- 课程的章节信息 -->
    <el-collapse v-model="activeName" accordion>
      <el-collapse-item name="1" class="class_chapter">
        <template #title>
          <span>第一章</span>
        </template>
        <div class="class_chapter_resource">
          <div class="class_chapter_resource_item">
            <div style="margin-right: 10px">
              <img src="../../assets/img/视频.png" alt="" width="20" />
            </div>
            <div style="font-weight: 700">goland入门.mp4</div>
            <el-button type="success" style="margin-left: auto" round>查看</el-button>
          </div>
          <div class="class_chapter_resource_item">
            <div style="margin-right: 10px">
              <img src="../../assets/img/视频.png" alt="" width="20" />
            </div>
            <div style="font-weight: 700">goland入门.mp4</div>
            <el-button type="success" style="margin-left: auto" round>查看</el-button>
          </div>
        </div>
      </el-collapse-item>
      <el-collapse-item name="2" class="class_chapter">
        <template #title>
          <span>第一章</span>
        </template>
        <div class="class_chapter_resource">
          <div class="class_chapter_resource_item">
            <div style="margin-right: 10px">
              <img src="../../assets/img/视频.png" alt="" width="20" />
            </div>
            <div style="font-weight: 700">goland入门.mp4</div>
            <el-button type="success" style="margin-left: auto" round @click="pushResourcePreview"
              >查看</el-button
            >
          </div>
          <div class="class_chapter_resource_item">
            <div style="margin-right: 10px">
              <img src="../../assets/img/视频.png" alt="" width="20" />
            </div>
            <div style="font-weight: 700">goland入门.mp4</div>
            <el-button type="success" style="margin-left: auto" round>查看</el-button>
          </div>
        </div>
      </el-collapse-item>
      <el-collapse-item name="3" class="class_chapter">
        <template #title>
          <span>第一章</span>
        </template>
        <div class="class_chapter_resource">
          <div class="class_chapter_resource_item">
            <div style="margin-right: 10px">
              <img src="../../assets/img/视频.png" alt="" width="20" />
            </div>
            <div style="font-weight: 700">goland入门.mp4</div>
            <el-button type="success" style="margin-left: auto" round>查看</el-button>
          </div>
          <div class="class_chapter_resource_item">
            <div style="margin-right: 10px">
              <img src="../../assets/img/视频.png" alt="" width="20" />
            </div>
            <div style="font-weight: 700">goland入门.mp4</div>
            <el-button type="success" style="margin-left: auto" round>查看</el-button>
          </div>
        </div>
      </el-collapse-item>
    </el-collapse>
  </div>
</template>

<script setup>
import { ref } from 'vue'
import { useRouter } from 'vue-router'

const router = useRouter()

const pushResourcePreview = () => {
  router.push({
    name: 'ResourcePreview',
    query: {
      chapter: {
        id: 1,
      },
    },
  })
}
</script>

<style lang="scss" scoped>
.root_style {
  padding: 20px;
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
  background-color: white;
}

::v-deep(.el-collapse-item__wrap) {
  background-color: white;
}
</style>
