// pages/home/childCpns/w-recommend/w-recommend.js
Component({
  /**
   * 组件的属性列表
   */
  properties: {
    list:{
      type:Array,
      value:[]
    }
  },

  /**
   * 组件的初始数据
   */
  data: {
    isLoad:false,
  },

  /**
   * 组件的方法列表
   */
  methods: {
    // 图片加载完后回调函数
    handleImagLoad(){
      if (!this.data.isLoad){
        console.log("图片加载完成");
        this.data.isLoad = true;
        this.triggerEvent('imageload');
      }
    }
  }
})
