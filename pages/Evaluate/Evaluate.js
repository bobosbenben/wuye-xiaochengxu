// pages/Evaluate/Evaluate.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    serviceOnTimeValue: 5,
    serviceAttitudeValue: 5,
    serviceQuality: 5,
    serviceComment: ''
  },

  onEvaluateClick: function(){
    
  },

  onRaterChange:function(e){
    switch(e.target.id){
      case "serviceOnTime": this.setData({serviceOnTimeValue: e.detail.value});
      case "serviceAttitude": this.setData({serviceAttitudeValue: e.detail.value});
      case "serviceQuality": this.setData({serviceAttitudeValue: e.detail.value});
    }
  },

  onCommentChange: function(e){
    this.setData({serviceComment:e.detail.value});
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
   * 用户点击右上角分享
   */
  onShareAppMessage: function () {

  }
})