import request from '@/utils/request'
/**
 * 登录
 * @param {} loginName 用户名
 * @param {} password 密码
 * @param {} code 验证码
 * @param {} clientToken 客户端请求用的token
 * @param {*} loginType 登录类型 0：后台；1：运营运维端；2：合作商后台
 * @returns
 */
export function login(data) {
  return request({
    url: '/sys/login',
    method: 'post',
    data
  })
}
/**
 *获取用户信息
 * @returns
 */
export const getUserInfoApi = () => {
  return request({
    method: 'post',
    url: '/sys/profile'
  })
}

/**
 * @param {string} id 用户id
 *根据Id获取详细信息
 * @returns promise
 */
export const getUserDetailInfoApi = (id) => {
  return request({
    method: 'get',
    url: `/sys/user/${id}`
  })
}