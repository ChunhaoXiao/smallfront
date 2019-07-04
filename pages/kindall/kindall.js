const app = getApp();
Page({
  data: {
    currentTab: 0,  //对应样式变化
    scrollTop: 0,  //用作跳转后右侧视图回到顶部
    list_dian:[],
    list_fen:[],
  },

  onLoad: function (options) {
    var that = this;

  },

  navbarTap: function (e) {
    var that = this;
    console.log(e);
    that.setData({
      currentTab: e.currentTarget.id,   //按钮CSS变化
      fid: e.currentTarget.dataset.id,
      scrollTop: 0,   //切换导航后，控制右侧滚动视图回到顶部
    })
    //刷新右侧内容的数据
    wx.request({
      url: 'https://yhq.xinjie-tec.cn/Home/Kind/list_post', //仅为示例，并非真实的接口地址
      data: {
        id: e.currentTarget.dataset.id,
      },
      method: 'GET',
      header: {
        'Accept': 'application/json'
      },
      success: function (res) {
        console.log(res)

        that.setData({
          list_dian: res.data.dianpulist,
        })
      }
    })
  },

  ToSearchResult:function(options){
    wx.navigateTo({
      url: '/pages/kind/kind',
    })
  },

  onShow: function () {
    var that = this;

    wx.request({
      url: app.globalData.domain +'Home/kind/index',
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      data:{
      
      },
      success: function (res) {
        console.log(res);
        //console.log(res.data);
        that.setData({
          list_dian: res.data.dianpulist,
          list_fen: res.data.list_c,
        })


      }
    });
  }

})