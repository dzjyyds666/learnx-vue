import { createRouter, createWebHistory } from 'vue-router'
import Home from '@/views/home.vue'
import Login from '@/views/login.vue'
import TeacherHome from '@/views/teacher/teacherHome.vue'
import classManager from '@/views/teacher/classManager.vue'
import studentHome from '@/views/student/student_home.vue'
import studentClassInfo from '@/views/student/student_class_info.vue'
import resourcePreview from '@/components/common/resource_preview.vue'

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home,
    meta: { requiresAuth: true },
  },
  {
    path: '/login',
    name: 'Login',
    component: Login,
  },
  {
    path: '/teacherHome',
    name: 'TeacherHome',
    component: TeacherHome,
    meta: { requiresAuth: true },
  },
  {
    path: '/teacher/class_manage',
    name: 'ClassManager',
    component: classManager,
    meta: { requiresAuth: true },
  },
  {
    path: '/studentHome',
    name: 'StudengHome',
    component: studentHome,
    meta: { requiresAuth: true },
  },
  {
    path: '/student/class_info',
    name: 'StudentClassInfo',
    component: studentClassInfo,
    meta: { requiresAuth: true },
  },
  {
    path: '/resource/preview',
    name: 'ResourcePreview',
    component: resourcePreview,
    props: true,
    meta: { requiresAuth: true },
  },
]

const router = createRouter({
  history: createWebHistory(),
  routes,
})

router.beforeEach((to, from, next) => {
  const token = localStorage.getItem('token')
  if (to.matched.some((record) => record.meta.requiresAuth)) {
    if (!token) {
      next({ name: 'Login' })
    } else {
      next()
    }
  } else {
    next()
  }
})

export default router
