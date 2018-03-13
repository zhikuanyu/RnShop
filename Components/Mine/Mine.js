import React, { Component } from 'react';
import {
  Platform,
  StyleSheet,
  Text,
  View,
  ScrollView
} from 'react-native';
import CommonCell from './MineCell';
import MineHeaderView from './MineHeaderView';
import MineMiddleView from './MineMiddleView';

class Mine extends Component {
  render() {
    return (
      <View>
        <MineHeaderView />
        <ScrollView style={styles.container}>
          <View>
            <CommonCell
              leftIconName='collect'
              leftTitle='我的订单'
              rightTitle='查看全部订单' />

              <MineMiddleView />
              
          </View>

          <View style={{marginTop: 20}}>
            <CommonCell
              leftIconName='draft'
              leftTitle='小码哥钱包'
              rightTitle='账户余额: ¥100' />
            <CommonCell
              leftIconName='like'
              leftTitle='抵用券'
              rightTitle='10张' />
          </View>

          <View style={{marginTop: 20}}>
            <CommonCell
              leftIconName='card'
              leftTitle='积分商城' />
          </View>

          <View style={{marginTop: 20}}>
            <CommonCell
              leftIconName='new_friend'
              leftTitle='今日推荐'
              rightIconName='me_new' />
          </View>

          <View style={{marginTop: 20}}>
            <CommonCell
              leftIconName='pay'
              leftTitle='我要合作'
              rightTitle='轻松开店，招财进宝' />
          </View>
        </ScrollView>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#e8e8e8',
  },
  welcome: {
    fontSize: 20,
    textAlign: 'center',
    margin: 10,
  }
});

export default Mine;