// custom-tab-bar/index.js
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
    list: [
      {
      pagePath: "../index/index",
      text: "首页",
      iconPath: "../images/index.png",
      selectedIconPath: "../images/index-ed.png",
      type: 0
    },
    {
      pagePath: "../classify/classify",
      text: "分类",
      iconPath: "../images/classify.png",
      selectedIconPath: "../images/classify-ed.png",
      type: 0
    },
    {
        type: 1
    },
    {
      pagePath: "../collect/collect",
      text: "收集",
      iconPath: "../images/collect.png",
      selectedIconPath: "../images/collect-ed.png",
      type: 0
    },
    {
      pagePath: "../me/me",
      text: "我的",
      iconPath: "../images/me.png",
      selectedIconPath: "../images/me-ed.png",
      type: 0
    }
  ],
  select: 0
  },

  /**
   * 组件的方法列表
   */
  methods: {
      selectpage(e){
          if( e.currentTarget.dataset.type === 1){
              wx.navigateTo({
                url: '/pages/publish/publish',
              })
          }
          else{
            wx.switchTab({
              url: e.currentTarget.dataset.page,
            })
          }
      }
  }
})
