import request from '@/utils/request'
/**
 * 获取员工简单列表
 * @returns
 */

export const getEmployApi = () => {
  return request({
    method: 'get',
    url: '/sys/user/simple'
  })
}