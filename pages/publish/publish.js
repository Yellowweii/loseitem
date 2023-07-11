Page({

  /**
   * 页面的初始数据
   */
  data: {
      flag: false,
      array: ['身份证','校园卡','学生卡','公交卡','银行卡','其他'],
      id: 1,
      index: 0,
      name: '',
      time: '',
      place: '',
      phone: '',
      desc: '',
      publishtime: '',
      imglist: [],
      infoone: [],
      infotwo:[]
  },
  bindMultiPickerChange(e){
      this.setData({
        index: e.detail.value,
        flag: true
      })
  },
  close(){
      this.setData({
        flag: false,
        index: 0
      })
  },
  click(e){
    this.setData({
      id: e.currentTarget.dataset.id
    })
  },
  getname(e){
    this.setData({
      name: e.detail.value.trim()
    })
  },
  gettime(e){
    this.setData({
      time: e.detail.value.trim()
    })
  },
  getplace(e){
    this.setData({
      place: e.detail.value.trim()
    })
  },
  getphone(e){
    this.setData({
      phone: e.detail.value.trim()
    })
  },
  getdesc(e){
    this.setData({
      desc: e.detail.value.trim()
    })
  },
  delete(){
      this.setData({
        desc: ''
      })
  },
  upload(){
     if(this.data.imglist.length >= 6){
        wx.showToast({
          title: '最多发布6张图片！',
          icon: 'none'
        })
        return
     }
     else{
      wx.chooseMedia({
        count: 6 - this.data.imglist.length,
        mediaType: ['image','video'],
        sourceType: ['album', 'camera'],
        camera: 'back',
        success: res => {
          this.setData({
            imglist: [...this.data.imglist, ...res.tempFiles]
          })
          wx.setStorageSync('imglist', this.data.imglist)
        }
      })
     }
  },
  closetwo(e){
    this.data.imglist.splice(e.currentTarget.dataset.id, 1)
    this.setData({
      imglist: this.data.imglist
    })
    wx.setStorageSync('imglist', this.data.imglist)
  },
  backpage(){
      wx.switchTab({
        url: '/pages/index/index',
      })
  },
  topublish(){
     this.setData({
      publishtime: new Date(),
      imglist: wx.getStorageSync('imglist')
    })
      const {flag,name,time,place,phone,desc,id,index,publishtime,imglist} = this.data
      if(!flag || !name || !time || !place || !phone || !desc){
          wx.showToast({
            title: '未填写必填项',
            icon: 'none'
          })
          return
      }
      const obj = {id,index,name,time,place,phone,desc,publishtime,imglist}
      if(id === 1){
        this.setData({
          infoone: [obj,...wx.getStorageSync('infoone')]
        })
        wx.setStorageSync('infoone', this.data.infoone)
        wx.switchTab({
          url: '/pages/index/index',
        })
        wx.showToast({
          title: '发布成功！',
          icon: 'none'
        })
        wx.removeStorageSync('imglist')
      }
      else{
        this.setData({
          infotwo: [obj,...wx.getStorageSync('infotwo')]
        })
        wx.setStorageSync('infotwo', this.data.infotwo)
        wx.switchTab({
          url: '/pages/index/index',
        })
        wx.showToast({
          title: '发布成功！',
          icon: 'none'
        })
        wx.removeStorageSync('imglist')
      }
  },
  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    
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