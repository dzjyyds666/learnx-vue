<template>
  <div>
    <router-view></router-view>
  </div>
</template>

<script setup>
import { onMounted } from 'vue'
import { useRouter } from 'vue-router'

const router = useRouter()

onMounted(() => {
  // 从缓存中获取用户信息
  const role = localStorage.getItem('role')
  if (role == 2) {
    // 如果是教师，跳转到教师首页
    router.push({ path: '/teacherHome' })
  } else if (role == 1) {
    // 如果是学生，跳转到学生首页
    console.log('学生')
    // router.push({ path: '/studentHome' })
  } else {
    // 如果是管理员，跳转到管理员首页
    console.log('管理员')
    // router.push({ path: '/adminHome' })
  }
})
</script>

<style lang="scss" scoped></style>
