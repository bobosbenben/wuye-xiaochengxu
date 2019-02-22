// pages/CustomerService/CustomerService.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    array:[{
      id: 1,
      name: '万宇物业服务有限公司',
      community: '万佳御园小区',
      location: '鄂尔多斯市伊金霍洛旗阿镇万佳御园小区14号楼203室',
      phoneNumber: '13524478425'
    },{
        id:2,
        name: '铁锤物业服务有限公司',
        community: '康馨苑小区',
        location: '康馨苑小区14号楼203室',
        phoneNumber: '13524478425'
    }]
  },

  onPhoneNumberClick:function(e){
    let phoneNumber = e.currentTarget.dataset.phoneNumber;
    wx.makePhoneCall({
      phoneNumber: phoneNumber
    })
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {

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