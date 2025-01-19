import React, {memo} from 'react';
import { FlatList, StyleSheet, Text, View } from 'react-native';

const Item = memo(({ item }) => (
  <View style={styles.item}>
    <Text>{item.text}</Text>
  </View>
));

const DATA = Array.from({ length: 1000 }, (_, i) => ({ id: i, text: `Item ${i}` }));

const FlatListBugSolution = () => {
  const renderItem = ({ item }) => (
    <Item item={item} />
  );

  const getItemLayout = (data, index) => (
    {
      length: 50,
      offset: 50 * index,
      index
    }
  );

  return (
    <FlatList
      data={DATA}
      renderItem={renderItem}
      keyExtractor={(item) => item.id}
      getItemLayout={getItemLayout}
    />
  );
};

export default FlatListBugSolution;

const styles = StyleSheet.create({
  item: {
    backgroundColor: '#f9c2ff',
    padding: 20,
    marginVertical: 8,
    marginHorizontal: 16,
  },
});