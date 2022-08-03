// 导出一个axios的实例  而且这个实例要有请求拦截器 响应拦截器
import axios from 'axios'
import { Message } from 'element-ui'
import store from '@/store'
import { getTokenTime } from './auth'
import router from '@/router'
const service = axios.create({
  baseURL: process.env.VUE_APP_BASE_API,
  timeout: 5000
}) // 创建一个axios的实例
 service.interceptors.request.use(
async (config) => {
    const token = store.state.user.token
    if (token) {
      const CurrentTime = Date.now()
      const tokenTime = getTokenTime()
      const timeout = 60*60* 1000
      if ((CurrentTime - tokenTime) > timeout) {
        //判断token是否过期
       await store.dispatch('user/logout');
        router.push('/login')
        return Promise.reject(new Error('登录过期'))
      } else {
        config.headers.Authorization = `Bearer ${token}`
      }
    }
    return config
  },
  (error) => {
    return Promise.reject(error)
  }
) // 请求拦截器
service.interceptors.response.use(
  (res) => {
    const { success, data, message } = res.data
    if (success) {
      return data
    }
    Message.error(message)
    return Promise.reject(new Error(message))
  },
  async function (error) {
    // 对响应错误做点什么
    // ES11
    if (error?.response?.status === 401) {
      Message.error('登录过期')
      await store.dispatch('user/logout')
      router.push('/login')
    } else {
      Message.error(error.message)
    }
    return Promise.reject(error)
  }
) // 响应拦截器
export default service // 导出axios实例