// pages/MyHouseAdd/MyHouseAdd.js
Page({

  /**
   * 页面的初始数据
   */
  data: {

    districtData: [
      {
        "label": "内蒙古",
        "value": "2",
        "children": [
          {
            "label": "鄂尔多斯",
            "value": "3",
            "children": [
              {
                "label": "伊旗",
                "value": "4",
                "children": null
              },
              {
                "label": "乌审旗",
                "value": "22",
                "children": null
              }
            ]
          },
          {
            "label": "包头",
            "value": "10",
            "children": [
              {
                "label": "青山",
                "value": "11",
                "children": null
              }
            ]
          }
        ]
      },
      {
        "label": "陕西",
        "value": "23",
        "children": null
      }
    ],
    // value1: ["2", "3","4"],

    communityData: [
      {
        "label": "阿镇",
        "value": "5",
        "children": [
          {
            "label": "万佳御园",
            "value": "6",
            "children": null
          }
        ]
      },
      {
        "label": "上湾",
        "value": "17",
        "children": [
          {
            "label": "和谐小区",
            "value": "18",
            "children": null
          }
        ]
      }
    ],

    roomData: [
      {
        "label": "5号楼",
        "value": "7",
        "children": [
          {
            "label": "1单元",
            "value": "8",
            "children": [
              {
                "label": "903室",
                "value": "9",
                "children": null
              },
              {
                "label": "103室",
                "value": "26",
                "children": null
              }
            ]
          },
          {
            "label": "1单元",
            "value": "25",
            "children": null
          }
        ]
      },
      {
        "label": "7号楼",
        "value": "24",
        "children": null
      }
    ],
    
    defaultAddress: true,
    name: null,
    phoneNumber: null,
    provinceAndCityAndCountryIds:null,
    townAndCommunityIds: null,
    buildingAndUnitAndRoomIds: null
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

  },

  onOpen1() {
    this.setData({ countryPickerVisible: true })
  },
  onClose1() {
    this.setData({ countryPickerVisible: false })
  },
  onChange1(e) {
    this.setData({ 
      title1: e.detail.options.map((n) => n.label).join(',') ,
      provinceAndCityAndCountryIds: e.detail.value
    })
  },

  onOpen2() {
    this.setData({ communityPickerVisible: true })
  },
  onClose2() {
    this.setData({ communityPickerVisible: false })
  },
  onChange2(e) {
    this.setData({ 
      title2: e.detail.options.map((n) => n.label).join(',') ,
      townAndCommunityIds: e.detail.value
    })
  },

  onOpen3() {
    this.setData({ roomPickerVisible: true })
  },
  onClose3() {
    this.setData({ roomPickerVisible: false })
  },
  onChange3(e) {
    this.setData({ 
      title3: e.detail.options.map((n) => n.label).join(','),
      buildingAndUnitAndRoomIds: e.detail.value
    })
  },

  onDefaultAddressChange(e){
    this.setData({defaultAddress:e.detail.value});
  },

  onNameChange(e){
    this.setData({name:e.detail.value});
  },

  onPhoneNumberChange(e){
    this.setData({phoneNumber:e.detail.value});
  },

  onAddMyHouse(){
    let flag1 = this.data.name != null && this.data.name != '';
    let flag2 = this.data.phoneNumber != null && this.data.phoneNumber != '';
    let flag3 = this.data.provinceAndCityAndCountryIds == null ? false : this.data.provinceAndCityAndCountryIds.length==3;
    let flag4 = this.data.townAndCommunityIds == null ? false : this.data.townAndCommunityIds.length == 2;
    let flag5 = this.data.buildingAndUnitAndRoomIds == null ? false : this.data.buildingAndUnitAndRoomIds.length == 3;

    if(flag1 && flag2 && flag3 && flag4 && flag5){
      console.log('可以提交数据了')
    }
    else{
      wx.showModal({
        title:'错误提示',
        content: '您的信息填写不全啊',
        showCancel: false,
        confirmColor: '#1aad19'
      });
    }
  }
})