import React, { Component } from 'react';
import {
  Platform,
  StyleSheet,
  Text,
  View,
  Image,
  ListView,
  TouchableOpacity
} from 'react-native';

import Dimensions from 'Dimensions';

// 引入外部的组件
import CommonCell from './BottomCommonCell';

let {width, height} = Dimensions.get('window');

const youLikeData = require('../../LocalData/HomeGeustYouLike.json');

const REQUEST_URL = 'http://api.meituan.com/group/v2/recommend/homepage/city/20?userId=160495643&userid=160495643&__vhost=api.mobile.meituan.com&position=23.134643%2C113.373951&movieBundleVersion=100&utm_term=6.6&limit=40&wifi-mac=64%3A09%3A80%3A10%3A15%3A27&ci=20&__skcy=X6Jxu5SCaijU80yX5ioQuvCDKj4%3D&__skua=5657981d60b5e2d83e9c64b453063ada&__skts=1459731016.350255&wifi-name=Xiaomi_1526&client=iphone&uuid=5C7B6342814C7B496D836A69C872202B5DE8DB689A2D777DFC717E10FC0B4271&__skno=FEB757F5-6120-49EC-85B0-D1444A2C2E7B&utm_content=5C7B6342814C7B496D836A69C872202B5DE8DB689A2D777DFC717E10FC0B4271&utm_source=AppStore&utm_medium=iphone&version_name=6.6&wifi-cur=0&wifi-strength=&offset=0&utm_campaign=AgroupBgroupD100H0&__skck=3c0cf64e4b039997339ed8fec4cddf05&msid=0FA91DDF-BF5B-4DA2-B05D-FA2032F30C6C2016-04-04-08-38594';

class GuestYouLike extends Component {
  constructor(props) {
    super(props);
    this.renderRow = this.renderRow.bind(this);
    this.state = {
      dataSource: new ListView.DataSource({rowHasChanged: (row1, row2) => row1 !== row2})
    }
  }

  renderRow(dataItem) {
    return (
      <TouchableOpacity onPress={() => alert('ok')}>
        <View style={styles.itemBoxStyle}>
          {/*左边的图片*/}
          <Image source={{uri: this.dealWithImgUrl(dataItem.imageUrl)}} style={styles.leftImgStyle} />
          {/*右边*/}
          <View style={styles.rightViewStyle}>
            <View style={styles.rightTopViewStyle}>
              <Text style={{fontSize: 18}}>{dataItem.title}</Text>
              <Text style={{fontSize: 12, color: '#999'}}>{dataItem.topRightInfo}</Text>
            </View>
            <Text style={{color: '#999'}}>{dataItem.subTitle}</Text>
            <View style={styles.rightBottomViewStyle}>
              <Text style={{fontSize: 18, color: '#f00'}}>{`￥${dataItem.mainMessage2}`}</Text>
              <Text style={{color: '#666'}}>{dataItem.bottomRightInfo}</Text>
            </View>
          </View>
        </View>
      </TouchableOpacity>
    )
  }

  // 处理图像的尺寸
  dealWithImgUrl(url) {
    if (!url.search('w.h')) {
      return url;
    } else {
      return url.replace('w.h', '120.90')
    }
  }

  render() {
    return (
      <View style={styles.container}>
        <CommonCell leftIcon="cnxh" leftTitle="猜你喜欢" />
        <ListView
          dataSource={this.state.dataSource}
          renderRow={this.renderRow} />
      </View>
    );
  }

  componentDidMount() {
    fetch(REQUEST_URL)
      .then((response) => response.json())
      .then((responseData) => {
        this.setState({
          dataSource: this.state.dataSource.cloneWithRows(responseData.data)
        })
      })
      .catch((err) => {
        this.setState({
          dataSource: this.state.dataSource.cloneWithRows(youLikeData.data)
        })
      })
  }
}

const styles = StyleSheet.create({
  container: {
    marginTop: 15,
    backgroundColor: '#fff',
  },
  itemBoxStyle: {
    flexDirection: 'row',
    borderBottomColor: '#e8e8e8',
    borderBottomWidth: 1,
    padding: 8,
  },
  leftImgStyle: {
    width: width * 0.3,
    height: 90
  },
  rightViewStyle: {
    width: width * 0.6,
    marginLeft: 8,
    justifyContent: 'center',
  },
  rightTopViewStyle: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 8,
  },
  rightBottomViewStyle: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginTop: 8
  }
});

export default GuestYouLike;