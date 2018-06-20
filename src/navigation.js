import { createStackNavigator } from 'react-navigation';

import Home from './Home';
import Storybook from './Storybook';


const navigationOptions = {
  header: null,
};

const routes = {
  HOME: {
    screen: Home,
    navigationOptions,
  },
  STORYBOOK: {
    screen: Storybook,
    navigationOptions,
  },
}
export default createStackNavigator(routes)