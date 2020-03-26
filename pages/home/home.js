// pages/home/home.js
import {
  getMultiData,
  getProductData
} from "../../service/home.js"

const types = ['pop', 'new', 'sell']
const TOP_DISTANCE = 1000;
const FIXED_DISTANCE = 500;
Page({

  /**
   * 页面的初始数据
   */
  data: {
    banners: [],
    recommends: [],
    currentIndex: 0,
    titles: ['流行', '新款', '精选'],
    dataList: [],
    showBackTop:false,
    isTabFixed:false,
    tabScrollTop:0,
    currentType: 'pop',
    goods: {
      'pop': {
        'page': 0,
        list: []
      },
      'new': {
        'page': 0,
        list: []
      },
      'sell': {
        'page': 0,
        list: []
      }
    }
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function() {
    this._getMultiData();

    // 获取 流行 新款 推荐 数据
    this._getProductData('pop');
    this._getProductData('new');
    this._getProductData('sell');
  },

  /********************网络请求函数**************************/
  _getProductData(type) {
    const page = this.data.goods[type].page + 1;

    getProductData(type, page).then(res => {

      //console.log(res);
      //1.取出数据
      const list = res.data.data.list;
      // 2.将数据临时获取
      const goods = this.data.goods;
      goods[type].list.push(...list);
      goods[type].page += 1;

      this.setData({
        goods: goods,
      })


    }).catch(res => {
      console.log(res);
    });

  },

  _getMultiData() {
    getMultiData().then(res => {
      // console.log(res)
      //轮播图数据
      let datalists = [];
      const banners = res.data.data.banner.list;
      for (let i = 0; i < banners.length; i++) {
        datalists[i] = banners[i];
      }
      //console.log(datalists);
      //推荐数据
      const recommends = res.data.data.recommend.list;
      for (let i = 0; i < recommends.length; i++) {
        datalists[i + 4] = recommends[i];
      }
      // console.log(datalists);

      //将数据保存到data中
      this.setData({
        banners: banners,
        recommends: recommends,
        dataList: datalists
      })
    }).catch(res => {
      // console.log(res)
    })
  },

  /********************网络请求函数**************************/

  /*******************监听事件监听函数***********************/
  handleTabClick(event) {
   // console.log(event);
    const tab_index = event.detail.index;
    const type = types[tab_index];
   // console.log(type);
    this.setData({
      currentType: type,
    })

  },

  // 监听回到顶部的点击事件
  handerBackTop(){
   // console.log("回到顶部");
    wx.pageScrollTo({
      scrollTop:0,
      duration:0,
    })
  },

  // 监听滑动时间
  onPageScroll(option){

    const scrollTop = option.scrollTop;
  //  console.log(scrollTop);

    const flag1 = scrollTop >= TOP_DISTANCE;
    if (flag1!=this.data.showBackTop){
      this.setData({
        showBackTop: flag1,
      })
    }

    const flag2 = scrollTop >= this.data.tabScrollTop;
    if (flag2 != this.data.isTabFixed){
      this.setData({
        isTabFixed: flag2,
      })
    }
    
  },

  handleImageLoad(){
  //  console.log("图片加载完成");
    const that = this;
    wx.createSelectorQuery().select("#tab-control").boundingClientRect(function(res){
      // console.log("监听tab 显示的位置", res.top);
      that.data.tabScrollTop = res.top;
  //    console.log("监听tab 显示的位置", that.data.tabScrollTop);
    }).exec();
  },
  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function() {

  },

  /**
   * 生命周期函数--监听页面显示
   */
  onShow: function() {

  },

  /**
   * 生命周期函数--监听页面隐藏
   */
  onHide: function() {

  },

  /**
   * 生命周期函数--监听页面卸载
   */
  onUnload: function() {

  },

  /**
   * 页面相关事件处理函数--监听用户下拉动作
   */
  onPullDownRefresh: function() {

  },

  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom: function() {
  //  console.log("上拉加载更多");
    this._getProductData(this.data.currentType);
  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function() {

  }
})