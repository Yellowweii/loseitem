// components/tab/tab.js
Component({
  /**
   * 组件的属性列表
   */
  properties: {

  },

  /**
   * 组件的初始数据
   */
  data: {
    i: 0
  },
  /**
   * 组件的方法列表
   */
  methods: {
    click(e){
      this.setData({
        i: e.currentTarget.dataset.i
      })
  }
  }
})
