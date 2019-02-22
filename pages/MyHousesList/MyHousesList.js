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
        id: 11,
        community: '万佳御园小区',
        building: '5号楼',
        unit: '1单元',
        room: '903室',
        phoneNumber: '15391257468',
        isDefaultAddress: true
      }, {
          id: 12,
          community: '万佳御园小区',
          building: '7号楼',
          unit: '2单元',
          room: '101室',
          phoneNumber: '15391257468',
          isDefaultAddress:false
        }]
    });
  },

  onAddMyHouse(){
    wx.navigateTo({
      url: '/pages/MyHouseAdd/MyHouseAdd',
    })
  },

  onHouseSelected(e){
    let id = e.currentTarget.dataset.id;
    wx.navigateTo({
      url: '/pages/ProblemAdd/ProblemAdd?houseId=' + id,
    })
  },

  onMyHouseUpdate: function (e) {
    let id = e.currentTarget.dataset.id;
    console.log('修改'); console.log(id);
    wx.redirectTo({
      url: '../MyHouseUpdate/MyHouseUpdate?id=' + id,
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
   * 用户点击右上角分享
   */
  onShareAppMessage: function() {

  }
})