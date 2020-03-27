// pages/category/category.js
import{
  getCategory,
  getSubcategory
}from "../../service/category.js"

Page({

  /**
   * 页面的初始数据
   */
  data: {
    categorys:{
      type:Array,
      value:[],
    }
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {

    this._getCategory();

  },

  // item 点击事件
  onItemClick(event) {

    console.log(event.detail);
    this._getSubcategory(event.detail);
  },

  // 
  _getSubcategory(index){
    getSubcategory(index).then( res => {
      console.log("成功");
      console.log(res);
    }).catch(res =>{
      console.log("失败");
    })
  },

  _getCategory(){
    
    getCategory().then(res =>{
      console.log(res);
      const list = res.data.data.category.list;
      console.log(list)
      this.setData({
        categorys: list,
      })
    }).catch(res =>{

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