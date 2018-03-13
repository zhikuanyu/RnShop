import React, { Component } from 'react';
import {
  StyleSheet,
  Text,
  View,
  Image,
  TouchableOpacity
} from 'react-native';
import icons from '../../Assets/icons';

class CommonCell extends Component {
  // 右边的内容
  rightSubView(){
    return (
      <View style={{flexDirection: 'row', alignItems: 'center'}}>
        {this.renderRightContent()}
        {/*----箭头----*/}
        <Image source={{uri: icons.arrowRight}} style={styles.arrow} />
      </View>  
    )
  }

  // 右边具体返回的值
  renderRightContent() {
    if (!this.props.rightIconName) {
      return (
        <Text style={{color: '#666'}}>{this.props.rightTitle}</Text> 
      )
    } else {
      return (
        <Image source={{uri: this.props.rightIconName}} style={{width: 24, height: 13}} />
      )
    }
  }

  render() {
    return (
      <TouchableOpacity onPress={() => alert('点击了')}>
        <View style={styles.container}>
          {/*----左边----*/}
          <View style={styles.leftViewStyle}>
            <Image source={{uri: this.props.leftIconName}} style={styles.leftImgStyle} />
            <Text style={styles.leftTitleStyle}>{this.props.leftTitle}</Text>
          </View>

          {/*----右边----*/}
          <View style={styles.rightViewStyle}>
            {this.rightSubView()}
          </View>
        </View>
      </TouchableOpacity>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingLeft: 8,
    paddingRight: 6,
    backgroundColor: "#fff",
    alignItems: 'center',
    height: 40,
    borderBottomColor: '#e8e8e8',
    borderBottomWidth: 0.5,
  },
  leftViewStyle: {
    flexDirection: 'row',
    alignItems: 'center'
  },
  leftImgStyle: {
    width: 24,
    height: 24,
    borderRadius: 12,
    marginRight: 8
  },
  leftTitleStyle:{
    fontSize: 16,
  },
  rightViewStyle: {

  },
  arrow: {
    width: 8,
    height: 13,
    marginRight: 8,
    marginLeft: 5
  }
});

export default CommonCell;