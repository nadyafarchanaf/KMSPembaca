import { SearchBar } from 'react-native-elements';
import React, { Component } from 'react';
import { colors } from '../../../utils';
import { color } from 'react-native-reanimated';
import { Colors } from 'react-native/Libraries/NewAppScreen';

class SearchBox extends Component {
  state = {
    search: '',
  };

  updateSearch = search => {
    this.setState({ search });
  };

  render() {
    const { search } = this.state;

    return (
      <SearchBar
        placeholder="Cari"
        onChangeText={this.updateSearch}
        value={search}
        inputStyle={{fontSize:14, fontWeight: 'normal', fontFamily:'Nunito'}}
        containerStyle={{height :50, backgroundColor:color.white, borderTopColor:colors.gray4, borderBottomWidth:0, marginBottom:10}}
        inputContainerStyle={{height :40, backgroundColor:colors.gray4, borderRadius: 7}}
      />
    );
  }
}
export default SearchBox;