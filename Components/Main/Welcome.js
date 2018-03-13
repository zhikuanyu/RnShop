import React, { Component } from 'react';
import {
  StyleSheet,
  Image,
  Text,
  View
} from 'react-native';
import Main from '../Main/Main';
import Dimensions from 'Dimensions';
let {width, height} = Dimensions.get('window');

class Welcome extends Component {
  constructor(props) {
    super(props);
  }

  componentDidMount() {
    const { navigate } = this.props.navigation;
    setTimeout(() => {
      navigate('Main');
    }, 2000)
  }

  render() {
    return (
      <Image source={require('../../Assets/launchimage.png')} style={styles.launchImageStyle}/>
    );
  }
}

const styles = StyleSheet.create({
  launchImageStyle: {
    width: width,
    height: height
  }
});

export default Welcome;