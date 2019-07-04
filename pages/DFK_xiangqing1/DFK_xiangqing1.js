var thatData = require("../data_order/data_order.js")
Page({

  /**
   * 页面的初始数据
   */
  data: {
    showModal: false
  },

  onLoad: function (options) {
    this.setData({
      orderData:thatData.thisData
    })
  },

  submit: function () {
    this.setData({
      showModal: true
    })
  },
  preventTouchMove: function () {

  },
  go: function () {
    this.setData({
      showModal: false
    })
  }


})