import React, { Component } from 'react';
import {
  StyleSheet,
  Text,
  View,
  Image,
  TouchableOpacity
} from 'react-native';
import MiddleData from './MiddleData';

class MineMiddleView extends Component {
  renderAllItem() {
    return MiddleData.map((item, i) => {
      return (
        <InnerView key={i} iconName={item.iconName} title={item.title} />
      )
    })
  }
  render() {
    return (
      <View style={styles.container}>
        {this.renderAllItem()}
      </View>
    );
  }
}

class InnerView extends Component {
  render() {
    return (
      <View style={styles.innerViewStyle}>
        <Image source={{uri: this.props.iconName}} style={{width: 30, height: 20}}/>
        <Text style={{color: '#999', fontSize: 14}}>{this.props.title}</Text>
      </View>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#fff',
    justifyContent: 'space-around',
    paddingTop: 10,
    paddingBottom: 10,
  },
  innerViewStyle: {
    alignItems: 'center'
  }
});

export default MineMiddleView;