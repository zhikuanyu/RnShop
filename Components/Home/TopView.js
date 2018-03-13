import React, { Component } from 'react';
import {
  Platform,
  StyleSheet,
  Text,
  View,
  ScrollView,
  ListView,
  Image
} from 'react-native';


import Dimensions from 'Dimensions';
const { width } = Dimensions.get('window');

import TopListView from './TopListView';

// 引入外部数据
const TopMenu = require('../../LocalData/TopMenu.json');

class TopView extends Component {
  constructor(props) {
    super(props);
    this.state = {
      activePage: 0
    }
    // this.renderIndicator = this.renderIndicator.bind(this)
  }

  // scrollview内部的组件
  renderScrollItem() {
    // 组件数组
    let itemArr = [];
    // 颜色数组
    let dataArr = TopMenu.data;

    for(let i=0; i<dataArr.length; i++) {
      itemArr.push(
        <TopListView key={i} dataArr={dataArr[i]} />
      )
    }

    return itemArr;
  }

  // 页面指示器
  renderIndicator() {
    // 指示器数组
    let indicatorArr = [], style;
    for(let i = 0; i < 2; i++) {

      // 设置圆点的样式
      style = (i === this.state.activePage) ? {color: 'orange'} : {color: 'gray'};

      indicatorArr.push(
        <Text key={i} style={[{fontSize:25}, style]}>&bull;</Text>
      )
    }
    // 返回数组
    return indicatorArr;
  }

  // 当一帧滚动结束的时候调用
  onScrollAnimationEnd(e) {
    // 求出当前的页码
    let currentPage = Math.floor(e.nativeEvent.contentOffset.x / width);

    this.setState({
      activePage: currentPage
    })
  }

  render() {
    return (
      <View style={styles.container}>
        {/*内容部分*/}
        <ScrollView
          horizontal={true}
          pagingEnabled={true}
          showsHorizontalScrollIndicator={false}
          onMomentumScrollEnd = {this.onScrollAnimationEnd.bind(this)}
          >
          {this.renderScrollItem()}
        </ScrollView>
        {/*页码部分*/}
        <View style={styles.indicatorViewStyle}>
          {this.renderIndicator()}
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#fff'
  },
  indicatorViewStyle: {
    flexDirection: 'row',
    justifyContent: 'center',
  }
});

export default TopView;