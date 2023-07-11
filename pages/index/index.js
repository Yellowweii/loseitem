Page({

  /**
   * 页面的初始数据
   */
  data: {
      imglist: [
        '../../images/picture.jpg',
        '../../images/banner1.jpg',
        '../../images/banner2.jpg',
      ],
      i: 0
  },
  click(e){
      this.setData({
        i: e.currentTarget.dataset.i
      })
  },
  tosearch(){
    wx.navigateTo({
      url: '/pages/search/search',
    })
  },
  todetail(){
    wx.navigateTo({
      url: '/pages/infodetailtest/infodetailtest',
    })
  },
  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
      this.getTabBar().setData({
        select: 0
      })
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
