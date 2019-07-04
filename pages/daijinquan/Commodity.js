// pages/index/Commodity.js
const app = getApp();
Page({

  data: {
    name:'大连海昌发现王国一日游（日/夜场）',
    manei:199,
    length:'114件',
    zhuangtai:'已选',
    daisize: '100元代金卷',
    ping:1548,
    user:'海军陆战队',
    time:'2018.08.25',
    ly: '初始化了也上不去是怎么回事我是阿年建的馆今天初始化了也上不去是怎么回事开始收费了吗',
    showname:'100元代金券',
    showtime:'周一至周日 | 部分商品可用 | 单次可使用5张',
    showmanei:'89',
    shou:'border-right:1px solid #ccc',
    tel: '13555934217',
    zhedis:'display:none',
    price:299,
    lentext:1,
    xzhe:'display:none',
    goods_id:0,
    count:0,
  },
  onLoad:function(option)
  {
    const id = option.id
    console.log(id)
    wx.request({
      url: app.globalData.domain+'Home/gift/show/id/'+id,
      method:'GET',
      success:(res) => {
        console.log(res.data)
        this.setData({
          data:res.data,
          goods_id:id,
        });
      }
    })
  },


  navigator:function () {
    wx.navigateTo({
      url: '/pages/querenDD/querenDD',
      data:{
        goods_id:this.data.goods_id,
        count:this.data.lentext,
      }
    })
  },

  onShow:function(e){
    var name = this.data.name;
    var str = name.substring(0, 28);
   
    

    this.setData({
      name:str
  
    })
  },

  telclick: function () {
    wx.makePhoneCall({
      phoneNumber: '13555934217'
    })
  },

  telclose:function (){
    this.setData({
      zhedis: 'display:none'
    })
  },

  submit:function(){
    this.setData({
      xzhe:'display:block'
    })
  },

  fnG: function () {
    this.setData({
      xzhe: 'display:block'
    })
  },

  zhedis:function(){
    this.setData({
      xzhe: 'display:none'
    })
  },

  zboxdis: function () {
    this.setData({
      xzhe: 'display:block'
    })
  },

  jia:function (e) {
    var e = this.data.lentext;
    e++;
    this.setData({
      lentext:e
    })
  },

  jian: function (e) {
    
    var e = this.data.lentext;
    if (e <= 0) {
      return false;
    }
    e--;

    this.setData({
      lentext: e
    })
  },
  onShareAppMessage: function (res) {
    return {
      title: this.data.name,
      success: function (res) {
        wx.showToast({
          title: '分享成功'
        })
      }
    }
  },

  getUserInfo:function(e)
  {
    console.log(e)
    wx.login({
       
    })
  }

})