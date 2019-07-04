const app = getApp();
Page({

  /**
   * 页面的初始数据
   */
  data: {
    list_pu:[],
    list_dai: [],
    list1:[],
    data1:[],
    data2: [],
  },
 
  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    //app.checklogin()
  },

 
  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function () {
    
  },

  //页面跳转


  intoSearchFunc:function (e) {
    wx.navigateTo({
      url: '../components/search/search'
    })
  },

  /**
   * 生命周期函数--监听页面显示
   */
  onShow: function () {
    var that = this;
    
    wx.request({
      url: 'http://yhq.xinjie-tec.cn/Home/index/index_post',
      //url:'http://127.0.0.1/small/index.php/Home/index/index_post',
      method: 'POST',
      headers: {
        'Accept': 'application/json',
        'content-type': 'application/x-www-form-urlencoded; charset=UTF-8'
      },
     
      success: function (res) {
        console.log(res);
        
        that.setData({
          data1: res.data.data_dian,
          list_dai: res.data.goodslist,
          list_pu: res.data.goodslist1,
          list1: res.data.aa,
          data2: res.data.goodslist0[0],
          categories:res.data.categories,
          activity:res.data.activity,
          shop:res.data.hot_shop,
          card:res.data.hot_card,
        })
      
      }
    });
  },

  showRule: function () {
    this.setData({
      isRuleTrue: true
    })
  },

  hideRule: function () {
    this.setData({
      isRuleTrue: false
    })
  }


})