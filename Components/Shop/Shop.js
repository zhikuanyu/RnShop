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

const WEB_VIEW_URL = 'http://meishi.meituan.com/i/?ci=30&stid_b=1&cevent=imt%2Fhomepage%2Fcategory1%2F1';

class Shop extends Component {

  renderNavBar() {
    return (
      <View style={styles.navBarStyle}>
        <TouchableOpacity
          onPress={() => this.props.navigation.goBack()}
          style={{position: 'absolute', left: 20, bottom: 12}}
          >
          <Image source={{uri: 'icon_shop_local'}} style={styles.goBackStyle} />
        </TouchableOpacity>
        <Text style={styles.navBarTitle}>商家</Text>
        <TouchableOpacity
          onPress={() => alert('点击了')}
          style={{position: 'absolute', right: 20, bottom: 12}}
          >
          <Image source={{uri: 'icon_shop_search'}} style={styles.navBarImageStyle} />
        </TouchableOpacity>
      </View>
    )
  }

  render() {

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
            source={{uri: WEB_VIEW_URL}} />
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

export default Shop;