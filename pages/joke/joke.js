Page({
    data: {
        jokes: []
    },

    onLoad: function () {
    console.log('joke onLoad')
    var that = this
    wx.request({
      url: 'http://192.168.0.105:8080/api/humor.json',
      success: function(res) {
        that.setData({jokes: res.data.data})
      }
    })
    },

    onPullDownRefresh: function() {
    // Do something when pull down
    console.log("pulldown")
    }    
})