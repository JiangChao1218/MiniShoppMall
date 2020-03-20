import request from './network.js'

// 将首页获取的数据独立封装
export function getMultiData(){
  return request({
    url: '/home/multidata',
  })
}