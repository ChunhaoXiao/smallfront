let _page;

Page({

  data: {
    data:[],
    list1:[],
    list2: [],
    name:'大连海昌发现王国一日游（日/夜场）',
    manei:199,
    length:'114件',
    dizhi: '甘井子区黄浦路662号中国华录对面（近中国华录 公交站）',
    zhuangtai:'已选',
    daisize: '100元代金卷',
    ping:1548,
    showname:'100元代金券',
    showtime:'周一至周日 | 部分商品可用 | 单次可使用5张',
    showmanei:'89',
    shou:'border-right:1px solid #ccc',
    tel: '13555934217',
    price:299,
    ellipsis: true,
    zhao1: 'display:none',
  },

  ellipsis() {
    _page = this;
    let value = !this.data.ellipsis;
    _page.setData({
      ellipsis: value
    });
  },
  onLoad: function (options) {
    console.log(options);

    var that = this;
    that.setData({
      id: options.id,

    });


  },
  onShow: function () {
    var that = this;

    wx.request({
      url: 'https://yhq.xinjie-tec.cn/Home/index/dianpu_info', //仅为示例，并非真实的接口地址
      data: {
        id:that.data.id,
      },
      method: 'POST',
      header: {
        'Accept': 'application/json',
        'content-type': 'application/x-www-form-urlencoded; charset=UTF-8'
      },
      success: function (res) {
        console.log(res)
        that.setData({
          data: res.data.data_dian,
          list1: res.data.list_goods1,
          list2: res.data.list_goods2,
        });
      }
    });
  },

  

  callclick: function () {
    
    this.setData({
      zhao1: 'displya:block',
      
    })
  },

  telclose: function () {
    this.setData({
      zhao1: 'display:none'
    })
  },

  calling: function (e) {
    wx.makePhoneCall({
      phoneNumber: e.currentTarget.dataset.phone, 
      success:function(){ console.log("拨打电话成功！") }, 
      fail:function(){ console.log("拨打电话失败！") } 
    }) 
  },

  callings: function (e) {
    wx.makePhoneCall({
      phoneNumber: e.currentTarget.dataset.phone,
      success: function () { console.log("拨打电话成功！") },
      fail: function () { console.log("拨打电话失败！") }
    })
  }

})