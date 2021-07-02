// pages/rank.js

const app = getApp();


Page({

  /**
   * 页面的初始数据
   */
  data: {
    rank_list: [],
    time_mode: 1
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    console.log("enter onLoad")  
    this.refresh()
  },

  refresh: function(){
    wx.showLoading({
      title: '加载数据...',
      mask: true
    })
    
    var that = this
    wx.request({
      url: app.globalData.host + '/mlxd/get_rank',
      data:{
        type: that.data.time_mode
      },
      success(res) {
        wx.hideLoading()
        console.log(res)
        var list = res.data.buyer_list
        console.log(list)
        
        that.setData({
          rank_list: list,
        })
        
      },
      fail(res) {
        wx.hideLoading()
      }
    })

  },

  onchangetime: function(e) {
    console.log(e.detail.value)
    this.setData({
      time_mode: e.detail.value
    })
    this.refresh()
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
    this.refresh()
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