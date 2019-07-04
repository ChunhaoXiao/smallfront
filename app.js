//app.js

App({
  onLaunch: function () {
    
  },
  onShow: function () {

  },

  checklogin: function (obj) {
    wx.showLoading({
      title: '加载中',
      mask: true,
    })
    console.log('------checklogin begin-----');
    var that = this;

    var phone = wx.getStorageSync('phone');
    wx.hideLoading();

    if (phone && phone != '') { //如果有电话号码
      wx.getSetting({
        success: function (res) {
          if (res.authSetting['scope.userInfo']) {
            // 已经授权，可以直接调用 getUserInfo 获取头像昵称
            wx.getUserInfo({
              success: function (res_user) {
                var openid = wx.getStorageSync('openid');
                console.log(res_user);
                console.log(phone);
                that.globalData.userInfo = res_user.userInfo;
              }
            });
          }
          else {
            wx.navigateTo({
              url: '/pages/shouquan/shouquan',
            });
          }
        },
        fail: function (res) {

        },
        complete: function (res) { },
      })

    }
    else {
      wx.getSetting({
        success: function (res) {
          if (res.authSetting['scope.userInfo']) {
            // 已经授权，可以直接调用 getUserInfo 获取头像昵称
            wx.login({
              success: function (res_login) {
                if (res_login.code) {
                  wx.getUserInfo({
                    withCredentials: true,
                    success: function (res_user) {
                      wx.request({
                        url: 'https://app.xinjie-tec.cn/baotou/Home/Login/wxUserInfo',
                        method: 'POST',
                        data: {
                          code: res_login.code,
                          encryptedData: res_user.encryptedData,
                          iv: res_user.iv
                        },
                        header: {
                          'Accept': 'application/json',
                          'content-type': 'application/x-www-form-urlencoded'
                        },
                        success: function (res) {
                          that.globalData.userInfo = res.data;
                          console.log(res.data);

                          if (res.data.errcode == '100') {
                            wx.setStorageSync('openid', res.data.openId);
                            wx.setStorageSync('phone', res.data.phone);
                            wx.setStorageSync('name', res.data.name);
                            wx.setStorageSync('thumb', res.data.thumb);
                            wx.setStorageSync('state', res.data.state);
                            wx.navigateTo({
                              url: '/pages/index/index'
                            })

                          } else if (res.data.errcode == '101') {  //关联失败
                            wx.setStorageSync('openid', res.data.openId);
                            wx.navigateTo({
                              url: '/pages/register/register',
                            });
                            return false;
                          } else if (res.data.errcode == '103') {
                            wx.showToast({
                              title: '没有openid',
                              icon: "success",
                              duration: 2000
                            });
                          }
                        }
                      })
                    }
                  })
                }
              },
              fail: function () {
                wx.navigateTo({
                  url: '/pages/shouquan/shouquan',
                })
              }
            })
          }
          else {
            wx.navigateTo({
              url: '/pages/shouquan/shouquan',
            })
          }
        },
        fail: function (res) {
          wx.navigateTo({
            url: '/pages/shouquan/shouquan',
          });
        },
        complete: function (res) { },
      })

    }
  },
  globalData: {
    userInfo: null,
    adhidden: true,
    domain:"http://yhq.xinjie-tec.cn/",
  }

})