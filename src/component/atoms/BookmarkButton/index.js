import React from 'react';
import {
  FlatList,
  StyleSheet,
  Text,
  View,
} from 'react-native';
import { icons, colors } from '../../../utils';
import { Icon } from 'react-native-elements';

const DATA = [
  {
    id: 'bd7acbea-c1b1-46c2-aed5-3ad53abb28ba',
    title: 'First Item',
  },
];

function Item({ id, title, selected, onSelect }) {
  return (
      selected? (
        <Icon
        name='bookmark'
          onPress={() => onSelect(id)} 
          color= { colors.gray2}
        />
      ) : (
        <Icon
        name='bookmark-border'
          onPress={() => onSelect(id)} 
          color= {colors.gray2 }
        />
      )
  );
}

export default function BookmarkButton() {
  const [selected, setSelected] = React.useState(new Map());

  const onSelect = React.useCallback(
    id => {
      const newSelected = new Map(selected);
      newSelected.set(id, !selected.get(id));

      setSelected(newSelected);
    },
    [selected],
  );

  return (
    <View style={{
        marginTop: 10,
        marginRight: 15
        }}>
      <FlatList
        data={DATA}
        renderItem={({ item }) => (
          <Item
            id={item.id}
            selected={!!selected.get(item.id)}
            onSelect={onSelect}
          />
        )}
        keyExtractor={item => item.id}
        extraData={selected}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  title: {
    fontSize: 32,
  },
});
