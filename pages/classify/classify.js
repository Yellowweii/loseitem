// pages/classify/classify.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
      asidebar: ['卡片、证书类','生活用品','数码产品','美妆护肤类','衣服物品类','饰品','文娱','其他'],select: 0
  },
  click(e){
    this.setData({
      select: e.currentTarget.dataset.id
    })
  },
  tosearch(){
    wx.navigateTo({
      url: '/pages/search/search',
    })
  },
  /**
   * 生命周期函数--监听页面加载
   */
  onLoad(options) {
    this.getTabBar().setData({
      select: 1
    })
  },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady() {

  },

  /**
   * 生命周期函数--监听页面显示
   */
  onShow() {

  },

  /**
   * 生命周期函数--监听页面隐藏
   */
  onHide() {

  },

  /**
   * 生命周期函数--监听页面卸载
   */
  onUnload() {

  },

  /**
   * 页面相关事件处理函数--监听用户下拉动作
   */
  onPullDownRefresh() {

  },

  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom() {

  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage() {

  }
})