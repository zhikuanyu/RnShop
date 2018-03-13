import React, { Component } from 'react';
import {
  Platform,
  StyleSheet,
  Text,
  TextInput,
  Image,
  View,
  TouchableOpacity,
  ScrollView
} from 'react-native';
import Dimensions from 'Dimensions';
import TopView from './TopView';
import MiddleView from './MiddleView';
import ShopCenter from './ShopCenter';
import ShopCenterDetail from './ShopCenterDetail';
import GuestYouLike from './GuestYouLike';

let {width, height} = Dimensions.get('window');

class Home extends Component {
  constructor(props) {
    super(props);
    this.pushToShopCenterDetail = this.pushToShopCenterDetail.bind(this);
  }

  renderNavBar() {
    return (
      <View style={styles.navBarStyle}>
        {/*左边*/}
        <TouchableOpacity onPress={() => alert('点击了')}>
          <Text style={{color: '#ffffff'}}>广州</Text>
        </TouchableOpacity>
        {/*中间*/}
        <TextInput
        placeholder="输入商家、品类、商圈"
        underlineColorAndroid='transparent'
        style={styles.topInputStyle} />
        {/*右边*/}
        <View style={styles.rightNavViewStyle}>
          <TouchableOpacity onPress={() => alert('点击了')}>
            <Image source={{uri: 'icon_homepage_message'}} style={styles.navRightImgStyle} />
          </TouchableOpacity>
          <TouchableOpacity onPress={() => alert('点击了')}>
            <Image source={{uri: 'icon_homepage_scan'}} style={styles.navRightImgStyle} />
          </TouchableOpacity>
        </View>

      </View>  
    )
  }

  // 处理webview的url
  dealWithUrl(url) {
    return url.replace('imeituan://www.meituan.com/web/?url=', '');
  }

  pushToShopCenterDetail(url) {
    this.props.navigation.navigate('ShopCenterDetail',{url: this.dealWithUrl(url)});
  }


  render() {
    return (
      <View style={styles.container}>
        {/*首页的导航条*/}
        {this.renderNavBar()}

        {/*首页的其他内容*/}
        <ScrollView>
          {/*头部的view*/}
          <TopView />
          {/*中间的内容*/}
          <MiddleView />
          {/*购物中心*/}
          <ShopCenter
            popToHomePage={(url) => this.pushToShopCenterDetail(url)} />
          {/*猜你喜欢*/}
          <GuestYouLike />
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
    justifyContent: 'space-around',
  },
  topInputStyle: {
    width: width * 0.7,
    ...Platform.select({
      ios: {
        height: 30
      },
      android: {
        marginTop: 5,
        marginBottom: 5,
        padding: 0
      }
    }),
    fontSize: 14,
    paddingLeft: 10,
    backgroundColor: 'white',
    borderRadius: 15,
  },
  rightNavViewStyle: {
    flexDirection: 'row',
  },
  navRightImgStyle: {
    width: 28,
    height: 28
  },
  welcome: {
    fontSize: 20,
    textAlign: 'center',
    margin: 10,
  }
});

export default Home;