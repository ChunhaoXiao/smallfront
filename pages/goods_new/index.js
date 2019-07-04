Page({
	
	data:{
    list:[],
	},

	// 获取标签的内容 this.data方法
	onLoad: function (e) {
  //   var lx = this.data.thisdata.length; //获取数组数量，也就是获取DIV的数量
  //   for (let i = 0; i < lx; i++){
	// 	var a = this.data.thisdata[i].text; // 变量a为text的值
  //   var b = this.data.thisdata[i].manei; // 变量b为manei的值
	// 	var g = a.length;  //text的字符长度
	// 	var h = b.length;  //manei的字符长度
	// 	var l = a.substring(0, 10); //截取text的前10位字符串
	// 	var p = b.substring(0, 5);  //截取manei的前6位字符串
 
  //   var index = 'thisdata['+ i +'].text'
  //   var ledex = 'thisdata['+ i +'].manei'
	// 	this.setData({
  //     [index]:l,
  //     [ledex]:p
	// 	})
  //  }
	},
  onShow: function () {
    var that = this;

    wx.request({
      url: 'https://yhq.xinjie-tec.cn/Home/index/daijin_list',
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },

      success: function (res) {
        console.log(res);

        that.setData({
          list: res.data.goodslist,
         
        })

      }
    });
  },
	// 通过自定义data-text获取与定义一样的文本

	click:function (e){

    // var text = e.target.dataset.text // text为自定义属性.data-text取后半部
    // // data-text=text 可以获取文本内容
    // console.log(text);

    // var len = text.length;

    // console.log(len)

    // var str = text.substring(0,5)// 截取字符串

    // this.setData({
    // 	text:str
    // })
}

 // 总结：如果用onshow方法，不能用第二种方法.因为第二种方法是模拟的，加载页面的时候并没有获取文本
 //      必须需要一个事件去触发

})
