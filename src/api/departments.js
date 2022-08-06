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
/**
 * 获取部门详情
 * @returns
 */

export const getDeptsByIdApi = (id) => {
  return request({
    method: 'GET',
      url: `/company/department/${id}`,
  })
}
/**
 * 修改部门详情
 * @returns
 */

export const editDeptsByIdApi = (data) => {
  return request({
    method: 'put',
        url: `/company/department/${data.id}`,
      data
  })
}