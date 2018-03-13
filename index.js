import { AppRegistry } from 'react-native';
import { StackNavigator } from 'react-navigation';
import Main from './Components/Main/Main';
import Welcome from './Components/Main/Welcome';

const Launch = StackNavigator({
  Welcome: {screen: Welcome},
  Main: {screen: Main}
},{
  headerMode: 'none'
})

AppRegistry.registerComponent('RnShop', () => Main);
