// pages/home/home.js

const qcloud = require('../../vendor/wafer2-client-sdk/index')
const config = require('../../config.js')
Page({

  /**
   * 页面的初始数据
   */
  data: {
    productList: [], // 商品列表
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    this.getProductList()
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

  },

  getProductList: function (callback) {
    wx.showLoading({
      title: '数据加载中...',
    })
    qcloud.request({
      url: config.service.productUrl,
      success: res => {
        wx.hideLoading()
        let code = res.data.code
        console.log(code)
        if (code != 0) {
          wx.showToast({
            title: '数据加载失败，请稍后再试',
          })
        } else {
          let data = res.data.data
          this.setData({
            productList: data
          })
        }

      },
      fail: res => {
        wx.hideLoading()
        wx.showToast({
          title: '数据加载失败，请稍后再试',
        })
      }
    })
  },
})