// pages/infodetailtest/infodetailtest.js
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
    flag: true,
    index: '',
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
  /**
   * 生命周期函数--监听页面加载
   */
  onLoad(options) {
      this.setData({
        index: options.index
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