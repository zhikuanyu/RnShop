import React, { Component } from 'react';
import {
  Platform,
  StyleSheet,
  Text,
  View,
  ScrollView,
  Image,
  TouchableOpacity
} from 'react-native';

import BottomCommonCell from './BottomCommonCell';

let shopsData = require('../../LocalData/Home_D5.json');

class ShopCenter extends Component {
  popToHome(url) {
    if (!url) return;
    this.props.popToHomePage(url)
  }

  renderShopList() {
    // 数据数组
    let dataArr = shopsData.data;

    return dataArr.map((item, i) => {
      return (
        <ShopCenterItem
          key={i}
          detailurl={item.detailurl}
          shopImage={item.img}
          shopSale={item.showtext.text}
          shopName={item.name}
          popTopShopCenter={(url) => this.popToHome(url)} />
      )
    })

  }

  render() {
    return (
      <View style={styles.container}>
        <BottomCommonCell
          leftIcon="gwzx"
          leftTitle="购物中心"
          rightTitle={shopsData.tips} />
        {/*商家列表*/}
        <ScrollView
          style={styles.scrollViewStyle}
          showsHorizontalScrollIndicator={false}
          horizontal={true}>
          {this.renderShopList()}
        </ScrollView>
      </View>
    );
  }
}

// 每一家商场
class ShopCenterItem extends Component {
  constructor(props) {
    super(props);
    this.clickItem = this.clickItem.bind(this);
  }
  clickItem(url) {
    if (!url) return;
    this.props.popTopShopCenter(url);
  }

  render() {
    return (
      <TouchableOpacity onPress={() => this.clickItem(this.props.detailurl)}>
        <View style={styles.itemViewStyle}>
          <Image source={{uri: this.props.shopImage}} style={styles.imageStyle} />
          <Text style={styles.shopSaleStyle}>{this.props.shopSale}</Text>
          <Text style={styles.shopNameStyle}>{this.props.shopName}</Text>
        </View>
      </TouchableOpacity>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    marginTop: 15,
  },
  imageStyle: {
    width: 120,
    height: 100,
    borderRadius: 5,
  },
  scrollViewStyle: {
    backgroundColor: '#fff',
    padding: 10
  },
  itemViewStyle: {
    margin: 8,
  },
  shopSaleStyle: {
    position: 'absolute',
    left: 0,
    bottom: 30,
    padding: 3,
    backgroundColor: 'orange',
    color: '#fff'
  },
  shopNameStyle: {
    textAlign: 'center',
    marginTop: 5
  }
});

export default ShopCenter;