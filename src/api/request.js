import axios from 'axios'
import { ElMessage } from 'element-plus'

export const baseURL = 'http://127.0.0.1:29000/v1'

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
        console.log('token过期')
        // 跳转到登录页面
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
