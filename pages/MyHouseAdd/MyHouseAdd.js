// pages/MyHouseAdd/MyHouseAdd.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    region: ['广东省', '广州市', '海珠区'],
    provinceAndCityData: [{ "label": "内蒙古", "value": "2", "children": [{ "label": "鄂尔多斯", "value": "3", "children": null }, { "label": "包头", "value": "10", "children": null }] }, { "label": "陕西", "value": "23", "children": [{"label":"榆林市","value":"24","children":null},{"label":"西安市","value":"27","children":null}] }],
    customItem: '全部',
    multiIndex: [0, 0],
    multiArray: []
    // multiArray:[
    //   {
    //     citys: [
    //       {
    //         areas: [
    //           {
    //             code: "440303",
    //             name: "罗湖区"
    //           },
    //           {
    //             code: "440304",
    //             name: "福田区"
    //           }
    //                      ],
    //         code: "440300",
    //         name: "深圳市"
    //       }
    //         ],
    //     code: "440000",
    //     name: "广东省"
    //   },
    //   {
    //     name:"内蒙古自治区",
    //     code: "150000",
    //     citys:[
    //       {
    //         name:"鄂尔多斯市",
    //         code:"152700",
    //         areas:[
    //           {
    //             name: "伊金霍洛旗",
    //             code: "152728"
    //           },
    //           {
    //             name: "东胜",
    //             code:"152701"
    //           }
    //         ]
    //       }
    //     ]
    //   }
    // ]
  },

  getCityByProvinceIndex: function (indexOfProvince) {
    let originalData = this.data.provinceAndCityData;
    let city = originalData[indexOfProvince].children;
    return city;
  },

  //点击确定
  bindMultiPickerChange: function (e) {
    console.log('picker发送选择改变，携带值为', e.detail.value)
    this.setData({
      multiIndex: e.detail.value
    })
  },
  //滑动
  bindMultiPickerColumnChange: function (e) {
    console.log('修改的列为', e.detail.column, '，值为', e.detail.value);
    var data = {
      multiArray: this.data.multiArray,
      multiIndex: this.data.multiIndex
    };
    
    if(e.detail.column == 0){
      let label = this.data.provinceAndCityData[e.detail.value].label;
      console.log(label);
      let city = this.getCityByProvinceIndex(e.detail.value);
      console.log('city'); console.log(city);
      data.multiArray[1] = city;
      console.log('multiArray'); console.log(data.multiArray);
      this.setData(data);
      this.setData({
        multiIndex:[e.detail.value,0]
      });
    }


    //setData更新数据
    //this.setData(data);
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    
    let originalData = this.data.provinceAndCityData;
    let multiArray = [];
    let province = [];
    // let city = [];
    for(let i=0;i<originalData.length;i++){
      let temp = {
        label:originalData[i].label,
        value:originalData[i].value
      }
      province.push(temp);
    }

    let indexOfProvince = this.data.multiIndex[0];
    let indexOfCity = this.data.multiIndex[1];

    let city = originalData[indexOfProvince].children;
    multiArray.push(province);
    multiArray.push(city);

    this.setData({
      multiArray: multiArray
    })
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