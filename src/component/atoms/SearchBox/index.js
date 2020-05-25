import { SearchBar } from 'react-native-elements';
import React, { Component } from 'react';
import { colors } from '../../../utils';
import { color } from 'react-native-reanimated';
import { Colors } from 'react-native/Libraries/NewAppScreen';

class SearchBox extends Component {
  constructor(props) {
    super(props);
    //setting default state
    this.state = { isLoading: true, text: '' };
    this.arrayholder = [];
  }

  updateSearch = search => {
    this.setState({ search });
  };
  SearchFilterFunction= (text) => {
    //passing the inserted text in textinput
    const newData = this.arrayholder.filter(function(item) {
      //applying filter for the inserted text in search bar
      const itemData = item.title ? item.title.toUpperCase() : ''.toUpperCase();
      const textData = text.toUpperCase();
      return itemData.indexOf(textData) > -1;
    });
    this.setState({
      //setting the filtered newData on datasource
      //After setting the data it will automatically re-render the view
      dataSource: newData,
      text: text,
    });
  }
  render() {
    return (
      <SearchBar
        placeholder="Cari"
        onChangeText={text => this.SearchFilterFunction(text)}
        value={this.state.text}
        inputStyle={{fontSize:14, fontWeight: 'normal', fontFamily:'Nunito'}}
        containerStyle={{height :50, backgroundColor:colors.white1, borderTopColor:colors.gray4, borderTopColor:colors.white1, borderBottomWidth:0, paddingBottom:10}}
        inputContainerStyle={{height :40, backgroundColor:colors.gray4, borderRadius: 7}}
      />
    );
  }
}
export default SearchBox;