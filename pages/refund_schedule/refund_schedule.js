// pages/index/refund.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    time: '退款将于7个工作日内退回',
    name: '大连海昌发现王国一日游（日/夜场）',
    showtime: '有效期：2018.02.18-2018.03.28',
    manei: '￥199',
    length: '3',
    tel:"13130050030",
    zhedis: 'display:none',
    list: [
      { bian: '退款编号', number: '271036501' },
      { bian: '申请时间', number: '2018-9-2 17:58:05' },
      { bian: '买家姓名', number: '张三' },
      { bian: '买家电话', number: '13000252012' },
      { bian: '退款总金额', number: '￥199' },
      { bian: '退回微信零钱', number: '￥199' },
    ]
  },

  onLoad: function (e) {
    var thisname = this.data.name;
    var thislenght = thisname.length;
    var sub = thisname.substring(0, 17);

    this.setData({
      name: sub,
    })
  },

  click: function () {
    this.setData({
      zhedis: 'display:block'
    })
  },

 
  telclick: function () {
    var that = this
    wx.makePhoneCall({
      phoneNumber: that.data.tel
    })
  },

  telclose: function () {
    this.setData({
      zhedis: 'display:none'
    })
  },

})