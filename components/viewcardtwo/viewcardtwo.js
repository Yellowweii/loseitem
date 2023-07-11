// components/viewcardtwo/viewcardtwo.js
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
    infotwo: []
  },

  /**
   * 组件的方法列表
   */
  methods: {
    todetail(e){
      const index = e.currentTarget.dataset.index
      wx.navigateTo({
        url: `/pages/infodetailtwo/infodetailtwo?index=${index}`,
      })
    },
  },
  pageLifetimes:{
    show(){
      this.setData({
        infotwo: wx.getStorageSync('infotwo')
      })
    }
  }
})
