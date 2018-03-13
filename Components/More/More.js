import React, { Component } from 'react';
import {
  Platform,
  StyleSheet,
  Text,
  Image,
  View,
  TouchableOpacity,
  ScrollView
} from 'react-native';
import CommonCell from './MoreCell';

class More extends Component {
  renderNavBar() {
    return (
      <View style={styles.navBarStyle}>
        <Text style={styles.navBarTitle}>更多</Text>
        <TouchableOpacity
          onPress={() => alert('点击了')}
          style={{position: 'absolute', right: 20, bottom: 12}}
          >
          <Image source={{uri: 'icon_mine_setting'}} style={styles.navBarImageStyle} />
        </TouchableOpacity>
      </View>
    )
  }
  render() {
    return (
      <View style={styles.container}>
        {/**页面顶部导航栏**/}
        {this.renderNavBar()}
        
        <ScrollView>
          <View style={{marginTop: 20}}>
            <CommonCell title="扫一扫" />
          </View>
          <View style={{marginTop: 20}}>
            <CommonCell title="省流量模式" isSwitch={true} />
            <CommonCell title="消息提醒" />
            <CommonCell title="邀请好友使用码团" />
            <CommonCell title="清空缓存" rightTitle="1.99M" />
          </View>
          <View style={{marginTop: 20}}>
            <CommonCell title="问卷调查" />
            <CommonCell title="支付帮助" />
            <CommonCell title="网络诊断" />
            <CommonCell title="关于码团" />
            <CommonCell title="我要应聘" />
          </View>
          <View style={{marginTop: 20}}>
            <CommonCell title="精品应用" />
          </View>
        </ScrollView>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#e8e8e8',
  },
  navBarStyle: {
    ...Platform.select({
      ios: {
        height: 64,
        paddingTop: 20
      },
      android: {
        height: 44,
      }
    }),
    backgroundColor: 'rgba(255, 96, 0, 1.0)',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
  },
  navBarTitle: {
    color: '#fff',
    fontSize: 18,
    fontWeight: '500',
  },
  navBarImageStyle: {
    width: 28,
    height: 28,
    tintColor: '#fff'
  }
});

export default More;