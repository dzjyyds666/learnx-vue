<template>
  <div class="student_class_info">
    <div class="class_info_header">
      <div class="header_back">
        <el-icon size="30" @click="$router.back"><ArrowLeftBold /></el-icon>
      </div>

      <div class="header_title">golang</div>
    </div>
  </div>
</template>

<script setup></script>

<style lang="scss" scoped>
.student_class_info {
  width: 100vw;
  height: 100vh;

  .class_info_header {
    width: 100%;
    height: 8%;
    background-color: var(--primary-color);
    display: flex;
    align-items: center;
    color: white;

    .header_back {
      margin-left: 20px;
      :hover {
        color: var(--accent-color);
      }
    }

    .header_title {
      margin-left: 20px;
      font-size: 30px;
      line-height: 100%;
    }
  }
}
</style>
