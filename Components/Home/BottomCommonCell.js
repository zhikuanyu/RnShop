import React, { Component } from 'react';
import {
  StyleSheet,
  Text,
  View,
  Image,
  TouchableOpacity
} from 'react-native';

import icons from '../../Assets/icons';

/*
 * leftIcon 左边的图标
 * leftTitle 左边标题
 * rightTitle 右边的标题
 */

class BottomCommonCell extends Component {
  render() {
    return (
      <View style={styles.container}>
        {/*左边部分*/}
        <View style={styles.leftPartStyle}>
          <Image source={{uri: this.props.leftIcon}} style={styles.leftIconStyle} />
          <Text style={styles.leftTitleStyle}>{this.props.leftTitle}</Text>
        </View>
        {/*右边部分*/}
        <View style={styles.rightPartStyle}>
          <Text style={styles.rightTitleStyle}>{this.props.rightTitle}</Text>
          <Image source={{uri: icons.arrowRight}} style={styles.arrow} />
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    height: 44,
    backgroundColor: '#fff'
  },
  leftPartStyle: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  leftIconStyle: {
    width: 23,
    height: 23,
    resizeMode: 'contain',
    marginLeft: 8
  },
  leftTitleStyle: {
    fontSize: 18,
    marginLeft: 5
  },
  rightPartStyle: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  rightTitleStyle: {
    color: '#999'
  },
  arrow: {
    width: 8,
    height: 13,
    marginRight: 8,
    marginLeft: 5,
    tintColor: '#999'
  }
});

export default BottomCommonCell;