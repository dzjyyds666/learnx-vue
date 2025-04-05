<template>
  <div class="root_style" v-if="chapter">
    <div class="content_resource_list">
      <div style="padding-left: 20px; padding-bottom: 20px; display: flex; align-items: center">
        <el-button circle icon="Back" @click="$router.back"></el-button>
        <div style="margin-left: 20px; font-size: x-large; font-weight: 900; color: white">
          golang
        </div>
      </div>
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
      </el-collapse>
    </div>
    <div class="content_preview">
      <viwePlayer width="70vw" height="100vh" />
    </div>
  </div>

  <div v-else>
    <div
      style="
        height: 100vh;
        width: 100vw;
        display: flex;
        justify-content: center;
        align-items: center;
      "
    >
      <img src="../../assets/img/暂无数据.png" alt="没有数据" width="200px" />
    </div>
  </div>
</template>

<script setup>
import { ref } from 'vue'
import viwePlayer from '@/components/common/video_player.vue'
import { useRoute } from 'vue-router'

const router = useRoute()

const chapter = ref(router.query.chapter || null)

console.log(chapter.value)

const currentResource = ref({ type: 'video' })
</script>

<style lang="scss" scoped>
.root_style {
  width: 100vw;
  height: 100vh;
  display: flex;

  .content_preview {
    width: 70%;
    height: 100vh;
  }

  .content_resource_list {
    width: 30%;
    background-color: var(--dark-bg);
    padding: 20px;
    overflow: auto;

    .class_chapter {
      span {
        color: var(--light-text);
        margin-left: 20px;
      }

      .class_chapter_resource {
        background-color: var(--dark-bg);
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

    ::v-deep(.el-collapse-item__header) {
      background-color: var(--dark-bg);
    }

    ::v-deep(.el-collapse-item__wrap) {
      background-color: var(--dark-bg);
    }

    ::v-deep(.el-collapse-item__arrow) {
      color: white;
    }
  }
}
</style>
