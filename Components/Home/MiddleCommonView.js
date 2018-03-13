import React, { Component } from 'react';
import {
  Platform,
  StyleSheet,
  Text,
  View,
  Image,
  TouchableOpacity
} from 'react-native';
import PropTypes from 'prop-types';

import Dimensions from 'Dimensions';
const { width } = Dimensions.get('window');

class MiddleCommonView extends Component {
  static defaultProps = {
    item: null
  }

  static propTypes = {
    item: PropTypes.object.isRequired
  }

  render() {
    return (
      <TouchableOpacity onPress={() => alert('点击了')}> 
        <View style={styles.container}>
          {/*左边*/}
          <View>
            <Text style={[{color: this.props.item.titleColor}, styles.titleStyle]}>{this.props.item.title}</Text>
            <Text style={styles.subTitleStyle}>{this.props.item.subTitle}</Text>
          </View>
          {/*右边*/}
          <Image source={{uri: this.props.item.rightImage}} style={{width: 64, height: 42, resizeMode: 'contain'}} />
        </View>
      </TouchableOpacity>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#fff',
    width: width * 0.5 - 1,
    height: 59,
    flexDirection: 'row',
    marginBottom: 1,
    alignItems: 'center',
    justifyContent: 'space-around',
  },
  titleStyle: {
    fontSize: 18,
    fontWeight: 'bold',
  },
  subTitleStyle: {
    color: 'gray'
  }
});

export default MiddleCommonView;