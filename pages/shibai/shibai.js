// pages/shibai/shibai.js
//获取应用实例

const app = getApp();

Page({

  /**
   * 页面的初始数据
   */
  data: {
    text: '',
    list: [],
    list1: [],
    quanxian: '',
  },
  tiao: function (e) {
    console.log(e)     //此时获取到了id,之后就用id判断进入那个页面（以下图片我点击的是第二个按钮哈）
    console.log(e.currentTarget.dataset.id);
    console.log(e.currentTarget.dataset.quan);
    var that = this;
    var id = e.currentTarget.dataset.id;
    var quan = e.currentTarget.dataset.quan;
    var quanxian = that.data.quanxian;
    if (quan == '') {
      if (id == 1) {
        wx.navigateTo({
          url: '/pages/organization/organization?id=' + id,
        })
      } else if (id == 2) {
        wx.navigateTo({
          url: '/pages/focusnews/focusnews?id=' + id,
        })
      } else if (id == 3) {
        wx.navigateTo({
          url: '/pages/legislation/legislation?id=' + id,
        })
      } else if (id == 4) {
        wx.navigateTo({
          url: '/pages/supervise/supervise?id=' + id,
        })
      } else if (id == 5) {
        wx.navigateTo({
          url: '/pages/majorissues/majorissues?id=' + id,
        })
      } else if (id == 6) {
        wx.navigateTo({
          url: '/pages/patronage/patronage?id=' + id,
        })
      } else if (id == 7) {
        wx.navigateTo({

          url: '/pages/representative/representative?id=' + id,
        })
      } else if (id == 8) {
        wx.navigateTo({
          url: '/pages/home/home?id=' + id,
        })
      } else if (id == 9) {
        wx.navigateTo({
          url: '/pages/statute/statute?id=' + id,
        })
      }
    } else {
      if (quanxian == 1) {
        if (id == 1) {
          wx.navigateTo({
            url: '/pages/organization/organization?id=' + id,
          })
        } else if (id == 2) {
          wx.navigateTo({
            url: '/pages/focusnews/focusnews?id=' + id,
          })
        } else if (id == 3) {
          wx.navigateTo({
            url: '/pages/legislation/legislation?id=' + id,
          })
        } else if (id == 4) {
          wx.navigateTo({
            url: '/pages/supervise/supervise?id=' + id,
          })
        } else if (id == 5) {
          wx.navigateTo({
            url: '/pages/majorissues/majorissues?id=' + id,
          })
        } else if (id == 6) {
          wx.navigateTo({
            url: '/pages/patronage/patronage?id=' + id,
          })
        } else if (id == 7) {
          wx.navigateTo({

            url: '/pages/representative/representative?id=' + id,
          })
        } else if (id == 8) {
          wx.navigateTo({
            url: '/pages/home/home?id=' + id,
          })
        } else if (id == 9) {
          wx.navigateTo({
            url: '/pages/statute/statute?id=' + id,
          })
        }
      } else {
        wx.showToast({
          title: '暂无权限,请联系管理员',
          icon: "none",
          duration: 3000
        });
      }
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
    app.checklogin();
    var that = this
    var openid = wx.getStorageSync('openid');
    console.log(openid);
    wx.request({
      url: 'https://app.xinjie-tec.cn/baotou/index.php/Home/Index/index',
      headers: {
        'Content-Type': 'application/json'
      },
      data: {//发送给后台的数据
        openid: openid,
      },
      success: function (res) {
        console.log(res);
        //将获取到的json数据，存在名字叫list的这个数组中
        if (res.data.errcode == 100) {

          that.setData({
            list: res.data.arr.list_s,
            text: res.data.arr.data[0].content,
            list1: res.data.arr.list_b,
            quanxian: res.data.arr.data_u,
            //res代表success函数的事件对，data是固定的，list是数组  
          })
        }

      }
    });
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