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
/**
 * 获取员工列表
 * @returns
 */
export const getEmployListApi = (data) => {
  return request({
    method: 'get',
      url: '/sys/user',
    params: data
  })
}

/**
 * 删除员工接口
 * ****/

export function delEmployeeApi(id) {
  return request({
    url: `/sys/user/${id}`,
    method: 'delete'
  })
}


/**
 * 新增员工接口
 * ****/

export function AddEmployeeApi(data) {
  return request({
    url: '/sys/user',
    method: 'POST',
    data
  })
}

/**
 * 批量导入员工
 * ****/

export function ImportEmployeeApi(data) {
  return request({
    url: '/sys/user/batch',
    method: 'POST',
    data
  })
}
/** *
 *  读取用户详情的基础信息
 * **/
export function getPersonalDetail(id) {
  return request({
    url: `/employees/${id}/personalInfo`
  })
}
/** *
 *  更新用户详情的基础信息
 * **/
export function updatePersonal(data) {
  return request({
    url: `/employees/${data.userId}/personalInfo`,
    method: 'put',
    data,
  })
}
