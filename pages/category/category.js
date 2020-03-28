// pages/category/category.js
import{
  getCategory,
  getSubcategory,
  getCategoryDetail
}from "../../service/category.js"

Page({

  /**
   * 页面的初始数据
   */
  data: {

    categorys:[],//菜单栏数据
    categorydata:{
    subcategorys: [],//当前类别数据
    categoryDetails: []//类别详情数据
    },
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    this._getData();
  },


  // item 点击事件
  onItemClick(event) {

    console.log(event.detail);
    //请求当前点击类别的数据
    this._getSubcategory(event.detail);
    this._getCategoryDetail(event.detail)
  },

  // 页面显示时加载数据
  _getData(){
    this._getCategory();
  },

  /***
   * 获取分类菜单列表
   */
  _getCategory(){
    getCategory().then(res =>{
      // console.log(res);
        // 1.获取categories
      const list = res.data.data.category.list;
      // console.log(list);
      // 3.修改data中的数据
      this.setData({
        categorys: list,
      })

      // 4.请求第一个类别的数据
      this._getSubcategory(0);
      //5. 请求第一个类别的具体数据详情
      this._getCategoryDetail(0);

    });

  },

  //**获取对应分类菜单数据 */
  _getSubcategory(index) {
    //取出对应menu中的maitkey值
    const maitKey = this.data.categorys[index].maitKey;
    getSubcategory(maitKey).then(res => {
      // console.log(res);

      const subcategorys = res.data.data.list;
      const categorydata = this.data.categorydata; 
      categorydata.subcategorys = subcategorys; 

      this.setData({
        categorydata: categorydata,
      });


    });
  },

 // 请求分类详情数据
  _getCategoryDetail(index) {


    const miniWallKey = this.data.categorys[index].miniWallkey;
  
    //this._getRealCategoryDetail(index, miniWallKey,"pop");
    //this._getRealCategoryDetail(index, miniWallKey, "new");
    this._getRealCategoryDetail(index, miniWallKey, "sell");

  },

  // 请求分类详情数据
  _getRealCategoryDetail(index, miniWallKey,type){
    getCategoryDetail(miniWallKey, type).then(res=>{
      // console.log(res);

      const categorydata = this.data.categorydata;
      const list = res.data;
      categorydata.categoryDetails = list;
      
      this.setData({
        categorydata: categorydata,
      });
      //console.log(this.data.categorydata);

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