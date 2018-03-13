import React, { Component } from 'react';
import {
  Platform,
  StyleSheet,
  Text,
  View,
  Image,
  TouchableOpacity
} from 'react-native';
import Dimensions from 'Dimensions';
const { width } = Dimensions.get('window');

// 引入外部组件类
import CommonView from './MiddleCommonView';

// 引入外部数据
let TopMiddleData = require('../../LocalData/HomeTopMiddleLeft.json');
let D4Data = require('../../LocalData/Home_D4.json');

class MiddleView extends Component {
  constructor(props) {
    super(props);
  }

  // 左边的View
  renderLeftView() {
    // 拿到对应的数据
    let data = TopMiddleData.dataLeft[0];

    return (
      <TouchableOpacity onPress={() => alert('点击了')}>
        <View style={styles.leftViewStyle}>
          <Image source={{uri: data.img1}} style={styles.leftImageStyle} />
          <Image source={{uri: data.img2}} style={styles.leftImageStyle} />
          <Text style={{color: 'gray'}}>{data.title}</Text>
          <View style={{flexDirection: 'row',marginTop: 5}}>
            <Text style={{color: 'blue', marginRight: 5}}>{data.price}</Text>
            <Text style={{color: 'orange', backgroundColor: 'yellow'}}>{data.sale}</Text>
          </View>
        </View>
      </TouchableOpacity>
    )
  }

  // 右边的View
  renderRightView() {
    // 组件数组
    let itemArr = [];
    // 取出具体数据
    let rightData = TopMiddleData.dataRight;
    // 遍历
    for(let i=0; i<rightData.length; i++) {
      itemArr.push(
        <CommonView key={i} item={rightData[i]} />
      )
    }

    return itemArr;
  }

  // 在图片url中设置大小
  // setSizeForImg(url) {
  //   if (url.search('w.h') == -1) {
  //     return url
  //   } else {
  //     return url.replace('w.h', '120.90')
  //   }
  // }

  // 中下部分的View
  renderMidBotView() {
    let dataArr = D4Data.data;

    return dataArr.map((item,i) => {
      let tItem = {
        title: item.maintitle,
        subTitle: item.deputytitle,
        rightImage: item.imageurl,
        titleColor: item.typeface_color
      }
      return <CommonView key={i} item={tItem} />
    })
  }

  render() {
    return (
      <View>
        {/*----中间上半部分----*/}
        <View style={styles.container}>
          {/*左边*/}
          {this.renderLeftView()}
          {/*右边*/}
          <View>
            {this.renderRightView()}
          </View>
        </View>
        {/*----中间下半部分----*/}
        <View style={{marginTop: 15}}>
          {/*上边*/}
          <View style={styles.midBottomTopStyle}>
            <View>
              <Text style={{fontSize: 18, color: '#fb7f66', fontWeight: 'bold'}}>最高立减25</Text>
              <Text style={{fontSize: 14, color: '#999', marginTop: 5}}>报名小码哥 新学员专享</Text>
            </View>
            <Image source={{uri: 'nsj'}} style={{width: 155, height: 60, resizeMode: 'contain'}}/>
          </View>
          {/*下边*/}
          <View style={styles.midBottomBotStyle}>
            {this.renderMidBotView()}
          </View>
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    marginTop: 15
  },
  leftViewStyle: {
    width: width * 0.5,
    height: 119,
    backgroundColor: '#fff',
    marginRight: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  leftImageStyle: {
    width: 120,
    height: 30,
    resizeMode: 'contain'
  },
  midBottomTopStyle: {
    flex: 1,
    flexDirection: 'row', 
    alignItems: 'center',
    justifyContent: 'space-between',
    marginBottom: 1, 
    paddingLeft: 26,
    backgroundColor: '#fff', 
    height: 60
  },
  midBottomBotStyle: {
    flexDirection: 'row',
    flexWrap: 'wrap',
  }
});

export default MiddleView;