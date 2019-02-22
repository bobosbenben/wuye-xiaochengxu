// pages/BusinessServiceDetail/BusinessServiceDetail.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    unit:{
      title: '鲜牛奶送货上门',
      tags: ['自营'],
      serviceContentText: '敏盖现挤牛奶，地址在敏盖的基地牛奶厂。所有牛奶都是当日现挤，送货上门，大瓶1000ml的15元，小瓶500ml的8元。由于是鲜挤的牛奶，保质期只有1-2天，请大家购买后及时食用。预定电话：15391257468.',
      serviceContentVideo: 'http://wxsnsdy.tc.qq.com/105/20210/snsdyvideodownload?filekey=30280201010421301f0201690402534804102ca905ce620b1241b726bc41dcff44e00204012882540400&bizid=1023&hy=SH&fileparam=302c020101042530230204136ffd93020457e3c4ff02024ef202031e8d7f02030f42400204045a320a0201000400',
      phoneNumber: '15391257468'
    }
  },

  onPhoneClick: function(){
    let that = this;
    wx.makePhoneCall({
      phoneNumber: that.data.unit.phoneNumber,
    })
  },


  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {

  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function () {
    console.log('点击了分享');
  }
})