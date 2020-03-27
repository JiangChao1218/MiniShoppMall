// pages/category/childCpns/w-menu/w-menu.js
Component({
  /**
   * 组件的属性列表
   */
  properties: {
    categorys:{
      type:Array,
      value:[]
    }
  },

  /**
   * 组件的初始数据
   */
  data: {
    currentindex:0
  },

  /**
   * 组件的方法列表
   */
  methods: {
    onItemClick(optings) {
      console.log(optings);
      const index = optings.currentTarget.dataset.index;
      this.setData({
        currentindex: index,
      });
      this.triggerEvent('menuOnItemClick', index,{});
    }
  }
})
