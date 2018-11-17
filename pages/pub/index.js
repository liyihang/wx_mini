// pages/pub/index.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    url:'https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1542453120836&di=dda5b5de59226bf95e009f3a4d770a77&imgtype=0&src=http%3A%2F%2Fs9.rr.itc.cn%2Fr%2FwapChange%2F20172_20_15%2Fa0l7pp8989979220315.gif'
  },
/**
 * 取消发布
 */
  cancelimg(){
    wx.switchTab({
      url: '../index/index',
    })
  },
  /**
   * 拍照
   */
  takephoto() {
    var that = this
    wx.chooseImage({
      count: 1,
      sizeType: ['original', 'compressed'],
      sourceType: ['camera','album'],
      success(res) {
        // tempFilePath可以作为img标签的src属性显示图片
   
        var tempFilePaths = res.tempFilePaths;
        console.log(tempFilePaths);
        //将读取的图片替换之前的图片
        that.setData({ url: tempFilePaths[0] })
        
      
      
      }
      
    })
  },
  error(e) {
    console.log(e.detail)
  },
 
//  预览功能
  preview(event){
  console.log(event)
  wx.previewImage({
    
    urls: event.currentTarget.dataset.list
 
  })
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