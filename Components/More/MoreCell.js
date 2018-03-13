import React, { Component } from 'react';
import {
  StyleSheet,
  Text,
  View,
  Image,
  TouchableOpacity,
  Switch
} from 'react-native';
import icons from '../../Assets/icons'

class CommonCell extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isOn: false
    }
  }

  renderRightView() {
    if (this.props.isSwitch) {
      return (
        <Switch
          value={this.state.isOn}
          onValueChange={() => {
            this.setState({
              isOn: !this.state.isOn
            })
          }} />
      )
    } else {
      return (
        <View style={{flexDirection: 'row', alignItems: 'center'}}>
          {this.renderRightTitle()}
          <Image source={{uri: icons.arrowRight}} style={styles.arrow} />
        </View>
      )
    }
  }

  renderRightTitle() {
    if (this.props.rightTitle) {
      return (
        <Text style={{color: '#999', marginRight: 3,}}>{this.props.rightTitle}</Text>
      )
    }
  }

  render() {
    return (
      <TouchableOpacity onPress={() => alert('点击了')}>
        <View style={styles.container}>
          {/*左边*/}
          <Text style={styles.welcome}>
            {this.props.title}
          </Text>
          {/*右边*/}
          {this.renderRightView()}
        </View>
      </TouchableOpacity>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    height: 40,
    backgroundColor: '#fff',
    borderBottomColor: '#ddd',
    borderBottomWidth: 0.5,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingLeft: 8,
    paddingRight: 8
  },
  arrow: {
    width: 8,
    height: 13,
    marginRight: 8
  }
});

export default CommonCell;