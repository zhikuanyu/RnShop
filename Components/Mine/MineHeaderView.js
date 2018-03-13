import React, { Component } from 'react';
import {
  StyleSheet,
  Text,
  View,
  Image,
  Platform
} from 'react-native';
import Dimensions from 'Dimensions';
var {width} = Dimensions.get('window');

import icons from '../../Assets/icons';

class MineHeaderView extends Component {

  renderTopView() {
    return (
      <View style={styles.topViewStyle}>
        <Image source={{uri: 'see'}} style={styles.leftIconStyle} />
        <View style={styles.centerViewStyle}>
          <Text style={{fontSize: 18, color: '#fff', fontWeight: 'bold', marginRight: 5}}>小码哥电商</Text>
          <Image source={{uri: 'avatar_vip'}} style={{width: 17, height: 17}} />
        </View>
        {/*右边的箭头*/}
        <Image source={{uri: icons.arrowRight}} style={{width: 10, height: 15, marginRight: 8, tintColor: 'rgba(255,255,255,0.7)'}} />
      </View>
    )
  }

  renderBottomView() {
    let itemArr = [
      {num: 100, title: '码哥卷'},
      {num: 12, title: '评价'},
      {num: 50, title: '收藏'},
    ];

    return itemArr.map((item,i) => {
      return (
        <View key={i} style={styles.headerViewItemStyle}>
          <Text style={{color: '#fff'}}>{item.num}</Text>
          <Text style={{color: '#fff'}}>{item.title}</Text>
        </View> 
      )
    })
  }

  render() {
    return (
      <View style={styles.container}>
        {/*----上半部分----*/}
        {this.renderTopView()}
        {/*----下半部分----*/}
        <View style={styles.bottomViewStyle}>
          {this.renderBottomView()}
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    height: 180,
    backgroundColor: 'rgba(255, 96, 0, 1.0)',
    ...Platform.select({
      ios: {
        height: 180,
        paddingTop: 40
      },
      android: {
        height: 160,
        paddingTop: 20
      }
    })
  },
  topViewStyle: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-around',
  },
  leftIconStyle: {
    width: 70,
    height: 70,
    borderRadius: 35,
    borderWidth: 3,
    borderColor: 'rgba(0, 0, 0, 0.2)',
    marginLeft: 8,
    marginRight: 8
  },
  centerViewStyle: {
    flexDirection: 'row',
    width: width * 0.72
  },
  bottomViewStyle: {
    flexDirection: 'row',
    alignItems: 'center',
    marginTop: 15
  },
  headerViewItemStyle: {
    width: width/3 + 1,
    height: 55,
    paddingTop: 10,
    alignItems: 'center',
    backgroundColor: 'rgba(255,255,255,0.3)',
    borderRightWidth: 1,
    borderRightColor: '#fff',
  }
});

export default MineHeaderView;