// pages/home/home.js
import { 
  getMultiData 
} from "../../service/home.js"

Page({

  /**
   * 页面的初始数据
   */
  data: {
    banners:[],
    recommends:[],
    currentIndex :0,
    titles:['流行','新款','精选'],
    dataList: [],
  },

  // 监听
  handleTabClick(event){
    console.log(event);
    const tab_index = event.detail.index;
    console.log(tab_index);
  },
 

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function () {
    getMultiData().then(res =>{
       console.log(res)
        //轮播图数据
      let datalists = [];
      const banners = res.data.data.banner.list;
      for (let i = 0; i < banners.length; i++){
        datalists[i] = banners[i];
      }
      console.log(datalists);
        //推荐数据
      const recommends = res.data.data.recommend.list;
      for (let i = 0; i < recommends.length; i++) {
        datalists[i+4] = recommends[i];
      }
      console.log(datalists);

        //将数据保存到data中
        this.setData({
            banners: banners,
            recommends: recommends,
            dataList: datalists
        })
    }).catch(res =>{

      console.log(res)

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