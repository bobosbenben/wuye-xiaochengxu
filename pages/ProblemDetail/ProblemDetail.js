// pages/ProblemDetail/ProblemDetail.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    visible: true,
    hasEvaluated: false,
    evaluateMessage: '请评价',
    popupVisible: false
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {

  },

  onButtonClick(){
    let visible = this.data.visible;
    this.setData({visible: !visible});
  },

  onEvaluateClick(){
    this.setData({popupVisible:true});
  },

  onPopupClose(){
    this.setData({ popupVisible: false });
  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function () {

  }
})