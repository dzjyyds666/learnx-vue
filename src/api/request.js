import axios from 'axios'
import { ElMessage } from 'element-plus'
import { useRouter } from 'vue-router'

export const baseURL = 'http://127.0.0.1:29000/v1'

const router = useRouter()

export function request(config) {
  // 创建axios实例
  const instance = axios.create({
    // 这里定义每次请求的公共数据，例如全局请求头，api根地址，过期时间等
    // 具体参数可参考axios的官方文档
    baseURL: baseURL,
    timeout: 5000,
  })

  // 拦截请求，如果获取某个请求需要携带一些额外数据
  instance.interceptors.request.use(
    (config) => {
      // 头部添加token
      config.headers.Authorization = localStorage.getItem('token')
      return config
    },
    (err) => {
      console.log(err)
    },
  )

  // 拦截响应
  instance.interceptors.response.use(
    (res) => {
      if (res.status_code == 401) {
        ElMessage.error('登录过期，请重新登录')
        // 跳转到登录页面
        router.push('/login')
      }
      return res.data
    },
    (err) => {
      ElMessage.error('请求失败')
    },
  )

  // 发送请求
  return instance(config)
}
