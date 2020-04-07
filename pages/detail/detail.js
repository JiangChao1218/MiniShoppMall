// pages/detail/detail.js
import {

  getDetail,
  getRecommends,
  GoodsBaseInfo,
  ShopInfo,
  ParamInfo

} from "../../service/detail.js"
const app = getApp()
Page({

  /**
   * 页面的初始数据
   */
  data: {
    iid:'1m7c6iu',//
    topImages:[],
    baseInfo:{},
    shopInfo:{},
    detailInfo:{},
    paramInfo:{},
    commentInfo:{},
    recommends:[]
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

    // 2.请求商品推荐数据
    this._getRecommends();
  },

  //获取详情数据 
  _getDetailData(){

    let iid = this.data.iid;
    getDetail(iid).then(res => {

      console.log(res);
      const data = res.data.result;
       // 1.取出顶部的轮播图片
      let topImages = data.itemInfo.topImages;

      // 2.创建BaseInfo对象并赋值
      const baseInfo = new GoodsBaseInfo(data.itemInfo, data.columns, data.shopInfo.services);
      // console.log(data.shopInfo.services);
    
     
      // 3.创建ShopInfo对象并赋值
      const shopInfo = new ShopInfo(data.shopInfo);
      // 4.获取detailInfo信息
      const detailInfo = data.detailInfo;

      // 5.创建ParamInfo对象
      const paramInfo = new ParamInfo(data.itemParams.info, data.itemParams.rule)
      // 6.获取评论信息
      let commentInfo = {}
      //判断是否有评论并且评论是否大于0
      if(data.rate && data.rate.cRate > 0){
        commentInfo = data.rate.list[0];
      }
      // console.log(commentInfo);
      this.setData({
        topImages,
        baseInfo,
        shopInfo,
        detailInfo,
        paramInfo,
        commentInfo
      });
      // console.log(this.data.topImages);



    });
  },

  _getRecommends(){
    getRecommends().then(res =>{
      console.log("商品推荐数据");
    
      let recommends = this.data.recommends;
      recommends = res.data.data.list;
      console.log(recommends);
      this.setData({
        recommends,
      })
      // console.log(this.data.recommends);
    });
  },

  onAddCart(options){
    console.log("onAddCart------------->");
    console.log(options);
    // 1.获取商品信息对象
    const obj = {};
    obj.iid = this.data.iid;
    obj.imageURL = this.data.topImages[0];
    obj.title = this.data.baseInfo.title;
    obj.desc =this.data.baseInfo.desc;
    obj.price = this.data.baseInfo.realPtice;
   //2.加入购物车列表，保存到共享参数里面 app.js中
   app.addToCart(obj);
  //  3.提示添加成功
  wx.showToast({
    title: '加入购物车成功',
  })
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