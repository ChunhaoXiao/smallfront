// pages/index/Center.js
Page({
  data: {
    user:'巴布罗·迭戈·何塞·弗朗西斯科·狄·保拉·胡安·纳波穆西诺·玛莉亚·狄·洛斯·雷梅迪奥斯',
    tureback:'确定要退出登录吗',
    dis:'display:none;',
    butout:'display:block',
  },

  onShow:function(e){
   var uslen = this.data.user;
   var str = uslen.substring(0, 12)
   this.setData({
     user:str
   })
 },

 Signout:function(e){
   this.setData({
     dis:'display:block;'
   })
 },

 hide:function(e){
   this.setData({
    dis:'display:none;',
    user:'请登录',
    butout:'display:none'
  })
 },

 ofset:function(e){
   this.setData({
    dis:'display:none;'
  })
 },

goCollection:function(e){
   wx.navigateTo({
     url:"../collection_my/Collection"
   })
},


goactivity:function () {
  wx.navigateTo({
    url: '../activities_my/Myactivities',
  })
},

goshanghu: function () {
  wx.navigateTo({
    url: '../shanghu/shanghu',
  })
},

gozhanghu: function () {
  wx.navigateTo({
    url: '../zhanghu/zhanghu',
  })
},

//点击view并且向跳转的页面 发送newsid (newsid是自定义的)
  godai:function(e){
    var newsId = e.currentTarget.dataset.newsid  //获取newsid的值 并封装到变量
    wx.navigateTo({
      url: "../index/daipingjia?newsid=" + newsId //newsId为变量
    })
    console.log(e)
},

gotui:function () {
  wx.navigateTo({
    url: '../refund/refund',
  })
},
  allorder:function() {
    wx.navigateTo({
      url: '../daipingjia/daipingjia',
    })
  }

})