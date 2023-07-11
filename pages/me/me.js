// pages/me/me.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    color: '#fff',
    login: false,
    userinfo: '',
    celllist: [
      {
        src: '/images/publish.png',
        text: '我的发布',
        page: '/pages/mypublish/mypublish'
      },
      {
        src: '/images/collect-ed.png',
        text: '我的收藏',
        page: '/pages/mycollect/mycollect'
      },
      {
        src: '/images/info.png',
        text: '我的信息',
        page: '/pages/myinfo/myinfo'
      },
      {
        src: '/images/quit.png',
        text: '退出登录'
      }
    ]
  },
  getinfo(){
    wx.getUserProfile({
      desc: '获取用户信息',
      success: res => {
        console.log(res);
        const {avatarUrl, nickName} = res.userInfo
        const userinfo = {
          avatarUrl,
          nickName
        }
        wx.setStorageSync('userinfo', userinfo)
        wx.setStorageSync('login', true)
        this.setData({
          login: true,
          userinfo: wx.getStorageSync('userinfo'),
          color: '#efefef'
        })
      }
    })
  },
  todetail(e){
      if(e.currentTarget.dataset.page){
        wx.navigateTo({
          url: e.currentTarget.dataset.page,
        })
      }
      else{
        wx.showModal({
          title: '提示',
          content: '确定退出吗',
          success: res => {
            if(res.confirm){
              wx.setStorageSync('login', false)
              wx.removeStorageSync('userinfo')
              this.setData({
                login: false
              })
            }
          }
        })
  }
},
  /**
   * 生命周期函数--监听页面加载
   */
  onLoad(options) {
    this.getTabBar().setData({
      select: 4
    })
    if(wx.getStorageSync('login')){
      this.setData({
        login: true,
        userinfo: wx.getStorageSync('userinfo'),
        color: '#efefef'
      })
    }
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