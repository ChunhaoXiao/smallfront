var newsData = require("../Data/data.js")
Page({

  /**
   * 页面的初始数据
   */
  data: {
    tel: '17640320530',
    zhao1: 'display:none',
    useData: "" ,
    iphone: ""
  },
  
  callclick: function () {
    var number = this.data.useData[0].tel1
    this.setData({
      zhao1: 'displya:block',
      iphone: number
    })
  },

  callclick1: function () {
    var number = this.data.useData[0].tel2
    this.setData({
      zhao1: 'displya:block',
      iphone: number
    })
  },

  telclick:function () {
    wx.makePhoneCall({
      phoneNumber: this.data.iphone
    })
  },

  telclose:function () {
    this.setData({
      zhao1: 'display:none'
    })
  },
  zhaodis:function () {
    this.setData({
      zhao1: 'display:none'
    })
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    this.setData({
      useData: newsData.initData
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