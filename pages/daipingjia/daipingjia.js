var newsData = require("../data_uselist/data_uselist.js")
var iteData = require("../data_pj/data_pj.js")
var initData = require("../data_pay/data_pay.js")
Page({
  
  data: {
    currentTab: 0,
    showModal: false
  },

  // 获取center页面传来的newsid. 用参数e接收
  onLoad:function(e){

/*数组循环代码*/
    this.setData({
      useData:newsData.thisData
    }),

    this.setData({
      initData:iteData.thatData
    })

    this.setData({
      thatData: initData.thisData
    })

    

    // 判断，如果newsid=1。说明点击的是待付款. 那么将currentTab也改为1.相当于待付款页面
    if(e.newsid==1){
      this.setData({
        currentTab:1
      })
    }
// 判断，如果newsid=2。说明点击的是待使用. 那么将currentTab也改为2.相当于待使用页面
     if(e.newsid==2){
      this.setData({
        currentTab:2
      })
    }
// 判断，如果newsid=3。说明点击的是待评价. 那么将currentTab也改为3.相当于待评价页面
     if(e.newsid==3){
      this.setData({
        currentTab:3
      })
    }
  
  },
  //点击切换
  clickTab: function (e) {
    if (this.data.currentTab === e.target.dataset.wa) {
      return false;
    } else {
      this.setData({
        currentTab: e.target.dataset.wa
      })
    }
  },
  refund:function () {
    wx.navigateTo({
      url: '../kefu/kefu',  //跳转到客服页，但是我绑了它不跳 T_T
    })
  },
  
  listcontent:function () {
    wx.navigateTo({
      url: '/pages/dpj_daisy/dpj_daisy',
    })
  },

  evaluate:function () {
    wx.navigateTo({
      url: '/pages/tijiaopj/tijiaopj',
    })
  },

  gopay:function () {
    wx.navigateTo({
      url: '/pages/DFK_xiangqing/DFK_xiangqing',
    })
  },

  payContent:function () {
    wx.navigateTo({
      url: '/pages/DFK_xiangqing/DFK_xiangqing',
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
  },

  untils:function (e) {
    var newindex = e.currentTarget.dataset.index
    var arr = this.useData.thisdata
    var newdata = this.useData.thisdata[newindex]
    arr.splice(newindex, 1)
    console.log(arr) 

    this.setData({
      thisdata: arr
    })
  }

})