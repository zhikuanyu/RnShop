import React, { Component } from 'react';
import {
  Platform,
  StyleSheet,
  Text,
  View,
  Image,
  ListView,
  TouchableOpacity
} from 'react-native';

import Dimensions from 'Dimensions';
const { width } = Dimensions.get('window');

class TopListView extends Component {
  constructor(props) {
    super(props);
    
    // 创建数据源
    let ds = new ListView.DataSource({rowHasChanged: (row1, row2) => row1 !== row2});

    this.state = {
      dataSource: ds.cloneWithRows(this.props.dataArr)
    }
  }

  renderRow(rowdata) {
    return (
      <TouchableOpacity onPress={() => alert('点击了')}>
        <View style={styles.cellStyle}>
          <Image source={{uri: rowdata.image}} style={{width: 52,height: 52}}/>
          <Text style={{color: '#999', fontSize: 12}}>{rowdata.title}</Text>
        </View>
      </TouchableOpacity>  
    )
  }

  render() {
    return (
      <ListView
        dataSource={this.state.dataSource}
        renderRow={this.renderRow.bind(this)}
        contentContainerStyle={styles.contentViewStyle}
        scrollEnabled={false}
         />
    );
  }
}

const styles = StyleSheet.create({
  contentViewStyle: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    width: width
  },
  cellStyle: {
    width: 70,
    height: 70,
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 10,
    marginLeft: (width-70 * 5) / (5 + 1),
  }
});

export default TopListView;