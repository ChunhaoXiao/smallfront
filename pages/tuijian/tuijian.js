Page({

  data: {
    dis:null, 
    thisdata:[
    {
      text: '施华洛全球旅拍婚纱摄影施华洛全球旅拍婚纱摄影',
      img:'/images/Collection-1.png',
      cur:0
    },
    {
      text: '施华洛全球旅拍婚纱摄影施华洛全球旅拍婚纱摄影',
      img:'/images/Collection-1.png',
      cur: 0
    },
    {
      text: '施华洛全球旅拍婚纱摄影施华洛全球旅拍婚纱摄影',
      img: '/images/Collection-1.png',
      cur: 0
    },
    {
      text: '施华洛全球旅拍婚纱摄影施华洛全球旅拍婚纱摄影',
      img:'/images/Collection-1.png',
      cur: 0
    },
    {
      text: '施华洛全球旅拍婚纱摄影施华洛全球旅拍婚纱摄影',
      img: '/images/Collection-1.png',
      cur: 0
    },
    {
      text: '施华洛全球旅拍婚纱摄影施华洛全球旅拍婚纱摄影',
      img:'/images/Collection-1.png',
      cur: 0
    },
    {
      text: '施华洛全球旅拍婚纱摄影施华洛全球旅拍婚纱摄影',
      img: '/images/Collection-1.png',
      cur: 0
    },
    {
      text: '施华洛全球旅拍婚纱摄影施华洛全球旅拍婚纱摄影',
      img:'/images/Collection-1.png',
      cur: 0
    },
    {
      text: '施华洛全球旅拍婚纱摄影施华洛全球旅拍婚纱摄影',
      img: '/images/Collection-1.png',
      cur: 0
    },
    {
      text: '施华洛全球旅拍婚纱摄影施华洛全球旅拍婚纱摄影',
      img:'/images/Collection-1.png',
      cur: 0
    },
    {
      text: '施华洛全球旅拍婚纱摄影施华洛全球旅拍婚纱摄影',
      img: '/images/Collection-1.png',
      cur: 0
    },
    {
      text: '施华洛全球旅拍婚纱摄影施华洛全球旅拍婚纱摄影',
      img:'/images/Collection-1.png',
      cur: 0
    },
    ]
  },

  // 获取标签的内容 this.data方法
  onLoad: function (e) {

    var lx = this.data.thisdata.length;

    for(let i = 0; i < lx; i++){
 
    var a = this.data.thisdata[i].text; // 变量a为text的值
    //var b = this.data.thisdata[i].dizhi; // 变量b为manei的值
    //var c = this.data.thisdata[i].manei;
    //var len = this.data.thisdata[i].length;
    var g = a.length;  //text的字符长度
    //var h = b.length;  //manei的字符长度
    // 截取
    var l = a.substring(0, 12); //截取text的前10位字符串
    //var p = b.substring(0, 12);  //截取manei的前6位字符串
   // var o = c.substring(0, 6);
    //var thle = len.substring(0, 5);
    console.log(l)

    var index = 'thisdata['+ i +'].text'
    //var inded = 'thisdata[' + i + '].dizhi'
    //var indem = 'thisdata[' + i + '].manei'
    //var indel = 'thisdata[' + i + '].length'
    this.setData({
      [index]: l,
     // [inded]: p,
     // [indem]:o,
     // [indel]:thle
    })
  }
  }

})
