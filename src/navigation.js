import { createStackNavigator } from 'react-navigation';

import Home from './Home';
import StoryBook from './StoryBook';


const navigationOptions = {
  header: null,
};

const routes = {
  HOME: {
    screen: Home,
    navigationOptions,
  },
  STORYBOOK: {
    screen: StoryBook,
    navigationOptions,
  },
}
export default createStackNavigator(routes)