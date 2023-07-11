Page({

  /**
   * 页面的初始数据
   */
  data: {
    flag: true,
    index: '',
    infotwo: []
  },
  getphone(){
      wx.showModal({
        title: '联系方式',
        content: '134xxxx8878',
        confirmText: '复制',
        complete: (res) => {
          if (res.cancel) {

          }
      
          if (res.confirm) {
            wx.setClipboardData({
              data: '13402598878'
            })
          }
        }
      })
  },
  tocollect(){
      this.setData({
        flag: !this.data.flag
      })
      if(!this.data.flag){
        wx.showToast({
          title: '收藏成功',
        })
      }
      else{
        wx.showToast({
          title: '已取消收藏',
          icon: 'none'
        })
      }
  },
  exit(){
    wx.showModal({
      title: '提示',
      content: '您确定要修改该商品状态吗？',
      complete: (res) => {
        if (res.confirm) {
          this.data.infotwo.splice(this.data.index, 1)
          wx.setStorageSync('infotwo', this.data.infotwo)
          wx.switchTab({
            url: '/pages/index/index',
          })
          wx.showToast({
            title: '状态修改成功！',
            icon: 'none'
          })
        }
      }
    })
  },
  /**
   * 生命周期函数--监听页面加载
   */
  onLoad(options) {
      this.setData({
        index: options.index,
        infotwo: wx.getStorageSync('infotwo')
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