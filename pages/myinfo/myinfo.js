// pages/myinfo/myinfo.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    userinfo: '',
    flag: false,
    phone: ''
  },
  edit(){
    this.setData({
      flag: !this.data.flag
    })
  },
  getphone(e){
      console.log(e);
      this.setData({
        phone: e.detail.value
      })
  },
  delete(){
      this.setData({
        phone: ''
      })
  },
  save(){
      let reg = /^(13[0-9]|14[01456879]|15[0-35-9]|16[2567]|17[0-8]|18[0-9]|19[0-35-9])\d{8}$/
      if(!reg.test(this.data.phone)){
        wx.showToast({
          title: '手机号格式不对！',
          icon: 'none'
        })
        return
      }
     let userinfo = wx.getStorageSync('userinfo')
     userinfo = {...userinfo,phone: this.data.phone}
     wx.setStorageSync('userinfo', userinfo)
     this.setData({
       flag: false
     })
  },
  /**
   * 生命周期函数--监听页面加载
   */
  onLoad(options) {
      this.setData({
        userinfo: wx.getStorageSync('userinfo'),
        phone: wx.getStorageSync('userinfo').phone
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