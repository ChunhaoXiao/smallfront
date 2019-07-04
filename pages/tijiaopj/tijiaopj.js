// pages/tijiaopj/tijiaopj.js
Page({
  data: {
    length: 0
  },

  btn: function (e) {
    this.setData({
      length: e.detail.value.length
    })
  }
})