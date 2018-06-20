import React from 'react';
import { ScrollView, TouchableOpacity } from 'react-native';
import { createStackNavigator } from 'react-navigation';
import { ListItem, Text } from 'react-native-elements';

// USAGE COMPONENTS
import Avatar from './components/stories/Avatar.usage';

const List = ({ navigation }) => (
  <ScrollView>
    {Object.keys(Routes)
      .filter(e => e !== 'STORYBOOK')
      .map((title, i) => (
        <ListItem
          key={`list-item-${i}`}
          title={title}
          chevron
          leftElement={<Text>·</Text>}
          onPress={() => navigation.navigate(title)}
        />
      ))}
  </ScrollView>
);

const Exit = ({ navigation }) => (
  <TouchableOpacity
    onPress={() => {
      navigation.goBack(null);
    }}
    style={{ margin: 10 }}
  >
    <Text>Exit</Text>
  </TouchableOpacity>
);

const navigationOptions = ({ navigation }) => ({
  headerRight: <Exit navigation={navigation} />,
})

const Routes = {
  STORYBOOK: {
    screen: List,
    navigationOptions,
  },
  // ADD YOUR USAGE COMPONENTS HERE
  Avatar: {
    screen: Avatar,
  }
};

export default createStackNavigator(Routes);
