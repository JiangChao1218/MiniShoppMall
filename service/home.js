import request from './network.js'

// 将首页获取的数据独立封装
export function getMultiData(){
  return request({
    url: '/home/multidata',
  })
}

/************获取首页中的 流行 新款 精选等数据************* */
export function getProductData(type,page){
  return request({
    url: '/home/data',
    data:{
      type,
      page
    }
  })
}