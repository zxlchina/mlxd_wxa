// pages/reply/reply.js

const app = getApp();


Page({

  /**
   * 页面的初始数据
   */
  data: {
    content: "",
    input_content: "",
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


  oninput: function(e) {
    this.setData({
      input_content: e.detail.value
    })
  },


  submit: function(e) {
    
    if (this.data.input_content == "")
    {
      wx.showModal({
        title: '提示',
        content: '请输入内容',
        showCancel: false
      })
      return 
    }
    var that = this
    wx.request({
      url:  app.globalData.host + '/mlxd/reply',
      data: {
        openid: app.globalData.openid,
        content: this.data.input_content
      },
      success(res){
        if (res.statusCode == 200 && res.data.ret == 0)
        {
          wx.showModal({
            title: '提示',
            content: '提交成功，感谢您的反馈',
            showCancel: false
          })
          that.setData({
            content: "",
            input_content: ""
          })
        }
        else{
          wx.showModal({
            title: '错误',
            content: '网络错误,请稍后再试',
            showCancel: false
          })
        }
      },
      fail(res){
        console.log(res)
        wx.showModal({
          title: '错误',
          content: '网络错误,请稍后再试',
          showCancel: false
        })
      }
    })

  },

  /**
   * 生命周期函数--监听页面显示
   */
  onShow: function () {

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