// pages/detail/detail.js
import {

  getDetail,
  GoodsBaseInfo

} from "../../service/detail.js"

Page({

  /**
   * 页面的初始数据
   */
  data: {
    iid:'1m7c6iu',//
    topImages:[],
    baseInfo:{}
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {

    console.log(options.iid);
    let iid  = options.iid;
    this.setData({
      iid
    });
    // 1.请求详情数据
    this._getDetailData();
  },

  //获取详情数据 
  _getDetailData(){

    let iid = this.data.iid;
    getDetail(iid).then(res => {

      console.log(res);
      const data = res.data.result;
       // 1.取出顶部的轮播图片
      let topImages = data.itemInfo.topImages;
      // 2.创建BaseInfo对象
      
      const baseInfo = new GoodsBaseInfo(data.itemInfo, data.columns, data.shopInfo.services);

      
      this.setData({
        topImages,
        baseInfo
      });
      console.log(this.data.topImages);



    });
  },
  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function () {

  },

  /**
   * 生命周期函数--监听页面显示
   */
  onShow: function () {

  },

  /**
   * 生命周期函数--监听页面隐藏
   */
  onHide: function () {

  },

  /**
   * 生命周期函数--监听页面卸载
   */
  onUnload: function () {

  },

  /**
   * 页面相关事件处理函数--监听用户下拉动作
   */
  onPullDownRefresh: function () {

  },

  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom: function () {

  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function () {

  }
})