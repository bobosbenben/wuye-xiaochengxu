// pages/MyHousesList/MyHousesList.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function(options) {
    this.setData({
      array: [{
        singleHouseInfo: {
          isShow: true
        }
      }, {
        singleHouseInfo: {
          isShow: false
        }
        }]
    });
  },

  onAddMyHouse(){
    wx.navigateTo({
      url: '/pages/MyHouseAdd/MyHouseAdd',
    })
  },

  /**
     * 页面上拉触底事件的处理函数
     */
  onReachBottom: function () {
    console.log('react bottom');
    console.log(this.data.array.length);
    let flag = false;
    if(this.data.array.length == 8 ){
      console.log('数量达到8个了');
      flag = true;
      wx.showToast({
        title: '没有啦',
        icon: 'success',
        duration: 1500,
        mask: true,
        complete: function(){flag = true;}
      });
    }
    console.log(flag);
    if(flag) return;
    wx.showLoading({
      title: '加载中',
    })
    let that = this;
    setTimeout(function () {
      wx.hideLoading();
      let originalData = that.data.array;
      originalData.push({
        singleHouseInfo: {
          isShow: true
        }
      })
      that.setData({
        array:originalData
      })
    }, 1000)
  },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function() {

  },

  /**
   * 生命周期函数--监听页面显示
   */
  onShow: function() {

  },

  /**
   * 生命周期函数--监听页面隐藏
   */
  onHide: function() {

  },

  /**
   * 生命周期函数--监听页面卸载
   */
  onUnload: function() {

  },

  /**
   * 页面相关事件处理函数--监听用户下拉动作
   */
  onPullDownRefresh: function() {

  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function() {

  }
})