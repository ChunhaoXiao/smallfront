Page({

  data: {
    thisdata:[
    {
      text: '步数记录赚礼品[已结束]',
      time: '2019.10.31-2019.12.25'
    },
    {
      text: '步数记录赚礼品[已结束]',
      time: '2019.10.31-2019.12.25'
    },

    {
      text: '步数记录赚礼品[已结束]',
      time: '2019.10.31-2019.12.25'
    },

    {
      text: '步数记录赚礼品[已结束]',
      time: '2019.10.31-2019.12.25'
    },

    {
      text: '步数记录赚礼品[已结束]',
      time: '2019.10.31-2019.12.25'
    },

    {
      text: '步数记录赚礼品[已结束]',
      time: '2019.10.31-2019.12.25'
    },

    {
      text: '步数记录赚礼品[已结束]',
      time: '2019.10.31-2019.12.25'
    },
    
    ]
  },

  // 获取标签的内容 this.data方法
  onLoad: function (e) {
    var lx = this.data.thisdata.length;
    for(let i = 0; i < lx; i++){
    var a = this.data.thisdata[i].text; // 变量a为text的值
    var b = this.data.thisdata[i].time; //

    var g = a.length;  //text的字符长度
    var h = b.length;  //manei的字符长度
    var l = a.substring(0, 12); //截取text的前10位字符串
    var p = b.substring(0, 21);  //截取manei的前6位字符串


    var xinl = 'thisdata[' + i + '].text'
    var xinp = 'thisdata[' + i + '].time'

    this.setData({
      [xinl]: l,
      [xinp]: p
    })
  }
},


})
