// components/w-tab-control/w-tab-control.js
Component({
  /**
   * 组件的属性列表
   */
  properties: {
    titles:{
      type:Array,
      value:[],
    }
  },

  /**
   * 组件的初始数据
   */
  data: {
    currentIndex:0,
  },


  /**
   * 组件的方法列表
   */
  methods: {
    itemClick(event) {
      const currentIndex = event.currentTarget.dataset.index;
      console.log(currentIndex);
      this.setData({
        currentIndex: currentIndex,
      })

      //将自定义组件的点击事件发出
      const data = {
        index:this.data.currentIndex,
      }
      console.log(data);
      this.triggerEvent("tabClick",data,{});
      
    },
  }
})
