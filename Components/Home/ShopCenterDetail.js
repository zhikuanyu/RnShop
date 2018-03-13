import React, { Component } from 'react';
import {
  Platform,
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  Image,
  WebView
} from 'react-native';

class ShopCenterDetail extends Component {

  renderNavBar() {
    return (
      <View style={styles.navBarStyle}>
        <TouchableOpacity
          onPress={() => this.props.navigation.goBack()}
          style={{position: 'absolute', left: 20, bottom: 12}}
          >
          <Image source={{uri: 'navigationbar_arrow_up'}} style={styles.goBackStyle} />
        </TouchableOpacity>
        <Text style={styles.navBarTitle}>店铺详情</Text>
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
    const { params } = this.props.navigation.state;
    const webViewUrl = params ? params.url : '';

    return (
        <View style={styles.container}>
          {/*导航*/}
          {this.renderNavBar()}
          {/*详情页内容webview*/}
          <WebView
            automaticallyAdjustContentInsets={true}
            javaScriptEnabled={true}
            domStorageEnabled={true}
            decelerationRate='normal'
            startInLoadingState={true}
            source={{uri: webViewUrl}} />
        </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
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
  },
  goBackStyle: {
    width: 20,
    height: 20,
    resizeMode: 'contain'
  }
});

export default ShopCenterDetail;