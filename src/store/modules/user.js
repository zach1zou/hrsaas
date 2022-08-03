import { login, getUserInfoApi, getUserDetailInfoApi } from '@/api/user'
import { setTokenTime } from '@/utils/auth'
export default {
  namespaced: true,
  state: {
    userInfo:localStorage.getItem('userInfo') || {},
    token:localStorage.getItem('token')|| '',
  },
  
  mutations: {
    setToken(state, payload) {
      state.token = payload
    localStorage.setItem('token', payload)
    },
    setUserInfo(state, payload) {
      state.userInfo = payload
       localStorage.setItem('userInfo',payload)
    }
  },
  actions: {
    async getToken(context, payload) {
      const res = await login(payload)
      context.commit('setToken', res)
      setTokenTime()
    },
    async getUserInfo(context) {
      const res = await getUserInfoApi()
      const userDetailInfo = await getUserDetailInfoApi(res.userId)
      context.commit('setUserInfo', { ...res, ...userDetailInfo })
    },
    logout(context) {
      context.commit('setToken', '')
      context.commit('setUserInfo', {})
     }
  }
}
