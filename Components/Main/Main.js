import React, { Component } from 'react';
import { Text, View, Image, StyleSheet } from 'react-native';
import { TabNavigator, StackNavigator } from 'react-navigation';

// 导入展示页面
import Home from '../Home/Home';
import ShopCenterDetail from '../Home/ShopCenterDetail';
import Shop from '../Shop/Shop';
import Mine from '../Mine/Mine';
import More from '../More/More';

// 导入icons
import icons from '../../Assets/icons';

// 首页的导航
const HomeStack = StackNavigator({
  Home: {screen: Home},
  ShopCenterDetail: {screen: ShopCenterDetail}
},
{
  headerMode: 'none'
})



// Tab
export default Tab = TabNavigator({
  Home: {
    screen: HomeStack,
    navigationOptions: {
      tabBarLabel: '首页',
      tabBarIcon: ({focused, tintColor}) => {
        return <Image source={{uri: icons.home}} style={[{tintColor: tintColor}, styles.iconImage]} />
      }
    }
  },
  Shop: {
    screen: Shop,
    navigationOptions: {
      tabBarLabel: '商店',
      tabBarIcon: ({focused, tintColor}) => {
        return <Image source={{uri: icons.shop}} style={[{tintColor: tintColor}, styles.iconImage]} />
      }
    }
  },
  Mine: {
    screen: Mine,
    navigationOptions: {
      tabBarLabel: '我的',
      tabBarIcon: ({focused, tintColor}) => {
        return <Image source={{uri: icons.mine}} style={[{tintColor: tintColor}, styles.iconImage]} />
      }
    }
  },
  More: {
    screen: More,
    navigationOptions: {
      tabBarLabel: '更多',
      tabBarIcon: ({focused, tintColor}) => {
        return <Image source={{uri: icons.more}} style={[{tintColor: tintColor}, styles.iconImage]} />
      }
    }
  }
},{
  //设置TabNavigator的位置
  tabBarPosition: 'bottom',
  //是否在更改标签时显示动画
  animationEnabled: true,
  //是否允许在标签之间进行滑动
  swipeEnabled: true,
  //按 back 键是否跳转到第一个Tab(首页)， none 为不跳转
  backBehavior: "none",
  //设置Tab标签的属性

  tabBarOptions: {
      //Android属性
      upperCaseLabel: false,//是否使标签大写，默认为true
      //共有属性
      showIcon: true,//是否显示图标，默认关闭
      showLabel: true,//是否显示label，默认开启
      activeTintColor: '#00a8c9',//label和icon的前景色 活跃状态下（选中）
      inactiveTintColor: 'gray',//label和icon的前景色 活跃状态下（未选中）
      style: { //TabNavigator 的背景颜色
          backgroundColor: 'white',
          height: 55,
      },
      indicatorStyle: {//标签指示器的样式对象（选项卡底部的行）。安卓底部会多出一条线，可以将height设置为0来暂时解决这个问题
          height: 0,
      },
      labelStyle: {//文字的样式
          fontSize: 13,
          marginTop: -5,
          marginBottom: 5,
      },
      iconStyle: {//图标的样式
          marginBottom: 5,
      }
  },
})

const styles = StyleSheet.create({
  iconImage: {
    width: 24,
    height: 24
  }
})