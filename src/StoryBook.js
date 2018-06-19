import React from 'react';
import { ScrollView, TouchableOpacity } from 'react-native';
import { createStackNavigator } from 'react-navigation';
import { ListItem, Text } from 'react-native-elements';

const List = () => (
  <ScrollView>
    {Object.keys(Routes)
      .filter(e => e !== 'Home')
      .map((title, i) => (
        <ListItem
          key={`list-item-${i}`}
          title={title}
          chevron
          leftElement={<Text>·</Text>}
          onPress={() => this.props.navigation.navigate(title)}
        />
      ))}
  </ScrollView>
);

const Exit = ({ navigation }) => (
  <TouchableOpacity
    onPress={() => {
      navigation.goBack();
    }}
    style={{ margin: 10 }}
  >
    <Text>Exit</Text>
  </TouchableOpacity>
);

const Routes = {
  STORYBOOK: {
    screen: List,
    navigationOptions: ({ navigation }) => ({
      headerRight: <Exit navigation={navigation} />,
    }),
  },
};

export default createStackNavigator(Routes);
