import request from '@/utils/request'
/**
 * 获取组织架构
 * @returns
 */

export const getDeptsApi = () => {
  return request({
    method: 'get',
    url: '/company/department'
  })
}
/**
 * 根据ID删除部门
 * @returns
 */

export const DelDeptsApi = (id) => {
  return request({
    method: 'DELETE',
    url: `/company/department/${id}`
  })
}
/**
 * 添加部门
 * @returns
 */

export const addDeptsApi = (data) => {
  return request({
    method: 'POST',
      url: '/company/department',
    data
  })
}