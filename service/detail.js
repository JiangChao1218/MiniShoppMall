import request from "./network.js"

export function getDetail(iid){
  return request({
    url:"/detail",
    data:{
      iid
    }
  })
}

export class GoodsBaseInfo {
  constructor(itemInfo,columns,services){
    this.title = itemInfo.title;
    this.desc = itemInfo.desc;
    this.newPrice = itemInfo.price;
    this.oldPrice = itemInfo.oldPrice;
    this.discount = itemInfo.discountDesc;
    this.columns = columns;
    this.services = services;
    this.realPrice = itemInfo.lowNowPrice

  }
}
