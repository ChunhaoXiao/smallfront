var newsData = require("../data_refund/data_refund.js")
Page({

  /**
   * 页面的初始数据
   */
  data: {
    tel: '13154295478',
    zhao1: 'display:none',
    useData:""
  },

  calclick: function() {
    this.setData({
      zhao1:'display:block'
    })
  },
  telclick: function() {
    wx.makePhoneCall({
      phoneNumber: '13154295478'
    })
  },
  
  telclose: function() {
    this.setData({
      zhao1: 'display:none'
    })
  },
  zhaothis: function() {
    this.setData({
      zhao1: 'display:none'
    })
  },
  content:function() {
    wx.navigateTo({
      url: '/pages/refund_schedule/refund_schedule',
    })
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    this.setData({
      useData:newsData.initData
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