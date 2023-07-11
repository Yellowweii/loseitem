// components/viewcard/viewcard.js
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
    infoone: []
  },

  /**
   * 组件的方法列表
   */
  methods: {
    todetail(e){
      const index = e.currentTarget.dataset.index
      wx.navigateTo({
        url: `/pages/infodetail/infodetail?index=${index}`,
      })
    },
  },
  pageLifetimes:{
    show(){
      this.setData({
        infoone: wx.getStorageSync('infoone')
      })
    }
  }
})
