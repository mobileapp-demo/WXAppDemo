//index.js
//获取应用实例
var app = getApp()
var utils = require('../../utils/util.js')
Page({
  data: {
    motto: 'Hello World',
    userInfo: {},
    imgUrls: [
      'http://pic3.zhimg.com/d145335cca75d30d3fd19123e3f5ee36.jpg',
      'http://pic1.zhimg.com/413b37861ef97edcd1c3ef1c9f2f6fbc.jpg',
      'http://pic3.zhimg.com/594a11f753d36270b698f1ca97ea1a1e.jpg',
      'http://pic3.zhimg.com/6002bc906b7aa43b44ff1a862651dc66.jpg',
      'http://pic3.zhimg.com/3b04e1791050bbc513e5a6071abea1a6.jpg'
    ],
    news: ''
  },
  //事件处理函数
  bindViewTap: function() {
    wx.navigateTo({
      url: '../logs/logs'
    })
  },
  onLoad: function () {
    console.log('onLoad')
    var that = this
    wx.request({
      url: 'http://news-at.zhihu.com/api/4/news/latest',
      success: function(res) {
        that.setData({news: res.data.stories})
        that.setData({imgUrls: res.data.top_stories})
      }
    })
  }
})
